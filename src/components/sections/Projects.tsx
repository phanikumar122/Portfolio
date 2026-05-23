"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { MaskText } from "@/components/ui/MaskText";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-36 lg:py-48 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Blobs */}
      <div className="absolute top-1/4 right-0 pointer-events-none" style={{ width: "clamp(150px,30vw,400px)", height: "clamp(150px,30vw,400px)", background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 65%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-1/4 left-0 pointer-events-none" style={{ width: "clamp(120px,25vw,350px)", height: "clamp(120px,25vw,350px)", background: "radial-gradient(ellipse, var(--blob-2) 0%, transparent 65%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-14 sm:mb-24">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-4 mb-5">
              <span className="section-line" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--color-text)" }}>Portfolio</p>
            </motion.div>
            <motion.h2
              className="font-bold tracking-tighter"
              style={{ color: "var(--color-text)", fontSize: "clamp(2rem, 7vw, 5.5rem)" }}
            >
              <MaskText>Curated Projects.</MaskText>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {portfolioData.projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
