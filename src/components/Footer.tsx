"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { socials } from "@/data/socials";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border bg-background/50 backdrop-blur-sm mt-24 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-pixel text-2xl tracking-wider text-foreground">
                SEANSTLAB
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-card border border-border font-mono text-muted">
                RELEASE v2.0.0
              </span>
            </div>
            <p className="text-xs font-mono text-muted">
              Nachapat Iamphuang — Computer Science Student & AI Researcher @ KMITL
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-xs text-muted hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-border/60">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono text-xs text-muted hover:text-foreground transition-colors"
            >
              <span>{social.name}</span>
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>

        {/* Bottom Legal & Colophon */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-4 border-t border-border/40 font-mono text-[11px] text-muted/70">
          <p>© {new Date().getFullYear()} Sean Nachapat. Open-source portfolio.</p>
          <div className="flex items-center gap-4">
            <Link href="/link" className="hover:text-foreground transition-colors">
              Bio Link
            </Link>
            <span>•</span>
            <Link href="/connect" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <span>•</span>
            <span>Bangkok, Thailand</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
