"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

export const Projects = () => {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 gap-4 border-b border-[#407899]/18">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="section-badge">
                  <FolderGit2 className="w-3.5 h-3.5 text-[#791e94]" />
                  Portfolio
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#191424] tracking-tight">
                Featured Projects.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4b6272] max-w-md font-light leading-relaxed">
              Engineered digital applications spanning live AI tools, embedded medical rehabilitation, and collaborative EdTech platforms.
            </p>
          </div>

          {/* Responsive Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <TiltCard className="h-full">
                    <div className="bento-card p-7 flex flex-col justify-between group h-full">
                      <div className="bento-glow" />

                      {/* Card Content */}
                      <div className="relative z-10 flex-grow">
                        {/* Title */}
                        <h3 className="font-display font-bold text-xl text-[#191424] mb-2.5 tracking-tight group-hover:text-[#791e94] transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-xs sm:text-sm text-[#4b6272] leading-relaxed mb-5 font-normal">
                          {project.description}
                        </p>

                        {/* Tech Chips */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tech.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] tracking-wider uppercase bg-[#fffff2] border border-[#407899]/20 text-[#407899] px-2 py-0.5 rounded-md font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Bottom Actions */}
                      <div className="flex items-center justify-between gap-3 mt-auto relative z-10 pt-4 border-t border-[#407899]/15">
                        <div className="flex items-center gap-2.5">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#407899] hover:text-[#191424] bg-white hover:bg-[#fffff2] border border-[#407899]/25 px-2.5 py-1.5 rounded-lg transition-all"
                            >
                              <Github className="w-3.5 h-3.5" /> Source
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-[#791e94] hover:bg-[#62157a] px-3 py-1.5 rounded-lg shadow-xs shadow-[#791e94]/25 transition-all"
                            >
                              <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                            </a>
                          )}
                        </div>

                        <span className="text-[11px] font-mono text-[#407899]/60 font-semibold">
                          0{idx + 1}
                        </span>
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
