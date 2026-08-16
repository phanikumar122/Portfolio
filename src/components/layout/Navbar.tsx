"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Code2, FolderGit2, Trophy, Award, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Magnetic } from "@/components/ui/Magnetic";

const navLinks = [
  { name: "Home",         href: "#home",         icon: Home },
  { name: "Skills",       href: "#skills",       icon: Code2 },
  { name: "Projects",     href: "#projects",     icon: FolderGit2 },
  { name: "Hackathons",   href: "#hackathons",   icon: Trophy },
  { name: "Certificates", href: "#certificates", icon: Award },
  { name: "Contact",      href: "#contact",      icon: Mail },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // stricter margin to detect active section in middle of screen
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

    const sectionIds = ["home", "skills", "projects", "hackathons", "certificates", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[100] px-2 sm:px-4 w-full max-w-max">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
        className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-full border border-white/10 bg-surface/70 backdrop-blur-xl shadow-2xl overflow-x-auto no-scrollbar max-w-[95vw] sm:max-w-none"
      >
        {navLinks.map((item, idx) => {
          const isActive = activeSection === item.href.slice(1);
          const Icon = item.icon;

          return (
            <Magnetic key={item.name}>
              <Link
                href={item.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-colors duration-300 flex-shrink-0 ${
                  isActive ? "text-white" : "text-text-muted hover:text-white"
                }`}
              >
                {/* Active Background */}
                {isActive && (
                  <motion.div
                    layoutId="dockActiveBg"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/10 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                <Icon className="w-5 h-5" />

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      className="absolute -top-10 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 backdrop-blur-md text-xs font-mono font-medium text-white shadow-xl whitespace-nowrap pointer-events-none"
                    >
                      {item.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            </Magnetic>
          );
        })}

        <div className="w-[1px] h-8 bg-white/10 mx-1" /> {/* Divider */}

        {/* Socials */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <Magnetic>
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-text-muted hover:text-white hover:bg-white/5 transition-all"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-text-muted hover:text-white hover:bg-white/5 transition-all"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </nav>
  );
};
