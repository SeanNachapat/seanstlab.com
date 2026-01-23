"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxImage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="min-h-[120vh] flex items-center justify-center relative overflow-hidden"
    >
      <motion.div style={{ opacity }} className="relative w-full max-w-5xl aspect-video mx-6">
        <motion.div style={{ y }} className="w-full h-full relative">
            {/* Placeholder image - user can replace this source */}
            <div className="w-full h-full bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center overflow-hidden relative">
                <span className="text-neutral-500 font-mono z-10">Parallax Image Placeholder</span>
                {/* Simulated Image Content */}
                 <div className="absolute inset-0 bg-linear-to-br from-neutral-800 to-black opacity-50" />
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
