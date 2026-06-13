"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Layout, Cpu, Layers } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MaskText } from "@/components/ui/MaskText";
import { portfolioData } from "@/data/portfolio";

export const About = () => {
  const pillars = [
    {
      title: "Frontend Focus",
      icon: <Layout className="w-5 h-5 text-[var(--color-primary)]" />,
      description: "Crafting fluid, highly interactive, and responsive user interfaces using modern frameworks like React, Next.js, and Flutter. Focused on accessibility (WCAG AA+ contrast) and smooth Framer Motion micro-interactions.",
    },
    {
      title: "Backend Expertise",
      icon: <Layers className="w-5 h-5 text-[var(--color-accent)]" />,
      description: "Designing reliable architectures, distributed microservices, and secure APIs using Node.js, Express, and databases (MongoDB, MySQL, Firebase). Grounded in robust protocols including JWT authentication and secure session states.",
    },
    {
      title: "Emerging Tech Passion",
      icon: <Cpu className="w-5 h-5 text-neutral-500" />,
      description: "Integrating cutting-edge systems including NLP machine learning pipelines (RoBERTa), blockchain smart contracts (Move on Aptos), and embedded hardware/IoT devices with real-time Bluetooth telemetry.",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-1/3 left-0 pointer-events-none" style={{ width: "clamp(150px,30vw,350px)", height: "clamp(150px,30vw,350px)", background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-1/3 right-0 pointer-events-none" style={{ width: "clamp(120px,25vw,300px)", height: "clamp(120px,25vw,300px)", background: "radial-gradient(ellipse, var(--blob-2) 0%, transparent 65%)", filter: "blur(55px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollReveal className="flex flex-col gap-4 mb-10 sm:mb-14">
            <div className="flex items-center gap-4">
              <span className="section-line" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--color-primary)" }}>ABOUT ME</p>
            </div>
            <h2
              className="font-bold tracking-tighter"
              style={{ color: "var(--color-text)", fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
            >
              <MaskText>Engineering Meets Design.</MaskText>
            </h2>
          </ScrollReveal>
 
          {/* Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <p className="text-base sm:text-lg text-[var(--color-text)] leading-relaxed font-medium mb-6">
                  I am a Technical Engineer and Creative Developer dedicated to building high-performance, robust digital applications. By pairing clean code architecture with intentional user experience details, I bridge the gap between back-end infrastructure and modern frontend systems.
                </p>
                <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed mb-8">
                  Whether optimizing real-time web socket connections, training NLP classification pipelines, or creating modular UI assemblies, I focus on engineering solutions that scale. I thrive at the intersection of technical credibility, performance, and responsive design.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#projects"
                    className="btn-primary group"
                  >
                    Explore My Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={portfolioData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary group"
                  >
                    <FileText className="w-4 h-4" /> Download Resume
                  </a>
                </div>
              </ScrollReveal>
            </div>
 
            {/* Symmetrical Pillars */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {pillars.map((pillar, idx) => {
                const sectionName = pillar.title.toLowerCase().includes("frontend")
                  ? "FRONTEND FOCUS"
                  : pillar.title.toLowerCase().includes("backend")
                  ? "BACKEND EXPERTISE"
                  : "EMERGING TECH";

                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="card-elevated w-full relative overflow-hidden flex flex-col cursor-default"
                  >
                    <div className="p-6 flex-1 flex flex-col bg-white">
                      <div className="flex items-center gap-3.5 mb-3">
                        <div className="w-8 h-8 rounded-xl bg-white border-2 border-[var(--neutral-900)] flex items-center justify-center shadow-[2px_2px_0px_#18181A] shrink-0">
                          {pillar.icon}
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-[var(--color-text)] uppercase tracking-wider">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed font-medium">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
