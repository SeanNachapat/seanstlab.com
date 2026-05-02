"use client";

import { motion } from "framer-motion";
import AsciiPlant from "@/components/AsciiPlant";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col max-w-screen mx-auto overflow-x-hidden relative">
      <section className="h-screen sticky top-0 flex flex-col justify-center px-6 lg:px-20 z-0">
         <div className="flex flex-col items-start z-10">
            <motion.h2 
               initial={{ opacity: 0, y: 100 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="font-pixel text-6xl lg:text-9xl tracking-tighter leading-none mb-8 text-foreground"
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
                  <h2 className="text-3xl lg:text-3xl text-foreground font-mono">
                     Computer Science Student 
                     <br />
                     & AI Researcher
                  </h2>
                  <p className="max-w-xl text-lg lg:text-xl text-muted leading-relaxed font-mono">
                     I'm Sean, a passionate developer, and a machine learning enthusiast. Currently, a 1st year Computer Science student, Teaching Assistance and Lecturer at KMITL.
                  </p>
                  <a href="/experiences/gsa">
                    <motion.img 
                      src="https://framerusercontent.com/images/8wTRIiSVSyfl0uTe07aNw7eiRJ0.png" 
                      width={120} 
                      height={120} 
                      className="cursor-pointer"
                      whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    />
                  </a>
               </motion.div>
            </div>
         </div> 
         
         <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute bottom-0 right-0 lg:right-10 lg:block pointer-events-none"
         >
            <AsciiPlant />
         </motion.div>
      </section>
    </main>
  );
}
