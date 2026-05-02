"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import { skillCategories } from "@/data/skills";

export default function AboutPage() {
  return (
    <main className="min-h-screen max-w-screen mx-auto px-6 lg:px-20 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-pixel text-4xl lg:text-6xl mb-12 text-foreground"
        >
          ABOUT ME
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="space-y-8 text-foreground">
            <div className="space-y-4 font-mono text-sm leading-relaxed">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://avatars.githubusercontent.com/u/61649121?v=4" 
                  alt="Nachapat Iamphuang" 
                  className="w-20 h-20 rounded-full border-2 border-border"
                />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Nachapat Iamphuang</h2>
                  <p className="font-mono text-sm text-muted">Developer / Filmmaker</p>
                </div>
              </div>
              
              <p>
                Hey! I'm <span className="font-bold text-foreground">Sean</span>, a passionate developer and machine learning enthusiast. 
                Currently, I am a 1st year Computer Science student, Teaching Assistant, and Lecturer at KMITL.
              </p>
              <p>
                I'm researching the topic of <span className="text-foreground italic">Robotics</span> and <span className="text-foreground italic">Artificial Intelligence</span>. 
                I'm open to collaborative projects.
              </p>
            </div>

            <div>
              <Link href="/experiences" className="inline-block group mb-6">
                <h3 className="font-pixel text-xl flex items-center gap-2 transition-colors group-hover:text-muted">
                  <span className="material-symbols-outlined text-base">work_history</span>
                  EXPERIENCES
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    ↗
                  </span>
                </h3>
              </Link>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border transition-hover hover:border-muted">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-lg text-foreground">{exp.role}</h4>
                      <span className="text-[10px] font-mono bg-border px-2 py-1 rounded text-muted">{exp.period}</span>
                    </div>
                    <a href={exp.link} target="_blank" rel="noreferrer" className="text-sm text-muted hover:underline mb-2 block">
                      {exp.organization}
                    </a>
                    <ul className="list-disc list-inside text-sm space-y-1 text-muted">
                      {exp.details.slice(0, 1).map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg border border-border sticky top-32">
              <h3 className="font-pixel text-2xl mb-8">SKILLS</h3>
              
              <div className="space-y-8 font-mono text-sm">
                {skillCategories.map((category, catIndex) => (
                  <div key={category.label}>
                    {catIndex > 0 && <div className="h-px bg-border w-full mb-8" />}
                    <span className="text-muted block mb-3 font-bold uppercase tracking-widest text-[10px]">{category.label}</span>
                    <div className="flex flex-wrap gap-4">
                      {category.skills.map(skill => (
                        <div key={skill.name} className="flex flex-col items-center gap-2 group">
                          <img src={`https://skillicons.dev/icons?i=${skill.icon}`} width={40} height={40} alt={skill.name} className="transition-transform group-hover:scale-110"/>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
