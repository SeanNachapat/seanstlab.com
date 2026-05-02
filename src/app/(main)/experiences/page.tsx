"use client";

import { motion } from "framer-motion";
import { experiences, Experience } from "@/data/experiences";

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto px-6 lg:px-20 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-pixel text-4xl lg:text-6xl mb-24 text-center text-foreground"
        >
          EXPERIENCES
        </motion.h1>

        <div className="relative">
          {/* Central Timeline Line - Desktop Only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block transform -translate-x-1/2" />

          <div className="relative flex flex-col">
            {experiences.map((exp, index) => {
              const prevExp = index > 0 ? experiences[index - 1] : null;
              const isDifferentType = prevExp && prevExp.type !== exp.type;
              
              const spacingClass = index === 0 
                ? "" 
                : isDifferentType 
                  ? "mt-12 md:mt-0" 
                  : "mt-12 md:mt-24";

              return (
                <div key={index} className={spacingClass}>
                  <ExperienceItem exp={exp} index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

function ExperienceItem({ exp, index }: { exp: Experience; index: number }) {
  const isDeveloper = exp.type === 'developer';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-0"
    >
      {/* Left Side (Other) */}
      <div className={`order-2 md:order-1 ${!isDeveloper ? 'md:pr-12 lg:pr-20' : 'hidden md:block opacity-0 pointer-events-none'}`}>
        {!isDeveloper && <ExperienceCard exp={exp} />}
      </div>

      {/* Middle: Timeline Dot */}
      <div className="flex justify-center items-center relative z-10 order-1 md:order-2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-2 h-2 rounded-full bg-muted"
        />
      </div>

      {/* Right Side (Developer) */}
      <div className={`order-3 ${isDeveloper ? 'md:pl-12 lg:pl-20' : 'hidden md:block opacity-0 pointer-events-none'}`}>
        {isDeveloper && <ExperienceCard exp={exp} />}
      </div>
    </motion.div>
  );
}

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="space-y-3 text-left">
      <div className="space-y-1">
        <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
          {exp.period}
        </span>
        <h3 className="font-pixel text-xl lg:text-2xl text-foreground leading-tight">
          {exp.role}
        </h3>
        <a
          href={exp.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-muted hover:text-foreground hover:underline transition-colors font-mono text-xs"
        >
          {exp.organization} ↗
        </a>
      </div>

      <ul className="space-y-2">
        {exp.details.map((detail, i) => (
          <li key={i} className="flex items-start gap-2 text-muted-foreground font-mono text-xs leading-relaxed text-left" style={{ color: 'var(--muted)' }}>
            <span className="mt-1.5 w-1 h-1 rounded-full bg-border flex-shrink-0" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
