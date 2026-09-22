"use client";

import { useState, useEffect } from "react";

interface FooterProps {
  className?: string;
  showConnect?: boolean;
}

export default function Footer({ className = "", showConnect = true }: FooterProps) {
  const [time, setTime] = useState<string>("");

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

  return (
    <footer className={`w-full font-mono ${className}`}>
      {showConnect && (
        <div className="flex flex-col gap-4 justify-between mt-4">
          <p className="font-semibold text-foreground font-sans">Let&apos;s Connect</p>
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
      <div className="text-muted flex flex-row gap-9 my-10 text-xs">
        <p>Bangkok, Thailand</p>
        <p>{time ? `${time} GMT+7` : "--:--:-- GMT+7"}</p>
      </div>
    </footer>
  );
}
