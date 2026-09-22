"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Tag } from "lucide-react";
import { Project, projects } from "@/data/projects";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  // Find adjacent projects for prev/next navigation
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 lg:px-12 pt-28 pb-20 space-y-16">
      {/* ========================================================================= */}
      {/* SECTION 1: NAVIGATION BACK LINK                                           */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center border-b border-border pb-6"
      >
        <Link
          href="/projects"
          className="flex items-center gap-2 font-mono text-xs text-muted hover:text-foreground transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO SELECTED WORKS</span>
        </Link>
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted px-2.5 py-1 rounded bg-card border border-border">
          PROJECT CASE STUDY
        </span>
      </motion.div>

      {/* ========================================================================= */}
      {/* SECTION 2: HERO & METADATA                                                */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-card border border-border text-foreground">
              {project.year}
            </span>
            {project.flagship && (
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-500 border border-amber-500/20">
                FLAGSHIP RELEASE
              </span>
            )}
          </div>

          <h1 className="font-pixel text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight">
            {project.title.split("|")[0].trim()}
          </h1>

          {project.title.includes("|") && (
            <p className="font-mono text-base sm:text-lg text-muted">
              {project.title.split("|")[1].trim()}
            </p>
          )}
        </motion.div>

        {/* Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-4 border-y border-border font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted flex items-center gap-1">
              <Tag size={12} /> Tech Stack:
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded bg-card border border-border text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-foreground text-background font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
          >
            <span>VISIT REPO / DEMO</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: PROJECT OVERVIEW & NARRATIVE                                   */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted font-bold">
          OVERVIEW & ARCHITECTURE
        </h2>
        <div className="p-8 rounded-2xl border border-border bg-card">
          <p className="font-mono text-sm sm:text-base text-foreground/90 leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: MEDIA & GALLERY SLOTS                                          */}
      {/* ========================================================================= */}
      {project.photos && project.photos.length > 0 && (
        <section className="space-y-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted font-bold">
            VISUAL GALLERY ({project.photos.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.photos.map((photo, index) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-xl border border-border bg-neutral-900 overflow-hidden group ${
                  project.photos.length % 2 !== 0 && index === 0
                    ? "md:col-span-2 aspect-21/9"
                    : "aspect-video"
                }`}
              >
                <img
                  src={photo}
                  alt={`${project.title} preview ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 5: ADJACENT PROJECTS PAGINATION                                   */}
      {/* ========================================================================= */}
      <section className="pt-12 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-xs">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.id}`}
            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="text-[10px] text-muted block">PREVIOUS</span>
              <span className="font-pixel text-lg text-foreground">
                {prevProject.title.split("|")[0].trim()}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        <Link
          href="/projects"
          className="px-4 py-2 rounded border border-border bg-card hover:bg-border/30 transition-colors"
        >
          ALL PROJECTS
        </Link>

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.id}`}
            className="flex items-center gap-2 text-muted hover:text-foreground transition-colors group text-right"
          >
            <div className="text-right">
              <span className="text-[10px] text-muted block">NEXT</span>
              <span className="font-pixel text-lg text-foreground">
                {nextProject.title.split("|")[0].trim()}
              </span>
            </div>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <div />
        )}
      </section>
    </main>
  );
}
