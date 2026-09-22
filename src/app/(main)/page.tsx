"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Code2, Briefcase, Sparkles, Terminal } from "lucide-react";
import AsciiPlant from "@/components/AsciiPlant";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import { skillCategories } from "@/data/skills";

export default function HomePage() {
  const flagshipProjects = projects.filter((p) => p.flagship);
  const recentExperiences = experiences.slice(0, 3);

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 space-y-28">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO / LANDING BLANKSPACE                                      */}
      {/* Purpose: Personal intro, tagline, quick call-to-actions, and visual canvas */}
      {/* Data: Hardcoded profile info or wire to a data/profile.ts file            */}
      {/* ========================================================================= */}
      <section className="relative min-h-[70vh] flex flex-col justify-center border-b border-border/80 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-mono text-muted"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for AI Research & Projects</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="font-pixel text-6xl sm:text-7xl lg:text-8xl tracking-tight text-foreground leading-[0.9]">
                NACHAPAT <br />
                IAMPHUANG
              </h1>
              <p className="font-mono text-xl sm:text-2xl text-muted tracking-tight">
                Sean · CS Student & AI Enthusiast @ KMITL
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl font-mono text-sm sm:text-base text-muted leading-relaxed"
            >
              Passionate developer exploring the intersection of machine learning,
              robotics, and full-stack software. Teaching Assistant and Lecturer
              at the Department of Computer Science, KMITL.
            </motion.p>

            {/* Quick CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2 font-mono text-xs"
            >
              <Link
                href="/projects"
                className="px-5 py-3 rounded-md bg-foreground text-background font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <span>VIEW SELECTED WORKS</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/about"
                className="px-5 py-3 rounded-md border border-border bg-card text-foreground hover:bg-border/40 transition-colors flex items-center gap-2"
              >
                <span>ABOUT ME</span>
              </Link>
              <Link
                href="/connect"
                className="px-5 py-3 rounded-md border border-border text-muted hover:text-foreground transition-colors flex items-center gap-2"
              >
                <span>LET&apos;S CONNECT</span>
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Interactive Canvas / Ascii Plant Slot */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[320px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative p-6 rounded-2xl border border-dashed border-border bg-card/40 backdrop-blur-xs flex flex-col items-center justify-center w-full max-w-md"
            >
              <div className="w-full flex justify-between items-center text-[10px] font-mono text-muted mb-4 border-b border-border pb-2">
                <span className="flex items-center gap-1.5">
                  <Terminal size={12} />
                  CANVAS_RENDERER.exe
                </span>
                <span>ASCII_TORUS</span>
              </div>
              <div className="overflow-hidden flex items-center justify-center my-2 pointer-events-none">
                <AsciiPlant />
              </div>
              <span className="text-[10px] font-mono text-muted/60 mt-2">
                Interactive visual slot — replaceable with 3D or canvas
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: FEATURED WORKS / PROJECTS BLANKSPACE                           */}
      {/* Purpose: Showcase flagship & top selected works                           */}
      {/* Data: projects (from @/data/projects)                                     */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-border pb-4">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5 mb-1">
              <Code2 size={14} />
              SELECTED WORKS
            </span>
            <h2 className="font-pixel text-4xl sm:text-5xl text-foreground">
              FEATURED PROJECTS
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono text-xs text-muted hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <span>VIEW ALL ({projects.length}) PROJECTS</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Projects Blankspace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flagshipProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-foreground/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-muted uppercase tracking-wider">
                    {project.year} · FLAGSHIP
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors p-1"
                    title="Open live link"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div>
                  <h3 className="font-pixel text-2xl sm:text-3xl text-foreground group-hover:text-muted transition-colors">
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

                <p className="font-mono text-xs sm:text-sm text-muted line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
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

                <Link
                  href={`/projects/${project.id}`}
                  className="font-mono text-xs text-foreground hover:underline flex items-center gap-1"
                >
                  <span>Details</span>
                  <span>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: RECENT EXPERIENCES BLANKSPACE                                  */}
      {/* Purpose: Quick chronological timeline / highlight of experiences          */}
      {/* Data: experiences (from @/data/experiences)                               */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-border pb-4">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5 mb-1">
              <Briefcase size={14} />
              CAREER & ACADEMIA
            </span>
            <h2 className="font-pixel text-4xl sm:text-5xl text-foreground">
              RECENT EXPERIENCES
            </h2>
          </div>
          <Link
            href="/experiences"
            className="font-mono text-xs text-muted hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <span>VIEW FULL TIMELINE ({experiences.length})</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {recentExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="p-6 rounded-xl border border-border bg-card flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-foreground/30 transition-all"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2 font-mono text-xs text-muted">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span className="uppercase">{exp.type}</span>
                </div>
                <h3 className="font-pixel text-2xl text-foreground">
                  {exp.role}
                </h3>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted hover:text-foreground inline-flex items-center gap-1"
                >
                  <span>{exp.organization}</span>
                  <ArrowUpRight size={12} />
                </a>
                <p className="font-mono text-xs text-muted line-clamp-2 pt-2">
                  {exp.details[0]}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/experiences"
                  className="px-4 py-2 rounded border border-border text-xs font-mono hover:bg-border/30 transition-colors inline-flex items-center gap-1"
                >
                  <span>Preview</span>
                  <span>↗</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: SKILLS & TOOLKIT SNAPSHOT                                      */}
      {/* Purpose: Overview of technical competencies and favorite tools            */}
      {/* Data: skillCategories (from @/data/skills)                                 */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="border-b border-border pb-4">
          <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5 mb-1">
            <Sparkles size={14} />
            TECHNICAL REPERTOIRE
          </span>
          <h2 className="font-pixel text-4xl sm:text-5xl text-foreground">
            SKILLS & TOOLS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="p-5 rounded-xl border border-border bg-card space-y-4"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted font-bold">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-background border border-border/80 font-mono text-xs text-foreground"
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="w-3.5 h-3.5"
                    />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: CONNECT CALLOUT                                                */}
      {/* Purpose: Prompt visitors to collaborate or contact                        */}
      {/* Data: socials (from @/data/socials)                                       */}
      {/* ========================================================================= */}
      <section className="p-8 sm:p-12 rounded-2xl border border-border bg-card/60 backdrop-blur-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2 max-w-xl">
          <h2 className="font-pixel text-3xl sm:text-4xl text-foreground">
            LET&apos;S BUILD SOMETHING TOGETHER
          </h2>
          <p className="font-mono text-xs sm:text-sm text-muted leading-relaxed">
            Interested in collaboration, AI research discussions, or just want to say hi?
            Feel free to reach out across any platform.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 font-mono text-xs">
          <Link
            href="/connect"
            className="px-6 py-3 rounded-md bg-foreground text-background font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <span>CONNECT WITH ME</span>
            <ArrowRight size={14} />
          </Link>
          <a
            href="mailto:sean@seanstlab.com"
            className="px-6 py-3 rounded-md border border-border hover:bg-border/30 transition-colors flex items-center gap-2"
          >
            <span>EMAIL</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}
