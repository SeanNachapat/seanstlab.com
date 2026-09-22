"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { socials } from "@/data/socials";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const navLinks = [
    { label: "WORKS", href: "#works" },
    { label: "EXPERIENCES", href: "#experiences" },
    { label: "SKILLS", href: "#skills" },
    { label: "GEAR", href: "#gear" },
    { label: "CONTACT", href: "#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-sm tracking-widest text-foreground hover:opacity-80 transition-opacity"
          >
            <span className="font-pixel text-2xl tracking-wider">SEANSTLAB</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-foreground/10 text-foreground font-mono">
              v2.0
            </span>
          </Link>

          {/* Desktop On-Page Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs tracking-wider text-muted">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-foreground transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
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

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-foreground hover:bg-card border border-border/60 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="fixed top-16 left-0 right-0 z-50 bg-card border-b border-border p-6 shadow-2xl md:hidden flex flex-col gap-4 font-mono text-sm"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted hover:text-foreground py-2 border-b border-border/60"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2 text-xs text-muted">
                {socials.slice(0, 3).map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground flex items-center gap-1"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
