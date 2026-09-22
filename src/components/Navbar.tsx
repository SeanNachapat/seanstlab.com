"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { title: "HOME", href: "/", id: "01" },
    { title: "ABOUT", href: "/about", id: "02" },
    { title: "WORKS", href: "/projects", id: "03" },
    { title: "EXPERIENCES", href: "/experiences", id: "04" },
    { title: "LIBRARY", href: "/library", id: "05" },
    { title: "REEL", href: "/reel", id: "06" },
    { title: "CONNECT", href: "/connect", id: "07" },
  ];

  const sidebarVariants: Variants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "tween",
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const itemVariants: Variants = {
    closed: { x: 40, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.15 + i * 0.05,
        duration: 0.35,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-sm tracking-widest text-foreground hover:opacity-80 transition-opacity"
          >
            <span className="font-pixel text-2xl tracking-wider">SEANSTLAB</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-foreground/10 text-foreground font-mono">
              v2.0
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs tracking-wider">
            {menuItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.title}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Theme Switcher & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md text-muted hover:text-foreground hover:bg-card border border-border/60 transition-colors focus:outline-none"
                aria-label="Toggle Theme"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* Menu Toggle Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-foreground hover:bg-card border border-border/60 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Sidebar Panel */}
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 right-0 w-full sm:w-[420px] h-screen bg-card text-foreground z-50 flex flex-col justify-between p-8 sm:p-12 shadow-2xl border-l border-border transition-colors duration-300 overflow-y-auto"
            >
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="font-mono text-xs text-muted uppercase tracking-widest">
                  NAVIGATION / V2.0
                </span>
                <button
                  onClick={toggleMenu}
                  className="p-2 text-muted hover:text-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col gap-5 my-8">
                {menuItems.map((item, i) => {
                  const isActive =
                    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <motion.div
                      key={item.id}
                      custom={i}
                      variants={itemVariants}
                      className="group"
                    >
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className={`relative flex items-baseline justify-between transition-all duration-200 py-1 ${
                          isActive
                            ? "text-foreground font-bold"
                            : "text-muted hover:text-foreground"
                        }`}
                      >
                        <div className="flex items-baseline gap-3">
                          <span className="text-sm font-mono opacity-40 group-hover:opacity-100 transition-opacity">
                            {item.id}
                          </span>
                          <span className="text-3xl sm:text-4xl font-pixel tracking-wide">
                            {item.title}
                          </span>
                        </div>
                        {isActive ? (
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-foreground text-background">
                            ACTIVE
                          </span>
                        ) : (
                          <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </span>
                        )}
                      </Link>
                      <div className="h-px w-full bg-border/60 mt-3 group-last:hidden" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Info / Socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="pt-6 border-t border-border flex flex-col gap-4 text-xs font-mono text-muted"
              >
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/SeanNachapat"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground flex items-center gap-1 transition-colors"
                  >
                    GitHub <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nachapat-iamphuang/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground flex items-center gap-1 transition-colors"
                  >
                    LinkedIn <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://www.instagram.com/seanst._"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground flex items-center gap-1 transition-colors"
                  >
                    Instagram <ArrowUpRight size={12} />
                  </a>
                </div>
                <div className="flex justify-between items-center text-[10px] text-muted/70 pt-2 border-t border-border/40">
                  <span>BANGKOK, THAILAND</span>
                  <span>SEANSTLAB © {new Date().getFullYear()}</span>
                </div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
