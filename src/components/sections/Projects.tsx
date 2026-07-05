"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = portfolioData.projects;

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-bg relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-12 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">Portfolio</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">
                Featured Projects.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-text-muted leading-relaxed">
              A curated directory of software systems spanning Move smart contracts, Flutter modules, NLP AI workflows, and Express backends.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-primary glass-primary-hover p-6 flex flex-col justify-between h-full group relative overflow-hidden"
                >
                  {/* Glowing background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    {/* Top row: tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] tracking-wider uppercase bg-white/5 border border-white/10 text-text-muted px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-text text-lg sm:text-xl mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions (source code / live demo links) */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto relative z-10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary !h-8 !px-3 !text-[11px] flex-1"
                      >
                        <Github className="w-3.5 h-3.5" /> Source
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary !h-8 !px-3 !text-[11px] flex-1"
                      >
                        Demo <ExternalLink className="w-3.5 h-3.5" />
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
