"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-bg border-t border-white/10 relative overflow-hidden">
      {/* Footer background blob glow */}
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full filter blur-[120px] pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-md">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-6">Communications</span>
              <a
                href={`mailto:${portfolioData.email}`}
                className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text hover:text-white transition-colors tracking-tight block mb-4 break-all"
              >
                {portfolioData.email}
              </a>
              <p className="font-sans text-sm text-text-muted font-light leading-relaxed">
                Available for software engineering roles, cloud operational consultations, and Web3/AI remote integrations.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">Connect</span>
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-sm text-text-muted hover:text-white transition-colors group"
              >
                <Github className="w-4 h-4 group-hover:text-white" /> GitHub
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-sm text-text-muted hover:text-white transition-colors group"
              >
                <Linkedin className="w-4 h-4 group-hover:text-white" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="w-full border-t border-white/10 my-6" />

          {/* Footnote */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-[10px] text-text-muted uppercase tracking-widest">
            <span>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</span>
            <span>Location: India · Availability: Remote / Hybrid</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
