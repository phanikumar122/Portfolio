"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, ExternalLink, Trophy, Award } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

type Hackathon = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  github?: string;
  certificate?: string;
  live?: string;
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
      className="py-24 md:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-12 gap-6 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-3">Achievements</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-text tracking-tight">
                Hackathons & Awards.
              </h2>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(250px,auto)]">
            {hackList.map((hack, idx) => {
              const tags = getTechTags(hack.id);
              return (
                <motion.div
                  key={hack.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <TiltCard className="h-full">
                    <div className="bento-card p-8 flex flex-col justify-between group h-full">
                      <div className="bento-glow" />

                      <div className="relative z-10">
                        {/* Header: Date, Subtitle */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                          <div className="flex items-center gap-3">
                            <Trophy className="w-4 h-4 text-white" />
                            <span className="font-mono text-[10px] tracking-wider uppercase text-text-muted font-semibold">
                              {hack.subtitle}
                            </span>
                          </div>
                          <span className="font-mono text-xs text-text-muted font-bold">
                            {hack.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display font-semibold text-text text-2xl mb-3 tracking-tight group-hover:text-white transition-colors">
                          {hack.title}
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed mb-6 font-light">
                          {hack.description}
                        </p>

                        {/* Tech Chips */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] tracking-wider uppercase bg-surface border border-white/10 text-text-muted px-2.5 py-1 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4 mt-auto relative z-10">
                        {hack.github && (
                          <a
                            href={hack.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                          >
                            <Github className="w-4 h-4" /> Code
                          </a>
                        )}
                        {hack.certificate && (
                          <a
                            href={hack.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                          >
                            <Award className="w-4 h-4" /> Certificate
                          </a>
                        )}
                        {hack.live && (
                          <a
                            href={hack.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                          >
                            <ExternalLink className="w-4 h-4" /> Live
                          </a>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
