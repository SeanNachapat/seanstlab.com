"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, link, index, image }: ProjectCardProps & { image?: string }) {
  // Grain effect data URI
  const grainImage = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E\")";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-[300px] lg:h-[450px] overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800"
    >
      <Link href={link} className="block h-full relative">
        {/* Background Image */}
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
           <img 
              src={image || `https://placehold.co/600x400/101010/FFFFFF/png?text=${encodeURIComponent(title)}`} 
              alt={title}
              className="w-full h-full object-cover"
           />
        </div>

        {/* Grain Overlay */}
        <div 
            className="absolute inset-0 text-transparent opacity-20 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: grainImage }}
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Content - Bottom Aligned */}
        <div className="absolute bottom-0 left-0 w-full p-4 lg:p-8 flex flex-col justify-end h-full">
            <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                <div className="flex items-center justify-between mb-2 lg:mb-4">
                    <h3 className="text-xl lg:text-2xl text-white font-pixel tracking-wide">
                        {title}
                    </h3>
                    <span className="text-white/70 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform border border-white/20 rounded-full p-1.5 lg:p-2 bg-white/10 backdrop-blur-sm">
                        <svg className="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </span>
                </div>
                
                <p className="text-gray-300 mb-3 lg:mb-6 text-xs lg:text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>

                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    {tags.map((tag) => (
                        <span 
                            key={tag} 
                            className="px-2 lg:px-3 py-0.5 lg:py-1 text-[10px] lg:text-xs font-mono bg-white/10 backdrop-blur-md text-white/90 rounded-full border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </Link>
    </motion.div>
  );
}
