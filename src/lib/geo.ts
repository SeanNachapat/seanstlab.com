export interface GeoLocation {
  city?: string;
  region?: string;
  country?: string;
  countryCode?: string;
  formatted: string;
  flag?: string;
}

export function getFlagEmoji(countryCode?: string): string {
  if (!countryCode || countryCode.length !== 2) return "";
  try {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  } catch {
    return "";
  }
}

export function getCountryName(countryCode?: string): string {
  if (!countryCode) return "";
  try {
    const displayNames = new Intl.DisplayNames(["en"], { type: "region" });
    return displayNames.of(countryCode.toUpperCase()) || countryCode;
  } catch {
    return countryCode;
  }
}

function isPrivateIp(ip: string): boolean {
  if (!ip || ip === "::1" || ip === "localhost" || ip.startsWith("127.")) {
    return true;
  }
  if (
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    ip.startsWith("fc00:") ||
    ip.startsWith("fe80:")
  ) {
    return true;
  }
  // 172.16.0.0 - 172.31.255.255
  if (ip.startsWith("172.")) {
    const parts = ip.split(".");
    if (parts.length >= 2) {
      const second = parseInt(parts[1], 10);
      if (second >= 16 && second <= 31) return true;
    }
  }
  return false;
}

export async function detectLocation(headers: Headers): Promise<GeoLocation> {
  // 1. Check Cloudflare Headers (Available when routed through Cloudflare / Cloudflare Tunnel)
  const cfCityRaw = headers.get("cf-ipcity");
  const cfCountry = headers.get("cf-ipcountry");
  const cfRegion = headers.get("cf-region");

  let cfCity: string | undefined;
  if (cfCityRaw) {
    try {
      cfCity = decodeURIComponent(cfCityRaw);
    } catch {
      cfCity = cfCityRaw;
    }
  }

  if (cfCountry && cfCountry !== "XX" && cfCountry !== "T1") {
    const countryName = getCountryName(cfCountry);
    const flag = getFlagEmoji(cfCountry);

    if (cfCity && cfCity.toLowerCase() !== "unknown") {
      return {
        city: cfCity,
        region: cfRegion || undefined,
        country: countryName,
        countryCode: cfCountry,
        formatted: `${cfCity}, ${countryName}`,
        flag,
      };
    }

    return {
      region: cfRegion || undefined,
      country: countryName,
      countryCode: cfCountry,
      formatted: countryName,
      flag,
    };
  }

  // 2. Fallback: check client IP address
  const clientIp =
    headers.get("cf-connecting-ip") ||
    headers.get("x-real-ip") ||
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "";

  if (clientIp && !isPrivateIp(clientIp)) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1500);

      const res = await fetch(`http://ip-api.com/json/${clientIp}?fields=status,city,regionName,country,countryCode`, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data.status === "success" && data.country) {
          const flag = getFlagEmoji(data.countryCode);
          const formatted = data.city ? `${data.city}, ${data.country}` : data.country;
          return {
            city: data.city || undefined,
            region: data.regionName || undefined,
            country: data.country,
            countryCode: data.countryCode,
            formatted,
            flag,
          };
        }
      }
    } catch {
      // Ignore lookup failure, will fall through to default
    }
  }

  // 3. Default fallback (e.g. local development or unknown)
  return {
    city: "Bangkok",
    country: "Thailand",
    countryCode: "TH",
    formatted: "Bangkok, Thailand",
    flag: getFlagEmoji("TH"),
  };
}
