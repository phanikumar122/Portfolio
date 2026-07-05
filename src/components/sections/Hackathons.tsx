"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, Award, Trophy } from "lucide-react";
import { motion } from "framer-motion";

type Hackathon = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  github?: string;
  link?: string;
};

export const Hackathons = () => {
  const hackList = (portfolioData.hackathons || []) as Hackathon[];

  const getTechTags = (id: number): string[] => {
    if (id === 1) return ["C", "Algorithms", "Optimization"];
    if (id === 2) return ["Flutter", "IoT", "Bluetooth telemetry"];
    if (id === 3) return ["NLP", "Python", "RoBERTa", "AI"];
    if (id === 4) return ["Blockchain", "Move", "Aptos", "Web3"];
    return ["Hackathon", "Engineering"];
  };

  return (
    <section
      id="hackathons"
      className="py-20 md:py-28 bg-bg relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-12 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">Achievements</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">
                Hackathons & Awards.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-text-muted leading-relaxed">
              Algorithmic build sessions, Move blockchain events, and embedded IoT prototype challenges.
            </p>
          </div>

          {/* Grid Layout (Modern glass cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackList.map((hack, idx) => {
              const tags = getTechTags(hack.id);
              return (
                <motion.div
                  key={hack.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-primary glass-primary-hover p-6 flex flex-col justify-between h-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Header: Date, Subtitle */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-accent" />
                        <span className="font-mono text-[10px] tracking-wider uppercase text-text-muted font-medium">
                          {hack.subtitle}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-text-muted font-bold">
                        {hack.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-text text-lg mb-2">
                      {hack.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                      {hack.description}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] tracking-wider uppercase bg-white/5 border border-white/10 text-text-muted px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10 relative z-10">
                    {hack.github && (
                      <a
                        href={hack.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary !h-8 !px-3 !text-[11px] flex-1"
                      >
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>
                    )}
                    {hack.link && (
                      <a
                        href={hack.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !h-8 !px-3 !text-[11px] flex-1"
                      >
                        Certificate <Award className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
