"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Laptop, MousePointer2, Headphones, Code2, BookOpen, Video } from "lucide-react";
import { LibraryItem } from "@/data/library";

const categoryIcons = {
  Workstation: <Laptop size={20} />,
  Peripherals: <MousePointer2 size={20} />,
  Audio: <Headphones size={20} />,
  Software: <Code2 size={20} />,
  Books: <BookOpen size={20} />,
  Camera: <Video size={20} />,
};

interface LibraryCardProps extends LibraryItem {
  index: number;
}

export default function LibraryCard({ name, description, category, link, index }: LibraryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative p-6 bg-card border border-border hover:border-foreground/20 transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-background border border-border text-muted group-hover:text-foreground transition-colors">
            {categoryIcons[category]}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
        
        <h3 className="font-pixel text-xl mb-2 text-foreground uppercase tracking-tight">
          {name}
        </h3>
        
        <p className="font-mono text-sm text-muted leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted/50">
          {category}
        </span>
      </div>
      
      {/* Decorative grain/overlay effect if desired, but keeping it clean for now */}
    </motion.div>
  );
}
