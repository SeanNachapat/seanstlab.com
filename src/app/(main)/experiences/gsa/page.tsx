"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, ShieldCheck, Zap, Users, Sparkles } from "lucide-react";
import Link from "next/link";

import { useState } from "react";

export default function GSAPage() {
    const [rotation, setRotation] = useState(0);

    return (
        <main className="min-h-screen max-w-screen mx-auto px-6 lg:px-20 pt-32 pb-20 overflow-x-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-center mb-16"
                >
                    <Link
                        href="/experiences"
                        className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors font-mono text-xs tracking-widest group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        BACK TO EXPERIENCES
                    </Link>
                    <span className="font-mono text-[10px] bg-neutral-900 px-3 py-1 rounded text-neutral-500 uppercase tracking-widest">
                        Case Study / GSA 2026
                    </span>
                </motion.div>

                <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-mono text-sm text-blue-400 mb-4 tracking-widest uppercase">
                                Google Student Ambassador
                            </h2>
                            <h1 className="font-pixel text-5xl lg:text-7xl mb-8 text-white leading-[0.9] uppercase tracking-tighter">
                                Lead. <br />
                                Innovate. <br />
                                Inspire.
                            </h1>
                            <p className="font-mono text-lg text-neutral-400 leading-relaxed mb-8 max-w-md">
                                Representing Google at KMITL to bridge the gap between education and industry-leading technology.
                            </p>
                            <a
                                href="https://googlestudentambassador.info/th"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 font-pixel text-lg text-white border-b-2 border-white pb-1 hover:gap-5 transition-all"
                            >
                                VISIT OFFICIAL SITE <ArrowLeft className="rotate-180 w-5 h-5" />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="relative cursor-pointer flex justify-center items-center"
                        onHoverStart={() => {
                            const randomRotate = Math.floor(Math.random() * 20) - 10;
                            setRotation(randomRotate);
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            rotate: rotation,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl z-10">
                             <img
                                src="https://github.com/SeanNachapat.png"
                                className="w-full h-full object-cover"
                                alt="Sean Nachapat"
                            />
                        </div>

                        <div className="absolute -bottom-6 -right-6 w-48 h-48 md:w-56 md:h-56 z-20 pointer-events-none">
                            <img
                                src="https://framerusercontent.com/images/8wTRIiSVSyfl0uTe07aNw7eiRJ0.png"
                                className="w-full h-full object-contain drop-shadow-xl"
                                alt="Team Google"
                            />
                        </div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.6, scale: 1.2 }}
                            animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 90, 0],
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl z-0" 
                        />
                    </motion.div>
                </section>

                <section className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "LEAD",
                                icon: ShieldCheck,
                                color: "border-blue-500/30 text-blue-500",
                                desc: "Guiding a community of students to navigate the evolving tech landscape."
                            },
                            {
                                title: "INNOVATE",
                                icon: Zap,
                                color: "border-red-500/30 text-red-500",
                                desc: "Empowering developers to build solutions using AI & Cloud tools."
                            },
                            {
                                title: "INSPIRE",
                                icon: Users,
                                color: "border-green-500/30 text-green-500",
                                desc: "Igniting passion for technology through workshops and mentorship."
                            }
                        ].map((pillar, i) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className={`p-8 rounded-xl border ${pillar.color} bg-neutral-900/50 hover:bg-neutral-900 transition-colors group`}
                            >
                                <pillar.icon className="w-6 h-6 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-pixel text-2xl mb-4 uppercase tracking-wide">{pillar.title}</h3>
                                <p className="font-mono text-sm text-neutral-500 leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                 <section className="mb-24 relative">
                    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                        <span className="font-pixel text-4xl md:text-6xl text-neutral-400/50 uppercase tracking-widest border-4 border-current px-8 py-4 rounded-xl transform -rotate-6 backdrop-blur-sm">
                            Coming Soon
                        </span>
                    </div>
                    <div className="opacity-30 grayscale filter pointer-events-none select-none blur-[1px]">
                        <h2 className="font-pixel text-4xl mb-12 text-center">MY WORK</h2> 
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 rounded-2xl bg-blue-500/5 border border-blue-500/10 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-pixel text-xl">AI Advocacy</h3>
                                </div>
                                <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Organizing hands-on workshops to demystify Gemini and other Google AI tools for students across faculties.
                                </p>
                            </div>
                             <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/10 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-pixel text-xl">Feedback Loops</h3>
                                </div>
                                <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Bridging the gap between student developers and Google product teams by gathering actionable feedback.
                                </p>
                            </div>
                             <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/10 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-green-500/10 rounded-lg text-green-500">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-pixel text-xl">Community</h3>
                                </div>
                                <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Mentoring junior students and fostering an inclusive environment for tech exploration.
                                </p>
                            </div>
                             <div className="p-8 rounded-2xl bg-yellow-500/5 border border-yellow-500/10 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-500">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-pixel text-xl">Cloud Guides</h3>
                                </div>
                                <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Creating accessible deployment guides for Google Cloud to help students launch their projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* My Vision Section */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
                    <div className="lg:col-span-1">
                        <h2 className="font-pixel text-3xl mb-4 tracking-tighter uppercase leading-tight">
                            My <br /> Vision
                        </h2>
                        <div className="w-12 h-1 bg-white mb-6" />
                    </div>
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="font-mono text-lg text-neutral-300 space-y-6 leading-relaxed"
                        >
                            <p>
                                Since joining the program in February 2026, my focus has been on democratizing access to cutting-edge AI tools. I believe that technology is the ultimate equalizer, and as an ambassador, I strive to ensure every student at KMITL has the opportunity to learn and build.
                            </p>
                            <p>
                                I envision a campus where innovation isn't just a buzzword, but a daily practice, where students from all backgrounds feel empowered to turn their ideas into reality using the best tools available.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 pt-16 border-t border-neutral-800 text-center"
                >
                    <Link
                        href="/connect"
                        className="font-pixel text-lg text-neutral-400 hover:text-white transition-colors uppercase tracking-widest"
                    >
                        Contact the Ambassador
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
