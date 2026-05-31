"use client";

import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { MaskText } from "@/components/ui/MaskText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Blobs */}
      <div className="absolute top-1/4 right-0 pointer-events-none" style={{ width: "clamp(150px,30vw,400px)", height: "clamp(150px,30vw,400px)", background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 65%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-1/4 left-0 pointer-events-none" style={{ width: "clamp(120px,25vw,350px)", height: "clamp(120px,25vw,350px)", background: "radial-gradient(ellipse, var(--blob-2) 0%, transparent 65%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <ScrollReveal className="mb-14 sm:mb-20">
            <div className="flex items-center gap-4 mb-5">
              <span className="section-line" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--color-text)" }}>Portfolio</p>
            </div>
            <h2
              className="font-bold tracking-tighter"
              style={{ color: "var(--color-text)", fontSize: "clamp(2rem, 7vw, 5.5rem)" }}
            >
              <MaskText>Curated Projects.</MaskText>
            </h2>
          </ScrollReveal>

          {/* Projects Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-10">
            {portfolioData.projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
