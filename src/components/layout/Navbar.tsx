"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

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
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id === "home" ? "about" : id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sectionIds = ["home", "about", "skills", "projects", "hackathons", "certificates", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-saas"
      style={{
        padding: scrolled ? "0.75rem 0" : "1.4rem 0",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "2px solid var(--neutral-900)" : "none",
        boxShadow: "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between" style={{ paddingLeft: "max(1rem, env(safe-area-inset-left))", paddingRight: "max(1rem, env(safe-area-inset-right))" }}>

        {/* ── Logo ── */}
        <a href="#home" className="flex items-baseline gap-1 select-none">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-3xl font-bold tracking-tight"
            style={{ color: "var(--color-text)" }}
          >
            Phani
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-3xl font-bold tracking-tight italic"
            style={{ color: "var(--color-text)" }}
          >
            Kumar.
          </motion.span>
        </a>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item, i) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.href}
                  className="relative text-[15px] font-semibold tracking-wide px-5 py-2.5 rounded-lg transition-all duration-305 block select-none"
                  style={{
                    color: isActive ? "var(--color-primary)" : "var(--color-text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    if (!isActive) el.style.color = "var(--color-text-muted)";
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-xl -z-10"
                      style={{
                        background: "rgba(var(--color-primary-rgb), 0.08)",
                        border: "2px solid var(--neutral-900)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              </motion.div>
            );
          })}

          {/* Icons group */}
          <div className="ml-4 flex items-center gap-2 pl-4" style={{ borderLeft: "2px solid var(--neutral-900)" }}>

            {/* GitHub */}
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-xl border-2 border-[var(--neutral-900)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-[3px_3px_0px_#18181A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#18181A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#18181A] transition-all duration-150 block"
            >
              <Github className="w-5 h-5 mx-auto" />
            </a>

            <a
              href="#contact"
              className="ml-1 px-5 py-2.5 rounded-xl text-[13px] font-bold tracking-wider border-2 border-[var(--neutral-900)] bg-[var(--color-primary)] text-white shadow-[3px_3px_0px_#18181A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#18181A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#18181A] transition-all duration-150 block"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* ── Mobile: icons + hamburger ── */}
        <div className="md:hidden flex items-center gap-2">

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="w-10 h-10 flex items-center justify-center rounded-xl border-2 border-[var(--neutral-900)] bg-[var(--color-surface)] text-[var(--color-primary)] shadow-[3px_3px_0px_#18181A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#18181A] transition-all duration-150"
            style={{
              minWidth: "44px",
              minHeight: "44px",
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
            className="md:hidden overflow-y-auto max-h-[calc(100vh-70px)]"
            style={{
              background: "var(--nav-bg)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "2px solid var(--neutral-900)",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-3">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl sm:text-3xl font-bold tracking-tighter py-1 transition-colors duration-200"
                    style={{
                      color: isActive ? "var(--color-primary)" : "var(--color-text)",
                      opacity: isActive ? 1 : 0.6
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--color-primary)";
                      el.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = isActive ? "var(--color-primary)" : "var(--color-text)";
                      el.style.opacity = isActive ? "1" : "0.6";
                    }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}

              <div className="pt-6 mt-2 flex items-center gap-3" style={{ borderTop: "2px solid var(--neutral-900)" }}>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[12px] font-bold tracking-widest border-2 border-[var(--neutral-900)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-[3px_3px_0px_#18181A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#18181A] transition-all duration-150"
                >
                  <Github className="w-4 h-4 animate-none" /> GitHub
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 flex items-center justify-center py-3 rounded-xl text-[12px] font-bold tracking-widest border-2 border-[var(--neutral-900)] bg-[var(--color-primary)] text-white shadow-[3px_3px_0px_#18181A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#18181A] transition-all duration-150"
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
