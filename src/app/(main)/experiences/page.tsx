"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Briefcase, Building2, Filter } from "lucide-react";
import { experiences, Experience } from "@/data/experiences";

export default function ExperiencesPage() {
  const [filterType, setFilterType] = useState<"ALL" | "developer" | "other">("ALL");

  const filteredExperiences =
    filterType === "ALL"
      ? experiences
      : experiences.filter((exp) => exp.type === filterType);

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 space-y-16">
      {/* ========================================================================= */}
      {/* SECTION 1: HEADER & FILTER BAR                                            */}
      {/* Purpose: Page title, description, and category filter                     */}
      {/* ========================================================================= */}
      <section className="space-y-6 border-b border-border pb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <Briefcase size={14} />
              CAREER & ACADEMIA / V2.0
            </span>
            <h1 className="font-pixel text-5xl sm:text-6xl lg:text-7xl text-foreground">
              EXPERIENCES
            </h1>
          </div>
          <span className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-card text-muted">
            {filteredExperiences.length} OF {experiences.length} ROLES
          </span>
        </div>

        <p className="font-mono text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          Chronological record of academic instruction, software engineering, community leadership,
          and multimedia production roles.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-mono text-muted mr-2 flex items-center gap-1">
            <Filter size={12} /> Type:
          </span>
          {(["ALL", "developer", "other"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1 rounded text-xs font-mono uppercase transition-all ${
                filterType === type
                  ? "bg-foreground text-background font-semibold"
                  : "bg-card border border-border text-muted hover:text-foreground"
              }`}
            >
              {type === "other" ? "Media / Community" : type}
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: EXPERIENCES LIST / TIMELINE BLANKSPACE                         */}
      {/* Purpose: Clean cards ready to be styled into timeline or grid             */}
      {/* Data: experiences (from @/data/experiences)                               */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, index) => (
              <motion.article
                key={`${exp.role}-${exp.period}-${index}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-2xl border border-border bg-card p-6 lg:p-8 hover:border-foreground/30 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Role Details & Bullets */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span className="px-2.5 py-0.5 rounded bg-background border border-border text-muted">
                        {exp.period}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded uppercase text-[10px] font-bold ${
                          exp.type === "developer"
                            ? "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                            : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <div>
                      <h2 className="font-pixel text-3xl sm:text-4xl text-foreground">
                        {exp.role}
                      </h2>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-muted hover:text-foreground inline-flex items-center gap-1.5 mt-1 transition-colors"
                      >
                        <Building2 size={14} />
                        <span>{exp.organization}</span>
                        <ArrowUpRight size={12} />
                      </a>
                    </div>

                    <ul className="space-y-2.5 pt-2">
                      {exp.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2.5 font-mono text-xs sm:text-sm text-muted leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Preview / Embed Slot */}
                  <div className="lg:col-span-5 w-full">
                    <div className="w-full aspect-video rounded-xl border border-border bg-neutral-900/60 overflow-hidden relative flex flex-col justify-center items-center">
                      <ExperienceMediaPreview exp={exp} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

// Sub-component handling preview rendering cleanly without clutter
function ExperienceMediaPreview({ exp }: { exp: Experience }) {
  const preview = exp.preview;

  // Canva Embed
  if (preview?.type === "canva" && preview.canvaUrl) {
    let embedUrl = preview.canvaUrl;
    if (embedUrl.includes("canva.com") && !embedUrl.includes("embed")) {
      embedUrl = embedUrl.includes("?")
        ? `${embedUrl.split("?")[0]}?embed`
        : `${embedUrl}?embed`;
    }
    return (
      <iframe
        src={embedUrl}
        className="w-full h-full border-0"
        allowFullScreen
        allow="fullscreen"
        title={`${exp.role} presentation`}
      />
    );
  }

  // YouTube Video Embed
  if (preview?.type === "youtube" && preview.youtubeId) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${preview.youtubeId}?autoplay=0`}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={`${exp.role} video`}
      />
    );
  }

  // Generic link or custom preview fallback slot
  return (
    <div className="p-6 text-center space-y-3 font-mono text-xs text-muted flex flex-col items-center justify-center h-full">
      <Briefcase size={24} className="opacity-40" />
      <div>
        <p className="font-pixel text-lg text-foreground">{exp.organization}</p>
        <p className="text-[10px] opacity-70">{exp.period}</p>
      </div>
      {exp.link && exp.link !== "#" && (
        <a
          href={exp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] text-foreground hover:underline"
        >
          <span>Visit Official Page</span>
          <ArrowUpRight size={12} />
        </a>
      )}
    </div>
  );
}
