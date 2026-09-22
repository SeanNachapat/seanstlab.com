"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, User, Sparkles, Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "@/data/experiences";
import { skillCategories } from "@/data/skills";

export default function AboutPage() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 space-y-20">
      {/* ========================================================================= */}
      {/* SECTION 1: HEADER & PROFILE INTRO                                         */}
      {/* Purpose: Personal background, education, and research interests           */}
      {/* ========================================================================= */}
      <section className="space-y-8 border-b border-border pb-16">
        <div>
          <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5 mb-2">
            <User size={14} />
            BIOGRAPHY / V2.0
          </span>
          <h1 className="font-pixel text-5xl sm:text-6xl lg:text-7xl text-foreground">
            ABOUT ME
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Avatar & Quick Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-border mx-auto sm:mx-0">
                <img
                  src="https://avatars.githubusercontent.com/u/61649121?v=4"
                  alt="Nachapat Iamphuang"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h2 className="font-pixel text-2xl text-foreground">
                  Nachapat Iamphuang
                </h2>
                <p className="font-mono text-xs text-muted">
                  Known as &ldquo;Sean&rdquo; · Developer & Filmmaker
                </p>
                <div className="flex items-center gap-1.5 pt-2 text-xs font-mono text-muted justify-center sm:justify-start">
                  <GraduationCap size={14} />
                  <span>CS @ KMITL (Class of 2027)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border/80 flex flex-col gap-2 font-mono text-xs text-muted">
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-foreground">Bangkok, Thailand</span>
                </div>
                <div className="flex justify-between">
                  <span>Interests:</span>
                  <span className="text-foreground">Robotics & AI</span>
                </div>
                <div className="flex justify-between">
                  <span>Languages:</span>
                  <span className="text-foreground">Thai, English</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Background */}
          <div className="lg:col-span-8 space-y-6 font-mono text-sm sm:text-base text-muted leading-relaxed">
            <p>
              Hey! I&apos;m <span className="font-bold text-foreground">Sean (Nachapat Iamphuang)</span>.
              I&apos;m a 2nd year Computer Science student, Teaching Assistant, and Lecturer at the
              Department of Computer Science, King Mongkut&apos;s Institute of Technology Ladkrabang (KMITL).
            </p>
            <p>
              My primary research and engineering focus revolves around{" "}
              <span className="text-foreground font-semibold">Robotics</span>,{" "}
              <span className="text-foreground font-semibold">Machine Learning Pipelines</span>, and{" "}
              <span className="text-foreground font-semibold">Full-stack Software Architecture</span>.
              I love building systems from first principles — from virtual IoT hardware emulators to interactive
              developer tools and community-driven educational programs.
            </p>
            <p>
              Outside of coding, I also do filmmaking and video production (having served as Editor and
              Content Creator with 50+ video productions), allowing me to bring an aesthetic and storytelling
              dimension to everything I build.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs">
              <Link
                href="/projects"
                className="px-4 py-2 rounded bg-foreground text-background font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/experiences"
                className="px-4 py-2 rounded border border-border bg-card text-foreground hover:bg-border/40 transition-colors flex items-center gap-1.5"
              >
                <span>VIEW TIMELINE</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: SKILLS & COMPETENCIES                                          */}
      {/* Purpose: Full categorization of skills                                    */}
      {/* Data: skillCategories (from @/data/skills)                                 */}
      {/* ========================================================================= */}
      <section className="space-y-8 border-b border-border pb-16">
        <div className="flex justify-between items-end">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <Sparkles size={14} />
              TOOLKIT & MASTERY
            </span>
            <h2 className="font-pixel text-4xl sm:text-5xl text-foreground">
              TECHNICAL SKILLS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="p-6 rounded-xl border border-border bg-card space-y-4"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted block border-b border-border pb-2">
                {category.label}
              </span>
              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 group font-mono text-xs text-foreground"
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="w-5 h-5 transition-transform group-hover:scale-110"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: ACADEMIA & MENTORSHIP HIGHLIGHTS                               */}
      {/* Purpose: Highlighting teaching and leadership roles                       */}
      {/* Data: experiences (from @/data/experiences)                               */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <Briefcase size={14} />
              HIGHLIGHTS
            </span>
            <h2 className="font-pixel text-4xl sm:text-5xl text-foreground">
              TEACHING & LEADERSHIP
            </h2>
          </div>
          <Link
            href="/experiences"
            className="font-mono text-xs text-muted hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <span>ALL EXPERIENCES</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.slice(0, 3).map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-background border border-border text-muted">
                  {exp.period}
                </span>
                <h3 className="font-pixel text-xl text-foreground pt-1">
                  {exp.role}
                </h3>
                <p className="font-mono text-xs text-muted">
                  {exp.organization}
                </p>
                <p className="font-mono text-xs text-muted line-clamp-3 pt-2">
                  {exp.details[0]}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-foreground hover:underline inline-flex items-center gap-1"
                >
                  <span>Read more</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
