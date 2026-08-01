"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { socials } from "@/data/socials";
import AsciiPlant from "@/components/AsciiPlant";
import Link from "next/link";

interface Sticker {
    id: number;
    title: string;
    imageUrl?: string;
    svgContent?: React.ReactNode;
    position: { top?: string; bottom?: string; left?: string; right?: string };
    rotate: number;
    scale: number;
}

export default function LinkPage() {
    const [stickers, setStickers] = useState<Sticker[]>([]);

    useEffect(() => {
        const availablePositions = [
            { top: "-28px", left: "-8px" },
            { top: "-30px", right: "12px" },
            { bottom: "-28px", left: "20px" },
            { bottom: "-30px", right: "-10px" },
            { top: "-26px", left: "38%" },
            { bottom: "-26px", right: "35%" },
            { top: "15%", left: "-26px" },
            { bottom: "20%", right: "-28px" },
            { top: "-24px", right: "32%" },
            { bottom: "-24px", left: "55%" },
        ];

        const allBadges = [
            {
                title: "Quickdraw",
                imageUrl: "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/Quick-Draw/PNG/Skin-Tones/QuickDraw_SkinTone1.png",
            },
            {
                title: "Stargazer",
                imageUrl: "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/Star-Struck/PNG/StarStruck_Gold.png",
            },
            {
                title: "Pull Shark",
                imageUrl: "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/Pull-Shark/PNG/PullShark_Gold.png",
            },
            {
                title: "Pair Extraordinaire",
                imageUrl: "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/Pair-Extraordinaire/PNG/PairExtraordinaire.png",
            },
            {
                title: "YOLO",
                imageUrl: "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/YOLO/PNG/YOLO_Badge.png",
            },
            {
                title: "Galaxy Brain",
                imageUrl: "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/Galaxy-Brain/PNG/GalaxyBrain.png",
            },
            {
                title: "Public Sponsor",
                imageUrl: "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/GitHub-Sponsor/PNG/GitHubSponsorBadge.png",
            },
            {
                title: "Arctic Vault",
                imageUrl: "https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/2020-Arctic-Code-Vault-Contributor/PNG/2020ArcticCodeVaultBadge.png",
            }
        ];

        // Shuffle positions and badges every refresh
        const shuffledPositions = [...availablePositions].sort(() => Math.random() - 0.5);
        const shuffledBadges = [...allBadges].sort(() => Math.random() - 0.5);

        const count = Math.floor(Math.random() * 2) + 5; // 5 or 6 badges
        const generated: Sticker[] = [];

        for (let i = 0; i < count; i++) {
            const badge = shuffledBadges[i];
            generated.push({
                id: i,
                title: badge.title,
                imageUrl: badge.imageUrl,
                position: shuffledPositions[i],
                rotate: Math.floor(Math.random() * 50) - 25, // -25deg to 25deg
                scale: 0.9 + Math.random() * 0.3, // 0.9 to 1.2
            });
        }

        setStickers(generated);
    }, []);

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
                        className="relative group block w-full p-6 rounded-sm border-2 border-[#72E182] bg-[#72E182]/5 hover:bg-[#72E182]/10 transition-all duration-300 overflow-visible"
                    >
                        {/* Animated background glow */}
                        <div className="absolute inset-0 bg-[#72E182]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />

                        {/* Random GitHub Achievement PNGs and Google Badges stacked over the button */}
                        {stickers.map((sticker) => (
                            <motion.div
                                key={sticker.id}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: sticker.scale, opacity: 1, rotate: sticker.rotate }}
                                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 + sticker.id * 0.05 }}
                                style={{
                                    position: "absolute",
                                    ...sticker.position,
                                    zIndex: 20,
                                }}
                                className="pointer-events-none drop-shadow-[0_6px_10px_rgba(0,0,0,0.7)]"
                            >
                                {sticker.imageUrl && !sticker.svgContent ? (
                                    <img
                                        src={sticker.imageUrl}
                                        alt={sticker.title}
                                        className="w-14 h-14 object-contain filter drop-shadow-md"
                                    />
                                ) : (
                                    sticker.svgContent
                                )}
                            </motion.div>
                        ))}
                        
                        <div className="flex items-center gap-4 relative z-10">
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
