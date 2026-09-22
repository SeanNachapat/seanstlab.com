"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Briefcase,
  Sparkles,
  Terminal,
  Library,
  Copy,
  Check,
  Building2,
} from "lucide-react";
import AsciiPlant from "@/components/AsciiPlant";
import {
  projects,
  experiences,
  skillCategories,
  socials,
  libraryItems,
} from "@/data";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const email = "sean@seanstlab.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 space-y-28">
      {/* ========================================================================= */}
      {/* 1. HERO / LANDING SECTION                                                 */}
      {/* Purpose: Personal branding, title, bio, and visual canvas                 */}
      {/* ========================================================================= */}
      <section id="hero" className="relative min-h-[75vh] flex flex-col justify-center border-b border-border/80 pb-20">
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
              <a
                href="#works"
                className="px-5 py-3 rounded-md bg-foreground text-background font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <span>VIEW WORKS</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="#experiences"
                className="px-5 py-3 rounded-md border border-border bg-card text-foreground hover:bg-border/40 transition-colors flex items-center gap-2"
              >
                <span>EXPERIENCES</span>
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-md border border-border text-muted hover:text-foreground transition-colors flex items-center gap-2"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Canvas / Ascii Plant */}
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
      {/* 2. SELECTED WORKS / PROJECTS SECTION                                      */}
      {/* Data Source: projects (from @/data)                                       */}
      {/* ========================================================================= */}
      <section id="works" className="space-y-8 scroll-mt-24">
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
          <span className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-card text-muted">
            {projects.length} PROJECTS LOADED
          </span>
        </div>

        {/* Projects Grid Blankspace */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-foreground/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-muted uppercase tracking-wider">
                    {project.year} {project.flagship && "· FLAGSHIP"}
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
                    {project.title.split("|")[0].trim()}
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

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-foreground hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Open Project</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPERIENCES TIMELINE / LIST SECTION                                    */}
      {/* Data Source: experiences (from @/data)                                    */}
      {/* ========================================================================= */}
      <section id="experiences" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-border pb-4">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5 mb-1">
              <Briefcase size={14} />
              CAREER & ACADEMIA
            </span>
            <h2 className="font-pixel text-4xl sm:text-5xl text-foreground">
              EXPERIENCES
            </h2>
          </div>
          <span className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-card text-muted">
            {experiences.length} ROLES RECORDED
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-6 sm:p-8 rounded-xl border border-border bg-card flex flex-col md:flex-row justify-between gap-6 hover:border-foreground/30 transition-all"
            >
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-background border border-border text-muted">
                    {exp.period}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${
                      exp.type === "developer"
                        ? "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                        : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                    }`}
                  >
                    {exp.type}
                  </span>
                </div>

                <h3 className="font-pixel text-2xl sm:text-3xl text-foreground">
                  {exp.role}
                </h3>

                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs sm:text-sm text-muted hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                >
                  <Building2 size={14} />
                  <span>{exp.organization}</span>
                  {exp.link && exp.link !== "#" && <ArrowUpRight size={12} />}
                </a>

                <ul className="space-y-2 pt-2">
                  {exp.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-start gap-2 font-mono text-xs sm:text-sm text-muted leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.link && exp.link !== "#" && (
                <div className="shrink-0 self-start md:self-center">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded border border-border text-xs font-mono hover:bg-border/30 transition-colors inline-flex items-center gap-1 text-foreground"
                  >
                    <span>Link</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TECHNICAL SKILLS & STACK SECTION                                       */}
      {/* Data Source: skillCategories (from @/data)                                */}
      {/* ========================================================================= */}
      <section id="skills" className="space-y-8 scroll-mt-24">
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
      {/* 5. GEAR & LIBRARY SECTION                                                 */}
      {/* Data Source: libraryItems (from @/data)                                   */}
      {/* ========================================================================= */}
      <section id="gear" className="space-y-8 scroll-mt-24">
        <div className="flex justify-between items-end border-b border-border pb-4">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5 mb-1">
              <Library size={14} />
              HARDWARE & LITERATURE
            </span>
            <h2 className="font-pixel text-4xl sm:text-5xl text-foreground">
              LIBRARY & GEAR
            </h2>
          </div>
          <span className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-card text-muted">
            {libraryItems.length} ITEMS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraryItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between space-y-4 hover:border-foreground/30 transition-all"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-background border border-border text-muted uppercase">
                  {item.category}
                </span>
                <h3 className="font-pixel text-2xl text-foreground">
                  {item.name}
                </h3>
                <p className="font-mono text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="pt-2 border-t border-border/60">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-foreground hover:underline inline-flex items-center gap-1"
                  >
                    <span>Product Link</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CONTACT & CONNECT SECTION                                              */}
      {/* Data Source: socials (from @/data)                                        */}
      {/* ========================================================================= */}
      <section id="contact" className="space-y-8 scroll-mt-24">
        <div className="p-8 sm:p-12 rounded-2xl border border-border bg-card/60 backdrop-blur-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
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
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 rounded-md bg-card border border-border hover:bg-border/30 text-foreground transition-colors flex items-center gap-2"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
            </button>
            <a
              href={`mailto:${email}`}
              className="px-6 py-3 rounded-md bg-foreground text-background font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <span>SEND EMAIL</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Social Network Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-border bg-card hover:border-foreground/40 transition-all flex flex-col items-center justify-center gap-2 text-center group"
              >
                <Icon size={18} className="text-muted group-hover:text-foreground transition-colors" />
                <span className="font-pixel text-lg text-foreground group-hover:text-muted transition-colors">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
