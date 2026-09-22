"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Library, Filter } from "lucide-react";
import { libraryItems } from "@/data/library";
import LibraryCard from "@/components/LibraryCard";

const categories = [
  "ALL",
  "Workstation",
  "Peripherals",
  "Audio",
  "Software",
  "Books",
  "Camera",
] as const;
type Category = (typeof categories)[number];

export default function LibraryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filteredItems =
    activeCategory === "ALL"
      ? libraryItems
      : libraryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 space-y-16">
      {/* ========================================================================= */}
      {/* SECTION 1: HEADER & INTRO                                                 */}
      {/* ========================================================================= */}
      <section className="space-y-6 border-b border-border pb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <Library size={14} />
              TOOLKIT & WORKSPACE / V2.0
            </span>
            <h1 className="font-pixel text-5xl sm:text-6xl lg:text-7xl text-foreground">
              LIBRARY & GEAR
            </h1>
          </div>
          <span className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-card text-muted">
            {filteredItems.length} OF {libraryItems.length} ITEMS
          </span>
        </div>

        <p className="font-mono text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          A curated collection of hardware, daily peripherals, engineering literature, audio tools,
          and software used for development, research, and filmmaking.
        </p>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-mono text-muted mr-2 flex items-center gap-1">
            <Filter size={12} /> Filter:
          </span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                activeCategory === category
                  ? "bg-foreground text-background font-semibold"
                  : "bg-card border border-border text-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: ITEMS GRID BLANKSPACE                                          */}
      {/* Purpose: Responsive card grid                                             */}
      {/* Data: libraryItems (from @/data/library)                                   */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <LibraryCard {...item} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="py-20 text-center font-mono text-muted text-sm">
            No items found in this category.
          </div>
        )}
      </section>
    </main>
  );
}
