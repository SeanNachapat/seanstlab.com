"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { title: "HOME", href: "/", id: "01" },
    { title: "ABOUT", href: "/about", id: "02" },
    { title: "WORKS", href: "/projects", id: "03" },
    { title: "REEL", href: "/reel", id: "04" },
    { title: "CONNECT WITH ME", href: "/connect", id: "05" },
  ];

  const sidebarVariants: Variants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1], 
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "tween",
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const itemVariants: Variants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-8 right-8 z-50 p-2 bg-transparent text-foreground mix-blend-difference focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
            />
            <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 right-0 w-full md:w-[480px] h-screen bg-card text-foreground z-40 flex flex-col justify-between p-12 shadow-2xl border-l border-border transition-colors duration-300"
          >
            <div className="flex flex-col gap-8 mt-16">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  custom={i}
                  variants={itemVariants}
                  className="group"
                >
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="relative flex items-baseline text-muted transition-all duration-300 group-hover:text-white group-hover:dark:text-white group-hover:[text-shadow:0_0_15px_rgba(0,0,0,0.8)] dark:group-hover:[text-shadow:0_0_15px_rgba(255,255,255,0.4)]"
                  >
                    <span className="text-xl mr-4 opacity-30 absolute -left-10 top-0 group-hover:opacity-100 transition-opacity">
                      +
                    </span>
                    <span className="text-4xl font-pixel md:text-6xl font-bold tracking-tight translate-y-[-2px]">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono absolute top-0 -right-8 opacity-30 group-hover:opacity-100 transition-opacity">
                      {item.id}
                    </span>
                  </Link>
                  <div className="h-px w-full bg-border mt-6 group-last:hidden" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex justify-between items-end text-[10px] font-mono uppercase tracking-widest text-muted"
            >
              <div className="flex gap-4">
                <a
                  href="https://github.com/SeanNachapat/"
                  className="hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  Github <ArrowUpRight size={10} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nachapat-iamphuang/"
                  className="hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  Linkedin <ArrowUpRight size={10} />
                </a>
                <a
                  href="https://www.instagram.com/seanst._"
                  className="hover:text-foreground flex items-center gap-1 transition-colors"
                >
                  Instagram <ArrowUpRight size={10} />
                </a>
              </div>

              {/* Theme Toggle Button (Google Material Icons) */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-muted hover:text-foreground transition-colors p-0 bg-transparent border-none focus:outline-none flex items-center justify-center"
                  aria-label="Toggle Theme"
                >
                  <span className="material-symbols-outlined !text-xl select-none">
                    {theme === "dark" ? "light_mode" : "dark_mode"}
                  </span>
                </button>
              )}
            </motion.div>
          </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
