"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { experiences, Experience, ExperiencePreviewConfig } from "@/data/experiences";

export default function ExperiencesPage() {
  const [hoveredExperience, setHoveredExperience] = useState<Experience | null>(null);

  // Mouse position tracking with smooth spring motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="min-h-screen max-w-screen-xl mx-auto px-6 lg:px-20 pt-32 pb-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-pixel text-4xl lg:text-6xl mb-24 text-center text-foreground"
        >
          EXPERIENCES
        </motion.h1>

        <div className="relative">
          {/* Central Timeline Line - Desktop Only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block transform -translate-x-1/2" />

          <div className="relative flex flex-col">
            {experiences.map((exp, index) => {
              const prevExp = index > 0 ? experiences[index - 1] : null;
              const isDifferentType = prevExp && prevExp.type !== exp.type;
              
              const spacingClass = index === 0 
                ? "" 
                : isDifferentType 
                  ? "mt-12 md:mt-0" 
                  : "mt-12 md:mt-24";

              return (
                <div key={index} className={spacingClass}>
                  <ExperienceItem 
                    exp={exp} 
                    index={index} 
                    onMouseEnter={() => setHoveredExperience(exp)}
                    onMouseLeave={() => setHoveredExperience(null)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Mini-Browser Preview - Only active on hover & on desktop */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: 30,
          translateY: -110,
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ 
          opacity: hoveredExperience ? 1 : 0, 
          scale: hoveredExperience ? 1 : 0.85 
        }}
        transition={{ duration: 0.15 }}
        className="hidden md:block w-[360px] h-[220px] rounded-xl overflow-hidden bg-card/75 border border-border/80 shadow-2xl backdrop-blur-md dark:bg-neutral-950/75 dark:border-neutral-800/80 relative"
      >
        {experiences.map((exp, index) => {
          const isHovered = hoveredExperience?.role === exp.role && hoveredExperience?.organization === exp.organization && hoveredExperience?.period === exp.period;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-200 ${
                isHovered ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {renderPreview(exp, isHovered)}
            </div>
          );
        })}
      </motion.div>
    </main>
  );
}

function ExperienceItem({ 
  exp, 
  index, 
  onMouseEnter, 
  onMouseLeave 
}: { 
  exp: Experience; 
  index: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const isDeveloper = exp.type === 'developer';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-0"
    >
      {/* Left Side (Other) */}
      <div 
        className={`order-2 md:order-1 ${!isDeveloper ? 'md:pr-12 lg:pr-20 cursor-pointer' : 'hidden md:block opacity-0 pointer-events-none'}`}
        onMouseEnter={!isDeveloper ? onMouseEnter : undefined}
        onMouseLeave={!isDeveloper ? onMouseLeave : undefined}
      >
        {!isDeveloper && <ExperienceCard exp={exp} hoverClass="hover:-translate-x-2" />}
      </div>

      {/* Middle: Timeline Dot */}
      <div className="flex justify-center items-center relative z-10 order-1 md:order-2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-2 h-2 rounded-full bg-muted"
        />
      </div>

      {/* Right Side (Developer) */}
      <div 
        className={`order-3 ${isDeveloper ? 'md:pl-12 lg:pl-20 cursor-pointer' : 'hidden md:block opacity-0 pointer-events-none'}`}
        onMouseEnter={isDeveloper ? onMouseEnter : undefined}
        onMouseLeave={isDeveloper ? onMouseLeave : undefined}
      >
        {isDeveloper && <ExperienceCard exp={exp} hoverClass="hover:translate-x-2" />}
      </div>
    </motion.div>
  );
}

