"use client";

import React from "react";

export const TechMarquee = () => {
  const techs = [
    "React",
    "Flutter",
    "Node.js",
    "Python",
    "AWS",
    "Linux",
    "MongoDB",
    "MySQL",
    "Android SDK",
    "Docker",
    "Git",
    "Microservices",
    "JWT",
    "Security",
    "Real-time Systems",
    "3-Tier Architecture",
    "IaC"
  ];

  // Triplicate array to guarantee no gaps on ultra-wide screens
  const displayTechs = [...techs, ...techs, ...techs];

  return (
    <div className="relative w-full py-6 sm:py-8 overflow-hidden border-t border-b border-[var(--color-border)] bg-[#0A0A0A]/30 backdrop-blur-xs z-10 select-none">
      {/* Edge vignettes for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-20 pointer-events-none" />

      <div className="flex w-max">
        <div className="flex animate-marquee gap-8 sm:gap-14 items-center whitespace-nowrap">
          {displayTechs.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-4 sm:gap-7">
              <span className="text-lg sm:text-2xl font-mono font-black uppercase tracking-[0.2em] text-[var(--color-text-muted)] opacity-20 hover:opacity-75 transition-opacity duration-300">
                {tech}
              </span>
              <span className="text-[var(--color-text-muted)] opacity-10 text-base sm:text-xl font-bold select-none">
                {"//"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
