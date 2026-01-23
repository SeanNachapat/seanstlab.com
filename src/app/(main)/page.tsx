"use client";

import { motion } from "framer-motion";
import AsciiPlant from "@/components/AsciiPlant";
import ParallaxImage from "@/components/ParallaxImage";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col max-w-screen mx-auto overflow-x-hidden relative">
      <section className="h-screen sticky top-0 flex flex-col justify-center px-6 lg:px-20 z-0">
         <div className="flex flex-col items-start z-10">
            <motion.h2 
               initial={{ opacity: 0, y: 100 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="font-pixel text-6xl lg:text-9xl tracking-tighter leading-none mb-8 text-black dark:text-gray-100"
            >
               NACHAPAT IAMPHUANG
            </motion.h2>
            <div className="flex flex-col items-start justify-between w-full">
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="space-y-4 mb-8"
               >
                  <h2 className="text-3xl lg:text-3xl text-gray-800 dark:text-gray-300 font-mono">
                     Computer Science Student 
                     <br />
                     & AI Researcher
                  </h2>
                  <p className="max-w-xl text-lg lg:text-xl text-gray-700 dark:text-gray-400 leading-relaxed font-mono">
                     I'm Sean, a passionate developer, and a machine learning enthusiast. Currently, a 1st year Computer Science student, Teaching Assistance and Lecturer at KMITL.
                  </p>
               </motion.div>
            </div>
         </div> 
         
         <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute bottom-0 right-0 lg:right-10 lg:block"
         >
            <AsciiPlant />
         </motion.div>
      </section>

      {/* Parallax Image Section - Z-index higher to scroll over hero */}
      {/* <div className="relative z-10">
         <ParallaxImage />
         <div className="h-screen" />
      </div> */}

    </main>
  );
}
