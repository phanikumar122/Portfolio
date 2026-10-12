"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "projects", "skills", "hackathons", "certificates", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3.5 sm:pt-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-5xl rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? "bg-[#fffff2]/90 backdrop-blur-xl border-[#407899]/25 shadow-lg shadow-[#791e94]/5 py-2.5 px-4 sm:px-5"
            : "bg-[#fffff2]/75 backdrop-blur-md border-[#407899]/20 shadow-xs py-3 px-4 sm:px-5"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 font-display font-bold text-sm text-[#191424] hover:opacity-85 transition-opacity shrink-0"
          >
            <div className="w-8 h-8 rounded-xl bg-[#791e94] text-white flex items-center justify-center text-xs font-mono font-bold tracking-tight shadow-sm border border-[#41d3bd]/30">
              PK
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[#191424] tracking-tight text-xs sm:text-sm leading-tight">
                Phani Kumar
              </span>
              <span className="text-[10px] text-[#407899] font-mono tracking-wider hidden sm:block">
                Technical Engineer
              </span>
            </div>
          </Link>

          {/* Center Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-0.5 bg-white/80 p-1 rounded-xl border border-[#407899]/18">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs rounded-lg transition-colors duration-200 ${
                    isActive ? "text-[#791e94] font-semibold" : "text-[#4b6272] hover:text-[#791e94] font-medium"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#791e94]/10 rounded-lg shadow-xs border border-[#791e94]/20 -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">

            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-1">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#407899] hover:text-[#791e94] hover:bg-[#41d3bd]/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#407899] hover:text-[#791e94] hover:bg-[#41d3bd]/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-[#791e94] hover:bg-[#62157a] text-white text-xs font-medium px-3.5 py-1.5 rounded-xl transition-all shadow-xs shadow-[#791e94]/25"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg text-[#407899] hover:bg-[#41d3bd]/10 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden pt-3 mt-2 border-t border-[#407899]/20"
            >
              <div className="flex flex-col gap-1 pb-2">
                {navLinks.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive
                          ? "bg-[#791e94]/10 font-semibold text-[#791e94]"
                          : "text-[#4b6272] hover:bg-[#41d3bd]/10 hover:text-[#791e94]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <div className="flex items-center gap-2 pt-2 mt-1 border-t border-[#407899]/15">
                  <a
                    href={portfolioData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 text-center text-xs font-mono text-[#407899] bg-white rounded-md border border-[#407899]/20"
                  >
                    GitHub
                  </a>
                  <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 text-center text-xs font-mono text-[#407899] bg-white rounded-md border border-[#407899]/20"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};
