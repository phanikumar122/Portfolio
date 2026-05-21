"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { portfolioData } from "@/data/portfolio";
import { Magnetic } from "@/components/ui/Magnetic";

const navLinks = [
  { name: "About",        href: "#about" },
  { name: "Skills",       href: "#skills" },
  { name: "Projects",     href: "#projects" },
  { name: "Hackathons",   href: "#hackathons" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact",      href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme }     = useTheme();
  const [mounted, setMounted]   = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-saas"
      style={{
        padding: scrolled ? "0.6rem 0" : "1.25rem 0",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--nav-border)" : "none",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#home" className="flex items-baseline gap-1 select-none">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl font-bold tracking-tight"
            style={{ color: "var(--color-text)" }}
          >
            Phani
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-2xl font-bold tracking-tight italic"
            style={{ color: "var(--color-text)" }}
          >
            Kumar.
          </motion.span>
        </a>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <Magnetic strength={0.2}>
                <Link
                  href={item.href}
                  className="relative text-[13px] font-semibold tracking-wide px-4 py-2 rounded-lg transition-all duration-300 block"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--color-primary)";
                    el.style.background = "var(--color-surface)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--color-text-muted)";
                    el.style.background = "transparent";
                  }}
                >
                  {item.name}
                </Link>
              </Magnetic>
            </motion.div>
          ))}

          {/* Icons group */}
          <div className="ml-4 flex items-center gap-2 pl-4" style={{ borderLeft: "1px solid var(--color-border)" }}>

            {/* Theme Toggle */}
            <Magnetic strength={0.35}>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.color = "var(--color-primary)";
                  el.style.background = "var(--color-surface)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.color = "var(--color-text-muted)";
                  el.style.background = "transparent";
                }}
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {!mounted || theme === "dark" ? <Sun className="w-[1.1rem] h-[1.1rem]" /> : <Moon className="w-[1.1rem] h-[1.1rem]" />}
                </motion.div>
              </button>
            </Magnetic>

            {/* GitHub */}
            <Magnetic strength={0.35}>
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300 block"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "var(--color-primary)";
                  el.style.background = "var(--color-surface)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "var(--color-text-muted)";
                  el.style.background = "transparent";
                }}
              >
                <Github className="w-[1.1rem] h-[1.1rem]" />
              </a>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href="#contact"
                className="ml-1 px-5 py-2 rounded-xl text-[12px] font-bold tracking-wider transition-all duration-300 block"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-bg)",
                  boxShadow: "0 4px 16px var(--color-glow)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "var(--color-primary-mid)";
                  el.style.boxShadow = "0 6px 28px var(--color-glow-strong)";
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "var(--color-primary)";
                  el.style.boxShadow = "0 4px 16px var(--color-glow)";
                  el.style.transform = "translateY(0)";
                }}
              >
                Contact Me
              </a>
            </Magnetic>
          </div>
        </div>

        {/* ── Mobile: icons + hamburger ── */}
        <div className="md:hidden flex items-center gap-2">

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200"
            style={{
              color: "var(--color-primary)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            {!mounted || theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200"
            style={{
              color: "var(--color-primary)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background: "var(--nav-bg)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid var(--nav-border)",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl sm:text-3xl font-bold tracking-tighter py-1 transition-colors duration-200"
                  style={{ color: "var(--color-text)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-primary)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)"; }}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="pt-6 mt-2 flex items-center gap-3" style={{ borderTop: "1px solid var(--color-border)" }}>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[12px] font-bold tracking-widest transition-all duration-200"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-primary)",
                  }}
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 flex items-center justify-center py-3 rounded-xl text-[12px] font-bold tracking-widest"
                  style={{
                    background: "var(--color-primary)",
                    color: "var(--color-bg)",
                  }}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
