"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";

export default function ExperiencesPage() {

  return (
    <main className="min-h-screen max-w-screen mx-auto px-6 lg:px-20 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-pixel text-4xl lg:text-6xl mb-12 text-black dark:text-white"
        >
          EXPERIENCES
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 md:ml-6 space-y-8 pl-8 md:pl-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="relative"
            >
              <span className="absolute -left-[41px] md:-left-[57px] top-6 w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700" />

              <div className="bg-neutral-100 dark:bg-neutral-900/50 p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 transition-all hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                     <h3 className="font-bold text-xl text-black dark:text-white font-pixel tracking-wide mb-1">{exp.role}</h3>
                     <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-neutral-500 hover:text-black dark:hover:text-white hover:underline transition-colors font-mono text-sm"
                     >
                      {exp.organization} ↗
                     </a>
                  </div>
                  <span className="text-xs font-mono bg-neutral-200 dark:bg-neutral-800 px-3 py-1 rounded-full self-start text-neutral-600 dark:text-neutral-400">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400 font-mono text-sm leading-relaxed">
                  {exp.details.slice(0, 1).map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
