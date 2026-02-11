"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const flagshipProjects = projects.filter((p) => p.flagship);
  const regularProjects = projects.filter((p) => !p.flagship);

  return (
    <main className="min-h-screen max-w-screen mx-auto px-6 lg:px-20 pt-32 pb-20">
      <div className="mx-auto">
        
        {/* Header */}
        <div className="mb-16">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-pixel text-4xl lg:text-6xl mb-6 text-black dark:text-white"
            >
                SELECTED WORKS
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-mono leading-relaxed"
            >
                A collection of projects, experiments, and explorations in code, design, and artificial intelligence.
            </motion.p>
        </div>

        {flagshipProjects.length > 0 && (
          <div className="mb-6 lg:mb-8 space-y-6 lg:space-y-8">
            {flagshipProjects.map((project, index) => (
              <ProjectCard 
                key={`flagship-${index}`}
                index={index}
                {...project}
                flagship
              />
            ))}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {regularProjects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    index={index + flagshipProjects.length}
                    {...project}
                />
            ))}
        </div>

      </div>
    </main>
  );
}
