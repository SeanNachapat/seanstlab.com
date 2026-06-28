"use client";

import React from "react";
import { Project } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <main className="min-h-screen max-w-screen mx-auto px-6 lg:px-20 pt-32 pb-20 overflow-x-hidden bg-white dark:bg-[#111111] text-black dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Animated Navigation Back Link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-12"
        >
          <Link
            href="/projects"
            className="flex items-center gap-2 text-neutral-500 hover:text-black dark:hover:text-white transition-colors font-mono text-xs tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO SELECTED WORKS
          </Link>
        </motion.div>

        {/* Content Header Grid */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title / Name Header */}
            <h1 className="font-pixel text-5xl md:text-6xl lg:text-7xl mb-4 text-black dark:text-white leading-[1.1] tracking-tight uppercase">
              {project.title.split("|")[0].trim()}
            </h1>
            
            {/* Sub-header tagline (if the title had a subtitle split by '|') */}
            {project.title.includes("|") && (
              <p className="font-mono text-base md:text-lg text-neutral-500 dark:text-neutral-400 mb-8 max-w-2xl leading-relaxed italic">
                {project.title.split("|")[1].trim()}
              </p>
            )}

            {/* Metadata bar aligned like the photo on the right */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-sm tracking-wider uppercase mb-12 py-4 border-y border-dashed border-neutral-200 dark:border-neutral-900/60">
              {/* Year */}
              <div className="flex items-center gap-2">
                <span className="text-neutral-400 dark:text-neutral-500">year</span>
                <span className="text-black dark:text-white font-bold">{project.year}</span>
              </div>

              {/* Tags inside rectangular border capsules */}
              <div className="flex flex-wrap items-center gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 px-3 py-1 text-xs text-neutral-800 dark:text-neutral-200 tracking-wider uppercase font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Outbound Link */}
              <div className="flex items-center gap-2 sm:ml-auto">
                <span className="text-neutral-400 dark:text-neutral-500">link</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors font-bold flex items-center gap-1.5"
                >
                  {(() => {
                    try {
                      const hostname = new URL(project.link).hostname;
                      return hostname.toUpperCase();
                    } catch {
                      return project.link.replace(/https?:\/\//, "").split("/")[0].toUpperCase();
                    }
                  })()}
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Narrative Description Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-l-2 border-neutral-300 dark:border-neutral-800 pl-6 lg:pl-8 font-mono text-base lg:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 space-y-6 max-w-3xl"
          >
            <p className="indent-8">
              {project.description}
            </p>
          </motion.div>
        </section>

        {/* Dynamic Image / Photo Showcase Grid */}
        {project.photos && project.photos.length > 0 && (
          <section className="mt-20 pt-16 border-t border-neutral-200 dark:border-neutral-900">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-pixel text-2xl lg:text-3xl mb-8 tracking-wide text-black dark:text-white uppercase"
            >
              Project Gallery
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {(() => {
                const isOdd = project.photos.length % 2 !== 0;
                return project.photos.map((photo, i) => {
                  const isFirstAndOdd = isOdd && i === 0;
                  return (
                    <motion.div
                      key={photo}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`group relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 shadow-md hover:shadow-xl transition-all duration-300 ${
                        isFirstAndOdd ? "md:col-span-2 aspect-[21/9]" : "aspect-video"
                      }`}
                    >
                      <img
                        src={photo}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-100 group-hover:opacity-0 transition-opacity pointer-events-none" />
                    </motion.div>
                  );
                });
              })()}
            </div>
          </section>
        )}

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-16 border-t border-neutral-200 dark:border-neutral-900 text-center"
        >
          <Link
            href="/projects"
            className="font-pixel text-lg text-neutral-400 hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest"
          >
            Browse Other Projects
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
