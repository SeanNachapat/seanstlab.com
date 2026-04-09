"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
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

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="w-full mb-8"
                >
                    <a
                        href="https://stacked.seanstlab.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block w-full p-6 rounded-sm border-2 border-[#72E182] bg-[#72E182]/5 hover:bg-[#72E182]/10 transition-all duration-300 overflow-hidden"
                    >
                        {/* Animated background glow */}
                        <div className="absolute inset-0 bg-[#72E182]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />
                        
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 shrink-0">
                                <img 
                                    src="/stacked.png" 
                                    alt="Stacked Logo" 
                                    className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(114,225,130,0.5)]"
                                />
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className="font-pixel text-xl text-[#72E182] flex items-center gap-2">
                                    TRY STACKED <ArrowUpRight className="w-4 h-4" />
                                </h3>
                                <p className="font-mono text-[10px] text-[#72E182]/70 uppercase tracking-tighter">
                                    Digital Sticker Bomb for Developers
                                </p>
                            </div>
                            <div className="hidden sm:block">
                                <motion.div
                                    animate={{ 
                                        rotate: [0, 10, -10, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ 
                                        duration: 2, 
                                        repeat: Infinity,
                                        ease: "easeInOut" 
                                    }}
                                >
                                    <Sparkles className="w-6 h-6 text-[#72E182]" />
                                </motion.div>
                            </div>
                        </div>
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
