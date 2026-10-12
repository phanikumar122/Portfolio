"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, Award, Trophy } from "lucide-react";
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
    if (id === 1) return ["C Language", "Data Structures", "Algorithmic Optimization"];
    if (id === 2) return ["Flutter", "IoT Embedded", "Bluetooth Telemetry", "Hardware"];
    return ["Hackathon", "Engineering"];
  };

  return (
    <section id="hackathons" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 gap-4 border-b border-[#407899]/18">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="section-badge">
                  <Trophy className="w-3.5 h-3.5 text-[#de6449]" />
                  Recognition
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#191424] tracking-tight">
                Hackathons & Awards.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4b6272] max-w-md font-light leading-relaxed">
              Competitive coding bootcamps and department innovation initiatives where technical rigor met rapid execution.
            </p>
          </div>

          {/* Symmetrical 2-Column Award Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {hackList.map((hack, idx) => {
              const tags = getTechTags(hack.id);
              return (
                <motion.div
                  key={hack.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <TiltCard className="h-full">
                    <div className="bento-card p-7 sm:p-8 flex flex-col justify-between group h-full">
                      <div className="bento-glow" />

                      <div className="relative z-10 flex-grow">
                        {/* Title */}
                        <h3 className="font-display font-bold text-2xl text-[#191424] mb-3 tracking-tight group-hover:text-[#791e94] transition-colors">
                          {hack.title}
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-sm sm:text-base text-[#4b6272] leading-relaxed mb-6 font-normal">
                          {hack.description}
                        </p>

                        {/* Tech Chips */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] tracking-wider uppercase bg-[#fffff2] border border-[#407899]/20 text-[#407899] px-2.5 py-1 rounded-md font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 mt-auto relative z-10 pt-5 border-t border-[#407899]/15">
                        {hack.github && (
                          <a
                            href={hack.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#407899] hover:text-[#191424] bg-white hover:bg-[#fffff2] border border-[#407899]/25 px-3.5 py-1.5 rounded-lg transition-all"
                          >
                            <Github className="w-3.5 h-3.5" /> View Project
                          </a>
                        )}
                        {hack.certificate && (
                          <a
                            href={hack.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 text-xs font-medium border px-3.5 py-1.5 rounded-lg transition-all ${
                              hack.id === 1
                                ? "text-[#de6449] bg-[#de6449]/12 hover:bg-[#de6449]/20 border-[#de6449]/35"
                                : "text-[#167d6e] bg-[#41d3bd]/15 hover:bg-[#41d3bd]/25 border-[#41d3bd]/35"
                            }`}
                          >
                            <Award className="w-3.5 h-3.5" /> Certificate
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
