"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Code2, Filter } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>("ALL");

  // Extract all unique tags
  const allTags = ["ALL", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  // Filter projects by tag
  const filteredProjects =
    selectedTag === "ALL"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  const flagshipProjects = filteredProjects.filter((p) => p.flagship);
  const otherProjects = filteredProjects.filter((p) => !p.flagship);

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 space-y-16">
      {/* ========================================================================= */}
      {/* SECTION 1: HEADER & INTRO                                                 */}
      {/* Purpose: Page title, description, and filter bar                          */}
      {/* ========================================================================= */}
      <section className="space-y-6 border-b border-border pb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <Code2 size={14} />
              PORTFOLIO ARCHIVE / V2.0
            </span>
            <h1 className="font-pixel text-5xl sm:text-6xl lg:text-7xl text-foreground">
              SELECTED WORKS
            </h1>
          </div>
          <span className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-card text-muted">
            {filteredProjects.length} OF {projects.length} PROJECTS
          </span>
        </div>

        <p className="font-mono text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          A showcase of open-source software, IoT simulators, developer utilities, and AI applications
          developed with modern web and systems technologies.
        </p>

        {/* Tag Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-mono text-muted mr-2 flex items-center gap-1">
            <Filter size={12} /> Filter:
          </span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                selectedTag === tag
                  ? "bg-foreground text-background font-semibold"
                  : "bg-card border border-border text-muted hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: FLAGSHIP PROJECTS SPOTLIGHT                                    */}
      {/* Purpose: Highlight major flagship releases                                */}
      {/* ========================================================================= */}
      {flagshipProjects.length > 0 && (
        <section className="space-y-8">
          <div className="flex items-center gap-2 border-b border-border/60 pb-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted font-bold">
              FLAGSHIP SPOTLIGHT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {flagshipProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group rounded-2xl border border-border bg-card overflow-hidden flex flex-col justify-between hover:border-foreground/40 transition-all duration-300"
              >
                {/* Project Media Slot */}
                <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden border-b border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-background/80 backdrop-blur-md text-foreground border border-border">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-pixel text-3xl text-foreground group-hover:text-muted transition-colors">
                      <Link href={`/projects/${project.id}`}>
                        {project.title.split("|")[0].trim()}
                      </Link>
                    </h3>
                    {project.title.includes("|") && (
                      <p className="font-mono text-xs text-muted">
                        {project.title.split("|")[1].trim()}
                      </p>
                    )}
                    <p className="font-mono text-xs sm:text-sm text-muted line-clamp-3 leading-relaxed pt-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono border border-border bg-background text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <Link
                        href={`/projects/${project.id}`}
                        className="font-mono text-xs text-foreground font-semibold hover:underline flex items-center gap-1"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowRight size={14} />
                      </Link>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-muted hover:text-foreground flex items-center gap-1 transition-colors"
                      >
                        <span>LIVE DEMO</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 3: ALL / OTHER PROJECTS                                           */}
      {/* Purpose: Grid of all works                                                */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 border-b border-border/60 pb-2">
          <span className="w-2 h-2 rounded-full bg-neutral-400" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted font-bold">
            {selectedTag === "ALL" ? "OTHER SELECTED WORKS" : `PROJECTS TAGGED WITH "${selectedTag}"`}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {(selectedTag === "ALL" ? otherProjects : filteredProjects).map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-foreground/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-background border border-border text-muted uppercase">
                      {project.year}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors p-1"
                      title="Open project URL"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>

                  <div>
                    <h3 className="font-pixel text-2xl text-foreground group-hover:text-muted transition-colors">
                      <Link href={`/projects/${project.id}`}>
                        {project.title.split("|")[0].trim()}
                      </Link>
                    </h3>
                    {project.title.includes("|") && (
                      <p className="font-mono text-xs text-muted mt-1">
                        {project.title.split("|")[1].trim()}
                      </p>
                    )}
                  </div>

                  <p className="font-mono text-xs text-muted line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-border/60 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border border-border bg-background text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-foreground hover:underline flex items-center gap-1"
                    >
                      <span>Read Story</span>
                      <span>→</span>
                    </Link>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground flex items-center gap-1"
                    >
                      <span>Link</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 font-mono text-muted text-sm">
            No projects found matching the selected filter.
          </div>
        )}
      </section>
    </main>
  );
}
