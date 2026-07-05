"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="py-16 bg-bg border-t border-white/10 relative overflow-hidden"
    >
      {/* Footer background blob glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full filter blur-[100px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">
          
          <span className="font-sans text-xs uppercase tracking-widest text-accent">Communications</span>

          {/* Large clickable email */}
          <a
            href={`mailto:${portfolioData.email}`}
            className="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-text hover:text-accent transition-colors tracking-tight block max-w-full truncate"
          >
            {portfolioData.email}
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6 font-sans text-xs text-text-muted">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-text transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-text transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>

          <div className="w-full border-t border-white/10 my-2" />

          {/* Footnote */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 font-sans text-[10px] text-text-muted uppercase tracking-wider">
            <span>&copy; {new Date().getFullYear()} Phani Kumar. All rights reserved.</span>
            <span>Location: India · Availability: Remote / Hybrid</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
