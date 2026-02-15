"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { socials } from "@/data/socials";

export default function ConnectPage() {
  const links = socials.filter(s => s.name !== "TIKTOK" && s.name !== "YOUTUBE");

  return (
    <main className="min-h-screen max-w-screen mx-auto px-6 lg:px-20 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-pixel text-4xl lg:text-6xl mb-12 text-black dark:text-white"
        >
          LET'S CONNECT
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid gap-2"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="group flex items-center py-6 border-b border-gray-200 dark:border-gray-800 hover:pl-4 transition-all duration-300"
            >
              <span className="font-pixel text-3xl lg:text-5xl mr-auto group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {link.name}
              </span>
              <ArrowUpRight className="w-6 h-6 lg:w-8 lg:h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="mt-20 font-mono text-sm text-gray-500"
        >
            <p>Based in <span className="font-pixel text-lg">Bangkok, Thailand</span>.</p>
            <p>Always open for interesting collaborations.</p>
        </motion.div>
      </div>
    </main>
  );
}
