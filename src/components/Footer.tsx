"use client";

import { useState, useEffect } from "react";

interface VisitorInfo {
  totalVisitors: number;
  previousVisitor?: {
    city?: string;
    country?: string;
    formatted: string;
    flag?: string;
  };
}

interface FooterProps {
  className?: string;
  showConnect?: boolean;
}

export default function Footer({ className = "", showConnect = true }: FooterProps) {
  const [time, setTime] = useState<string>("");
  const [visitorInfo, setVisitorInfo] = useState<VisitorInfo | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Bangkok",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function fetchVisitorStats() {
      try {
        const res = await fetch("/api/visitors");
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setVisitorInfo(data);
          }
        }
      } catch (err) {
        console.error("Failed to load visitor stats:", err);
      }
    }

    fetchVisitorStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className={`w-full font-mono ${className}`}>
      {showConnect && (
        <div className="flex flex-col gap-4 justify-between mt-4">
          <div className="flex flex-row items-center justify-between">
            <p className="font-semibold text-foreground font-sans">Let&apos;s Connect</p>
          </div>
          <div className="text-sm leading-relaxed text-foreground/90">
            <div className="space-y-4 animate-fadeIn">
              <p>
                <a
                  href="https://github.com/SeanNachapat/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 text-foreground font-medium hover:text-muted transition-colors"
                >
                  Github
                </a>
                ,&nbsp;
                <a
                  href="https://www.instagram.com/seanst._"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 text-foreground font-medium hover:text-muted transition-colors"
                >
                  Instagram
                </a>
                ,&nbsp;
                <a
                  href="https://www.linkedin.com/in/nachapati/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 text-foreground font-medium hover:text-muted transition-colors"
                >
                  LinkedIn
                </a>
                , or&nbsp;
                <a
                  href="mailto:sean@seanstlab.com"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 text-foreground font-medium hover:text-muted transition-colors"
                >
                  mail me.
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Time & Location */}
      <div className="text-muted flex flex-row gap-9 mt-10 text-xs">
        <p>Bangkok, Thailand</p>
        <p>{time ? `${time} GMT+7` : "--:--:-- GMT+7"}</p>
        <span>
            visitor{" "}
            <span className="text-foreground">
              {visitorInfo ? `#${visitorInfo.totalVisitors.toLocaleString()}` : "#..."}
            </span>
          </span>
          
      </div>
    </footer>
  );
}