function ExperienceCard({ exp, hoverClass }: { exp: Experience; hoverClass?: string }) {
  return (
    <div className={`space-y-3 text-left transition-transform duration-300 ${hoverClass || ""}`}>
      <div className="space-y-1">
        <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
          {exp.period}
        </span>
        <h3 className="font-pixel text-xl lg:text-2xl text-foreground leading-tight">
          {exp.role}
        </h3>
        <a
          href={exp.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-muted hover:text-foreground hover:underline transition-colors font-mono text-xs"
        >
          {exp.organization} ↗
        </a>
      </div>

      <ul className="space-y-2">
        {exp.details.map((detail, i) => (
          <li key={i} className="flex items-start gap-2 text-muted-foreground font-mono text-xs leading-relaxed text-left" style={{ color: 'var(--muted)' }}>
            <span className="mt-1.5 w-1 h-1 rounded-full bg-border flex-shrink-0" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SlidePreview({ config, isHovered }: { config: ExperiencePreviewConfig; isHovered: boolean }) {
  const slides = config.slides || [];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isHovered || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500); // Rotate slides every 3.5 seconds
    return () => clearInterval(interval);
  }, [slides.length, isHovered]);

  if (slides.length === 0) return null;
  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-full bg-[#0d0e15] text-white p-3.5 flex flex-col justify-between overflow-hidden select-none">
      {/* Slide Top Progress bar & Indicators */}
      <div className="flex justify-between items-center text-[8px] font-mono text-neutral-400 border-b border-neutral-900 pb-1.5 dark:border-neutral-800/60">
        <span className="text-amber-500 uppercase tracking-widest font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          LECTURE SLIDES
        </span>
        <span className="bg-neutral-800 px-1.5 py-0.5 rounded text-[7px] text-neutral-300">
          Slide {currentSlide + 1} of {slides.length}
        </span>
      </div>

      {/* Slide body with framer-motion AnimatePresence for smooth transitions */}
      <div className="flex-1 my-1.5 flex flex-col justify-center min-h-0 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full flex flex-col justify-center text-left"
          >
            <h4 className="font-pixel text-[11px] text-amber-300 leading-tight mb-1.5 tracking-wide uppercase">
              {slide.title}
            </h4>

            {slide.codeSnippet && (
              <div className="font-mono text-[7px] text-emerald-400 bg-[#07080c] p-2 rounded border border-neutral-800/80 whitespace-pre overflow-hidden leading-normal">
                {slide.codeSnippet}
              </div>
            )}

            {slide.bullets && (
              <ul className="space-y-1">
                {slide.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-1 text-neutral-300 font-mono text-[8px] leading-relaxed">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500/80 flex-shrink-0" style={{ transform: 'translateY(1.5px)' }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {slide.visualElement === 'diagram-oop' && (
              <div className="flex justify-center items-center gap-2 mt-1 h-10 border border-neutral-800/40 rounded bg-neutral-900/30 p-1.5">
                <div className="border border-blue-500/30 rounded px-1.5 py-0.5 text-[7px] font-mono text-center bg-[#07080c]">
                  <div className="text-[5px] text-neutral-400 uppercase">Class</div>
                  <div className="text-blue-400 font-bold">Blueprint</div>
                </div>
                <span className="text-[8px] text-neutral-500 font-bold">➔</span>
                <div className="border border-green-500/30 rounded px-1.5 py-0.5 text-[7px] font-mono text-center bg-[#07080c]">
                  <div className="text-[5px] text-neutral-400 uppercase">Object</div>
                  <div className="text-green-400 font-bold">Instance</div>
                </div>
              </div>
            )}

            {slide.visualElement === 'diagram-ds' && (
              <div className="flex justify-center items-center gap-1 mt-1 h-10 border border-neutral-800/40 rounded bg-neutral-900/30 p-1">
                {["[0]", "[1]", "[2]", "[3]"].map((idx, i) => (
                  <div key={i} className="border border-purple-500/30 rounded w-8 py-0.5 text-[6px] font-mono text-center bg-[#07080c]">
                    <div className="text-[5px] text-purple-400">{idx}</div>
                    <div className="text-[7px] text-white font-bold">{10 * (i + 1)}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide footer */}
      <div className="flex justify-between items-center text-[7px] font-mono text-neutral-500 border-t border-neutral-900 pt-1.5 dark:border-neutral-800/60">
        <span>CS_DECK_2025.pdf</span>
        <span className="flex items-center gap-1 font-bold animate-pulse text-amber-500/80">
          <span>•</span> PLAYING
        </span>
      </div>
    </div>
  );
}

function WebsitePreview({ config }: { config: ExperiencePreviewConfig }) {
  const mockup = config.websiteMockup;
  if (!mockup) return null;

  const isGoogle = mockup.theme === 'google';
  const isRetro = mockup.theme === 'retro';

  return (
    <div className={`relative w-full h-full flex flex-col justify-between select-none text-left p-3.5
      ${isGoogle ? 'bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100' :
        isRetro ? 'bg-[#0b0f19] text-cyan-400' :
        'bg-[#121214] text-white'
      }`}
    >
      {/* Floating lights / glows */}
      <div className="absolute top-[-10px] right-[-10px] w-24 h-24 rounded-full blur-2xl opacity-15 pointer-events-none" 
           style={{ backgroundColor: mockup.accentColor || '#3b82f6' }} />

      {/* Mini Mockup Header / Navigation */}
      <div className="flex justify-between items-center pb-1.5 border-b border-dashed border-neutral-200 dark:border-neutral-800/60">
        <div className="flex items-center gap-1.5">
          {isGoogle ? (
            <div className="flex -space-x-0.5">
              <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
              <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
              <span className="w-2 h-2 rounded-full bg-[#FBBC05]" />
              <span className="w-2 h-2 rounded-full bg-[#34A853]" />
            </div>
          ) : (
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: mockup.accentColor || '#06b6d4' }} />
          )}
          <span className="text-[7.5px] font-mono font-bold tracking-wider uppercase opacity-85">
            {isGoogle ? 'GDG PORTAL' : isRetro ? 'CSCAMP_WEB' : 'LIVE PREVIEW'}
          </span>
        </div>
        <div className="flex gap-1.5 text-[6.5px] font-mono opacity-60">
          <span>Home</span>
          <span>•</span>
          <span>Register</span>
        </div>
      </div>

      {/* Website Hero Section Mockup */}
      <div className="my-auto space-y-1.5 py-1">
        <div className="space-y-0.5">
          <h4 className={`font-pixel text-[11px] leading-tight tracking-wide
            ${isGoogle ? 'text-[#4285F4] dark:text-[#4285F4]' : isRetro ? 'text-cyan-300' : 'text-white'}`}
          >
            {mockup.heroTitle}
          </h4>
          <p className="text-[8px] font-mono text-muted-foreground leading-snug line-clamp-2 max-w-[310px]">
            {mockup.heroSubtitle}
          </p>
        </div>

        {/* Dynamic Stats Row */}
        {mockup.stats && (
          <div className="grid grid-cols-3 gap-1.5 pt-0.5">
            {mockup.stats.map((stat, i) => (
              <div key={i} className={`p-1 rounded text-center border font-mono
                ${isGoogle ? 'bg-neutral-50 dark:bg-neutral-900 border-neutral-100 dark:border-neutral-800' :
                  isRetro ? 'bg-cyan-950/20 border-cyan-500/10' :
                  'bg-neutral-900/60 border-neutral-800/40'
                }`}
              >
                <div className={`text-[8.5px] font-bold ${isRetro ? 'text-white' : 'text-foreground dark:text-white'}`}>
                  {stat.value}
                </div>
                <div className="text-[5.5px] text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Mockup */}
      <div className="flex justify-between items-center text-[7px] font-mono border-t border-neutral-100 dark:border-neutral-800/40 pt-1.5 opacity-60">
        <span>Mockup Online</span>
        <span className="flex items-center gap-0.5 font-bold" style={{ color: mockup.accentColor || '#3b82f6' }}>
          ENTER SITE ↗
        </span>
      </div>
    </div>
  );
}

function CanvaPreview({ config }: { config: ExperiencePreviewConfig }) {
  const url = config.canvaUrl || "";
  if (!url) return null;

  // Convert standard Canva view link to embed link if it isn't already
  let embedUrl = url;
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname.includes("canva.com") && urlObj.pathname.includes("/design/")) {
      urlObj.search = "?embed";
      embedUrl = urlObj.toString();
    }
  } catch (e) {
    if (url.includes("canva.com") && !url.includes("embed")) {
      if (url.includes("?")) {
        embedUrl = url.split("?")[0] + "?embed";
      } else {
        embedUrl = url + "?embed";
      }
    }
  }

  return (
    <div className="w-full h-full bg-[#121214] relative">
      <iframe
        src={embedUrl}
        className="w-full h-full border-0 absolute inset-0"
        allowFullScreen
        allow="fullscreen"
        title="Canva Presentation Preview"
      />
    </div>
  );
}

function renderPreview(exp: Experience, isHovered: boolean) {
  // Slides Preview
  if (exp.preview?.type === 'slides') {
    return <SlidePreview config={exp.preview} isHovered={isHovered} />;
  }

  // Website Preview
  if (exp.preview?.type === 'website') {
    return <WebsitePreview config={exp.preview} />;
  }

  // Canva Preview
  if (exp.preview?.type === 'canva') {
    return <CanvaPreview config={exp.preview} />;
  }

  // Youtube / Micrubik
  if (exp.preview?.type === 'youtube' || (!exp.preview && (exp.link.includes("youtube.com") || exp.link.includes("micrubik")))) {
    const videoId = exp.preview?.youtubeId || "54MyIO-UOB8";
    return (
      <div className="relative w-full h-full bg-neutral-950 overflow-hidden">
        {/* Real autoplaying muted looping Youtube video */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
          className="w-full h-full border-0 scale-110 pointer-events-none absolute inset-0"
          allow="autoplay; encrypted-media"
          title="YouTube Video Preview"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>
    );
  }

  // CS Camp / Terminal
  if (exp.preview?.type === 'terminal' || (!exp.preview && exp.link.includes("cscamp.net"))) {
    const sys = exp.preview?.terminalSystem || "CS_CAMP_PORTAL";
    const cmd = exp.preview?.terminalCmd || `cscamp --status --year=${exp.period.includes("2025") ? "2025" : "2026"}`;
    const lines = exp.preview?.terminalLines || (exp.period.includes("2025") ? [
      "[OOP DEEP DIVE SECTION]",
      "- Students: 30 selected highschoolers",
      "- Focus: Polymorphism, Inheritance",
      "- Labs: OOP implementation exercises"
    ] : [
      "[JAVA METHODS BOOTCAMP]",
      "- Students: 100 Selected nationwide",
      "- Focus: Functions, scopes, return values",
      "- Status: Complete & successful"
    ]);

    return (
      <div className="relative w-full h-full bg-[#0d0e15] text-[#4af626] font-mono p-4 flex flex-col justify-between overflow-hidden select-none">
        {/* Terminal Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-green-500/5 to-transparent bg-[size:100%_4px] opacity-30 animate-pulse animate-duration-2000" />
        
        <div className="space-y-1.5 text-left">
          <div className="flex justify-between items-center border-b border-green-500/20 pb-1 text-[9px]">
            <span>SYSTEM: {sys}</span>
            <span className="font-bold animate-pulse text-green-400">• LIVE</span>
          </div>
          <div className="text-[10px]">
            <span className="text-white">&gt; </span>{cmd}
          </div>
          <div className="text-[9px] text-green-500/80 leading-relaxed font-mono mt-1 space-y-0.5">
            {lines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
        <div className="text-[8px] text-[#4af626]/50 flex justify-between border-t border-green-500/10 pt-1.5">
          <span>KMITL_COMP_SCI</span>
          <span>SECURE_CONNECTION</span>
        </div>
      </div>
    );
  }

  // Google Student Ambassador
  if (exp.preview?.type === 'google' || (!exp.preview && exp.link.includes("gsa"))) {
    const title = exp.preview?.title || "GOOGLE STUDENT AMBASSADOR";
    const subtitle = exp.preview?.subtitle || "CASE STUDY / PREVIEW";
    
    return (
      <div className="relative w-full h-full bg-neutral-900 dark:bg-neutral-950 p-4 flex flex-col justify-between overflow-hidden select-none">
        {/* Background glow animation */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex justify-between items-center">
          <span className="text-[9px] text-blue-400 font-mono tracking-widest font-bold">{subtitle}</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          </div>
        </div>
        
        <div className="my-auto text-left py-1">
          <h4 className="font-pixel text-lg text-white tracking-wider leading-none mb-1">
            {title}
          </h4>
          <div className="flex gap-1.5 mt-2">
            <span className="text-[8px] font-mono px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">LEAD</span>
            <span className="text-[8px] font-mono px-2 py-0.5 bg-red-500/10 text-red-400 rounded-full border border-red-500/20">INNOVATE</span>
            <span className="text-[8px] font-mono px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">INSPIRE</span>
          </div>
        </div>
        
        <div className="text-[9px] text-neutral-500 font-mono flex items-center justify-between border-t border-neutral-800 pt-1.5">
          <span>seanstlab.com{exp.link}</span>
          <span className="text-white animate-pulse">VIEW CASE STUDY ↗</span>
        </div>
      </div>
    );
  }

  // GDG / Community
  if (exp.preview?.type === 'community' || (!exp.preview && exp.link.includes("gdg"))) {
    const title = exp.preview?.title || "Google Developer Groups";
    const subtitle = exp.preview?.subtitle || "GDG Community";
    const desc = exp.preview?.description || "Fostering developer communities, hosting hands-on labs, AI workshops, and technology seminars in Bangkok.";
    
    return (
      <div className="relative w-full h-full bg-neutral-900 dark:bg-neutral-950 p-4 flex flex-col justify-between overflow-hidden select-none">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <span className="w-3 h-3 rounded-full bg-[#4285F4] border border-neutral-900" />
              <span className="w-3 h-3 rounded-full bg-[#EA4335] border border-neutral-900" />
              <span className="w-3 h-3 rounded-full bg-[#FBBC05] border border-neutral-900" />
              <span className="w-3 h-3 rounded-full bg-[#34A853] border border-neutral-900" />
            </div>
            <span className="text-[9px] text-neutral-400 font-mono">{subtitle}</span>
          </div>
          <span className="text-[8px] text-neutral-500 font-mono">{exp.organization}</span>
        </div>
        
        <div className="my-auto text-left space-y-1">
          <h4 className="font-pixel text-lg text-white leading-tight">
            {title}
          </h4>
          <p className="text-[9px] text-neutral-400 font-mono leading-relaxed max-w-[310px]">
            {desc}
          </p>
        </div>
        
        <div className="text-[8px] text-neutral-500 font-mono flex justify-between border-t border-neutral-800 pt-2">
          <span>{exp.link.replace("https://", "")}</span>
          <span className="text-[#4285F4] font-bold">JOIN COMMUNITY ↗</span>
        </div>
      </div>
    );
  }

  // Lecturer / Code
  if (exp.preview?.type === 'code' || (!exp.preview && (exp.link === "#" || exp.role === "Lecturer"))) {
    const title = exp.preview?.title || "Java Fundamental Course";
    const subtitle = exp.preview?.subtitle || "KMITL / COMPUTER SCIENCE";
    const code = exp.preview?.codeSnippet || "public class JavaCourse {\n  // taught data structures & loops\n  boolean successful = true;\n}";
    
    return (
      <div className="relative w-full h-full bg-[#16171d] p-4 flex flex-col justify-between overflow-hidden select-none">
        <div className="flex justify-between items-center text-[9px] text-neutral-400 font-mono border-b border-neutral-800 pb-1.5">
          <span>{subtitle}</span>
          <span className="text-purple-400 font-bold">LECTURER</span>
        </div>
        
        <div className="my-auto space-y-2 text-left py-1">
          <h4 className="font-pixel text-lg text-white leading-tight">
            {title}
          </h4>
          <div className="font-mono text-[8px] text-neutral-400 bg-neutral-950/60 p-2 rounded border border-neutral-800/40 whitespace-pre">
            {code}
          </div>
        </div>
        
        <div className="text-[8px] text-neutral-500 font-mono flex justify-between border-t border-neutral-800 pt-1.5">
          <span>Department of Computer Science</span>
          <span>{exp.period}</span>
        </div>
      </div>
    );
  }

  // Generic Iframe Fallback
  if (exp.preview?.type === 'iframe' || exp.preview?.iframeUrl) {
    const url = exp.preview.iframeUrl || exp.link;
    return (
      <div className="relative w-full h-full bg-neutral-900 overflow-hidden">
        <iframe
          src={url}
          style={{
            width: '500%',
            height: '500%',
            transform: 'scale(0.2)',
            transformOrigin: 'top left',
          }}
          className="border-0 absolute inset-0"
          title="Embed Preview"
        />
      </div>
    );
  }

  // Absolute Fallback
  return (
    <div className="relative w-full h-full bg-neutral-900 p-4 flex flex-col justify-between overflow-hidden select-none">
      <div className="text-[9px] text-neutral-400 font-mono border-b border-neutral-800 pb-1">
        <span>PREVIEW</span>
      </div>
      <div className="my-auto text-left">
        <h4 className="font-pixel text-lg text-white leading-tight mb-1">{exp.role}</h4>
        <p className="text-[10px] text-neutral-400 font-mono truncate">{exp.organization}</p>
      </div>
      <div className="text-[8px] text-neutral-500 font-mono border-t border-neutral-800 pt-1">
        <span>{exp.link}</span>
      </div>
    </div>
  );
}
