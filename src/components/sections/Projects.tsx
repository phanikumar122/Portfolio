"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

export const Projects = () => {
  const projects = portfolioData.projects;

  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-12 gap-6 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-3">Portfolio</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-text tracking-tight">
                Featured Projects.
              </h2>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div className="bento-card p-8 flex flex-col justify-between group h-full">
                    <div className="bento-glow" />

                    <div className="relative z-10 flex-grow">
                      {/* Top row: tech tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] tracking-wider uppercase bg-surface border border-white/10 text-text-muted px-2.5 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="font-mono text-[10px] tracking-wider uppercase bg-surface border border-white/10 text-text-muted px-2.5 py-1 rounded-md">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-semibold text-text text-2xl mb-3 tracking-tight group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed mb-8 font-light">
                        {project.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-auto relative z-10 pt-4 border-t border-white/5">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-white transition-colors flex items-center gap-2 text-sm font-medium group/btn"
                        >
                          <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-white transition-colors flex items-center gap-2 text-sm font-medium group/btn"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
