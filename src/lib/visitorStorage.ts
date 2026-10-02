import fs from "fs/promises";
import path from "path";
import type { GeoLocation } from "./geo";

export interface VisitorRecord extends GeoLocation {
  timestamp?: number;
}

export interface VisitorData {
  totalVisitors: number;
  currentVisitor?: VisitorRecord;
  previousVisitor?: VisitorRecord;
}

const DEFAULT_DATA: VisitorData = {
  totalVisitors: 1,
  currentVisitor: {
    city: "Bangkok",
    country: "Thailand",
    countryCode: "TH",
    formatted: "Bangkok, Thailand",
    flag: "🇹🇭",
    timestamp: Date.now(),
  },
  previousVisitor: {
    city: "Tokyo",
    country: "Japan",
    countryCode: "JP",
    formatted: "Tokyo, Japan",
    flag: "🇯🇵",
    timestamp: Date.now() - 3600000,
  },
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "visitors.json");

// Mutex queue to prevent race conditions during concurrent file writes
let queue = Promise.resolve();

function runExclusive<T>(task: () => Promise<T>): Promise<T> {
  const result = queue.then(task, task);
  queue = result.then(
    () => {},
    () => {}
  );
  return result;
}

async function readFromFile(): Promise<VisitorData> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return {
      totalVisitors: typeof parsed.totalVisitors === "number" ? parsed.totalVisitors : 1,
      currentVisitor: parsed.currentVisitor || DEFAULT_DATA.currentVisitor,
      previousVisitor: parsed.previousVisitor || DEFAULT_DATA.previousVisitor,
    };
  } catch {
    // If file doesn't exist, create it with initial defaults
    await writeToFile(DEFAULT_DATA);
    return DEFAULT_DATA;
  }
}

async function writeToFile(data: VisitorData): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const tmpFile = `${DATA_FILE}.tmp.${Date.now()}.${Math.random().toString(36).slice(2, 7)}`;
    await fs.writeFile(tmpFile, JSON.stringify(data, null, 2), "utf-8");
    await fs.rename(tmpFile, DATA_FILE);
  } catch (err) {
    console.error("Failed to write visitor data file:", err);
  }
}

// Optional Upstash Redis REST support if environment variables are provided
const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

async function readFromUpstash(): Promise<VisitorData | null> {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return null;
  try {
    const res = await fetch(`${UPSTASH_URL}/get/portfolio:visitors`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const body = await res.json();
    if (!body.result) return null;
    return typeof body.result === "string" ? JSON.parse(body.result) : body.result;
  } catch {
    return null;
  }
}

async function writeToUpstash(data: VisitorData): Promise<void> {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) return;
  try {
    await fetch(`${UPSTASH_URL}/set/portfolio:visitors`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(JSON.stringify(data)),
    });
  } catch (err) {
    console.error("Failed to write visitor data to Upstash:", err);
  }
}

export async function getVisitorStats(): Promise<VisitorData> {
  if (UPSTASH_URL && UPSTASH_TOKEN) {
    const upstashData = await readFromUpstash();
    if (upstashData) return upstashData;
  }
  return runExclusive(() => readFromFile());
}

export async function recordNewVisit(newLocation: GeoLocation): Promise<{
  totalVisitors: number;
  previousVisitor: VisitorRecord;
}> {
  return runExclusive(async () => {
    let currentData: VisitorData;
    if (UPSTASH_URL && UPSTASH_TOKEN) {
      const remote = await readFromUpstash();
      currentData = remote || (await readFromFile());
    } else {
      currentData = await readFromFile();
    }

    // The visitor before this new visit
    const previousForNewVisitor =
      currentData.currentVisitor || currentData.previousVisitor || DEFAULT_DATA.previousVisitor!;

    const newVisitorRecord: VisitorRecord = {
      ...newLocation,
      timestamp: Date.now(),
    };

    const nextData: VisitorData = {
      totalVisitors: currentData.totalVisitors + 1,
      previousVisitor: previousForNewVisitor,
      currentVisitor: newVisitorRecord,
    };

    if (UPSTASH_URL && UPSTASH_TOKEN) {
      await writeToUpstash(nextData);
    }
    await writeToFile(nextData);

    return {
      totalVisitors: nextData.totalVisitors,
      previousVisitor: previousForNewVisitor,
    };
  });
}
