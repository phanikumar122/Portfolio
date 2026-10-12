"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 sm:py-12 bg-[#fffff2] border-t border-[#407899]/18 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-7 h-7 rounded-lg bg-[#791e94] text-white font-mono font-bold text-xs flex items-center justify-center border border-[#41d3bd]/30 shadow-xs">
                  PK
                </span>
                <span className="font-display font-bold text-lg text-[#191424]">
                  {portfolioData.name}
                </span>
              </div>
              <p className="text-xs text-[#4b6272] font-normal max-w-sm">
                Engineering high-performance applications with robust architecture and modern UI/UX design.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#407899]/25 bg-white hover:bg-[#fffff2] text-[#407899] hover:text-[#791e94] flex items-center justify-center transition-colors shadow-xs"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#407899]/25 bg-white hover:bg-[#fffff2] text-[#407899] hover:text-[#791e94] flex items-center justify-center transition-colors shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-lg border border-[#407899]/25 bg-white hover:bg-[#fffff2] text-[#407899] hover:text-[#791e94] flex items-center justify-center transition-colors ml-1 shadow-xs"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="w-full border-t border-[#407899]/15 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs font-mono text-[#4b6272]">
            <span>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#41d3bd]" />
              <span>Available for hire &middot; Remote / Hybrid</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
