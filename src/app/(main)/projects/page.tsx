"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Go-Shrimp | Smart Farm Management System",
      description: "Web Application for Shrimp Farmers integrated with MongoDB database, image classification and disease prediction. Includes real-time water quality monitoring, inventory tracking, and data visualization for pond cycles.",
      tags: ["React", "NEXT.js", "MongoDB", "GeminiAPI"],
      link: "https://github.com/SeanNachapat/go-shrimp",
      image: "https://github.com/SeanNachapat/go-shrimp/blob/main/GoShrimp.png?raw=true"
    },
    {
      title: "What's The Word",
      description: "What's The Word? is a web application game for Thai students to practice their knowledge of English vocabulary, categorized by the Common European Framework of Reference for Languages(CEFR).",
      tags: ["React", "Vercel", "NEXT.js", "GeminiAPI"],
      link: "https://github.com/SeanNachapat/whatstheword",
      image: "https://github.com/SeanNachapat/whatstheword/blob/main/wtw.png?raw=true" 
    }
  ];

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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    index={index}
                    {...project}
                />
            ))}
        </div>

      </div>
    </main>
  );
}
