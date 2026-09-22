"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Copy, Check, MessageSquare } from "lucide-react";
import { socials } from "@/data/socials";

export default function ConnectPage() {
  const [copied, setCopied] = useState(false);
  const email = "sean@seanstlab.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 lg:px-12 pt-28 pb-20 space-y-16">
      {/* ========================================================================= */}
      {/* SECTION 1: HEADER & INTRO                                                 */}
      {/* ========================================================================= */}
      <section className="space-y-6 border-b border-border pb-12">
        <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5 mb-2">
          <MessageSquare size={14} />
          COMMUNICATION & INQUIRIES / V2.0
        </span>
        <h1 className="font-pixel text-5xl sm:text-6xl lg:text-7xl text-foreground">
          LET&apos;S CONNECT
        </h1>
        <p className="font-mono text-sm sm:text-base text-muted max-w-xl leading-relaxed">
          Open for technical discussions, AI research collaborations, consulting, and guest lecturing.
          Drop a line or find me across social channels.
        </p>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: EMAIL QUICK COPY CARD                                          */}
      {/* ========================================================================= */}
      <section className="p-8 rounded-2xl border border-border bg-card flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="space-y-1">
          <span className="font-mono text-xs text-muted uppercase tracking-wider">
            DIRECT EMAIL
          </span>
          <p className="font-pixel text-2xl sm:text-3xl text-foreground">
            {email}
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <button
            onClick={handleCopyEmail}
            className="px-4 py-2.5 rounded-md border border-border bg-background hover:bg-card text-foreground transition-colors flex items-center gap-2"
          >
            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
            <span>{copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}</span>
          </button>
          <a
            href={`mailto:${email}`}
            className="px-4 py-2.5 rounded-md bg-foreground text-background font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <span>SEND EMAIL</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: SOCIAL CHANNELS & PROFILES                                     */}
      {/* Purpose: Clean grid of all social links                                   */}
      {/* Data: socials (from @/data/socials)                                       */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted font-bold">
          SOCIAL PLATFORMS & NETWORK
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group p-5 rounded-xl border border-border bg-card hover:border-foreground/40 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-background border border-border text-muted group-hover:text-foreground transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="font-pixel text-xl sm:text-2xl text-foreground block group-hover:text-muted transition-colors">
                      {social.name}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {social.href.replace(/^mailto:/, "").replace(/^https?:\/\//, "")}
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-muted group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: LOCATION & AVAILABILITY                                        */}
      {/* ========================================================================= */}
      <section className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs text-muted">
        <div className="flex items-center gap-2">
          <MapPin size={14} />
          <span>Based in Bangkok, Thailand (UTC+7)</span>
        </div>
        <div>
          <span>Usually responds within 24-48 hours.</span>
        </div>
      </section>
    </main>
  );
}
