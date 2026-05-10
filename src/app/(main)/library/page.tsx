"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { libraryItems } from "@/data/library";
import LibraryCard from "@/components/LibraryCard";

const categories = ["ALL", "Workstation", "Peripherals", "Audio", "Software", "Books", "Camera"] as const;
type Category = (typeof categories)[number];

export default function LibraryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filteredItems = activeCategory === "ALL" 
    ? libraryItems 
    : libraryItems.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen max-w-screen mx-auto px-6 lg:px-20 pt-32 pb-20">
      <div className="mx-auto">
        
        {/* Header */}
        <div className="mb-16">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-pixel text-4xl lg:text-6xl mb-6 text-foreground"
            >
                LIBRARY / GEAR
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted max-w-2xl font-mono leading-relaxed"
            >
                A curated collection of tools, hardware, and resources that I use to think, build, and explore.
            </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-widest border transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-foreground text-background border-foreground" 
                  : "bg-transparent text-muted border-border hover:border-muted"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <LibraryCard {...item} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center font-mono text-muted"
          >
            No items found in this category.
          </motion.div>
        )}

      </div>
    </main>
  );
}
