"use client";

import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { MaskText } from "@/components/ui/MaskText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Projects = () => {
  const projects = portfolioData.projects;

  // Grouping project IDs manually to establish premium visual hierarchy
  const featuredProject = projects.find((p) => p.id === 1); // EduConnect
  const majorProjects = projects.filter((p) => [2, 4].includes(p.id)); // Skill Tern, Syllabi-AI
  const standaloneMajorProject = projects.find((p) => p.id === 5); // TruthLens (SRM Hackathon Win)
  const standaloneHardwareProject = projects.find((p) => p.id === 7); // Smart Hand Rehab
  const minorProjects = projects.filter((p) => [3, 6].includes(p.id)); // ToDo App, Decentralized Network

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 right-0 pointer-events-none" style={{ width: "clamp(150px,30vw,400px)", height: "clamp(150px,30vw,400px)", background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 65%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-1/4 left-0 pointer-events-none" style={{ width: "clamp(120px,25vw,350px)", height: "clamp(120px,25vw,350px)", background: "radial-gradient(ellipse, var(--blob-2) 0%, transparent 65%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <ScrollReveal className="flex flex-col gap-4 mb-10 sm:mb-14">
            <div className="flex items-center gap-4">
              <span className="section-line" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--color-primary)" }}>PORTFOLIO</p>
            </div>
            <h2
              className="font-bold tracking-tighter"
              style={{ color: "var(--color-text)", fontSize: "clamp(2rem, 7vw, 5.5rem)" }}
            >
              <MaskText>Curated Projects.</MaskText>
            </h2>
          </ScrollReveal>

          {/* ── UNIFIED LAYOUT GRID (6-Column Grid System) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-8">
            {featuredProject && (
              <div className="col-span-1 lg:col-span-6">
                <ProjectCard project={featuredProject} idx={0} layoutSize="featured" />
              </div>
            )}

            {majorProjects.map((project, idx) => (
              <div key={project.id} className="col-span-1 lg:col-span-3">
                <ProjectCard project={project} idx={idx + 1} layoutSize="major" />
              </div>
            ))}

            {standaloneMajorProject && (
              <div className="col-span-1 lg:col-span-6">
                <ProjectCard project={standaloneMajorProject} idx={3} layoutSize="featured" />
              </div>
            )}

            {standaloneHardwareProject && (
              <div className="col-span-1 lg:col-span-6">
                <ProjectCard project={standaloneHardwareProject} idx={4} layoutSize="featured" />
              </div>
            )}

            {/* Additional Works Section Divider */}
            <div className="col-span-1 lg:col-span-6 mt-4">
              <div className="flex items-center gap-3 mb-2 border-b border-[var(--color-border)] pb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--color-accent)]">Additional Works</span>
              </div>
            </div>

            {minorProjects.map((project, idx) => (
              <div key={project.id} className="col-span-1 md:col-span-3 lg:col-span-2">
                <ProjectCard project={project} idx={idx + 5} layoutSize="minor" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
