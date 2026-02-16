"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { socials } from "@/data/socials";
import AsciiPlant from "@/components/AsciiPlant";
import Link from "next/link";

export default function LinkPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center px-6 py-20 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
                <AsciiPlant />
            </div>

            <div className="z-10 w-full max-w-[480px] flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center mb-12 text-center"
                >
                    <motion.img
                        src="https://github.com/SeanNachapat.png"
                        width={96}
                        height={96}
                        className="rounded-full mb-6 transition-all duration-500 cursor-pointer border-2 border-white/10"
                        whileHover={{ scale: 1.05 }}
                    />
                    <h1 className="font-pixel text-3xl mb-2 tracking-tight">NACHAPAT IAMPHUANG</h1>
                    <p className="font-mono text-sm text-gray-500 max-w-[300px] mb-6">
                        Computer Science Student @ KMITL & AI Researcher
                    </p>
                    <a href="/experiences/gsa" target="_blank" rel="noopener noreferrer">
                        <motion.img 
                            src="https://framerusercontent.com/images/8wTRIiSVSyfl0uTe07aNw7eiRJ0.png" 
                            width={80} 
                            height={80} 
                            className="rounded-full cursor-pointer"
                            whileHover={{ 
                                scale: 1.1, 
                                rotate: 5,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            whileTap={{ scale: 0.95 }}
                        />
                    </a>
                </motion.div>

                <div className="w-full space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/"
                            className="group flex items-center justify-between w-full p-5 bg-white text-black font-pixel text-xl hover:bg-gray-200 transition-all duration-300 rounded-sm"
                        >
                            <span>MY WEBSITE</span>
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    {socials.filter(s => s.name !== "LINKEDIN" && s.name !== "EMAIL").map((social, i) => (
                        <motion.div
                            key={social.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        >
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between w-full p-5 border border-white/10 hover:border-white/40 font-pixel text-xl transition-all duration-300 rounded-sm bg-white/5 backdrop-blur-sm"
                            >
                                <span>{social.name}</span>
                                <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-16 text-center"
                >
                    <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                        Based in Bangkok, Thailand
                    </p>
                </motion.div>
            </div>
        </main>
    );
}
