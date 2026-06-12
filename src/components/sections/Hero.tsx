"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, FileText, Sparkles, MapPin, Briefcase, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";


const FloatingOrb = ({
  size, top, left, delay, opacity,
}: {
  size: string; top: string; left: string; delay: number; opacity: number;
}) => (
  <motion.div
    animate={{ y: [0, -20, 0], opacity: [opacity * 0.55, opacity, opacity * 0.55], scale: [1, 1.08, 1] }}
    transition={{ duration: 7 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size, height: size, top, left,
      background: "radial-gradient(circle, var(--blob-1) 0%, transparent 70%)",
      filter: "blur(40px)",
    }}
  />
);

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center pt-16 pb-10 sm:pt-24 sm:pb-16 overflow-hidden"
    >
      <div id="about" className="absolute top-0 left-0 w-full h-0 pointer-events-none" aria-hidden="true" />
      {/* Cinematic glow layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute" style={{ top: "-5%", left: "-5%", width: "65%", height: "65%", background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div className="absolute" style={{ bottom: "-5%", right: "-5%", width: "55%", height: "55%", background: "radial-gradient(ellipse, var(--blob-2) 0%, transparent 65%)", filter: "blur(60px)" }} />
      </div>

      {/* Floating orbs — hidden on small screens */}
      <div className="hidden lg:block">
        <FloatingOrb size="180px" top="10%" left="3%"  delay={0} opacity={0.8} />
        <FloatingOrb size="120px" top="70%" left="5%"  delay={3} opacity={0.6} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* ── Two-column layout: text left, image right ── */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 sm:mb-7"
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-center leading-snug"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-primary)",
                  boxShadow: "0 0 24px var(--color-glow)",
                }}
              >
                <Sparkles className="w-3 h-3 shrink-0" />
                Phani Kumar
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="font-bold tracking-tighter mb-4 sm:mb-6 leading-[1.04]"
              style={{
                color: "var(--color-text)",
                fontSize: "clamp(2rem, 8vw, 4.5rem)",
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.25em]"
              >
                Technical
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.25em]"
              >
                Engineer
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.25em] text-[var(--color-primary)]"
              >
                &
              </motion.span>
              <br className="hidden sm:inline" />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="italic inline-block glow-text"
              >
                Creative Developer.
              </motion.span>
            </motion.h1>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2 mb-5 sm:mb-7 bg-neutral-100/60 px-3.5 py-1.5 rounded-lg border border-[#EFEFED] max-w-max"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--color-primary)" }} />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
                India · Available for Remote Work
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg mb-9 sm:mb-12 max-w-xl leading-relaxed font-medium"
              style={{ color: "var(--color-text-muted)" }}
            >
              {portfolioData.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2.5 px-8 rounded-2xl font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all duration-450 block"
                style={{
                  background: "var(--color-primary)",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 16px var(--color-glow-strong)",
                  height: "3.25rem",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--color-primary-mid)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--color-primary)";
                  el.style.transform = "translateY(0)";
                }}
              >
                View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 px-8 rounded-2xl font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all duration-450 block border border-[var(--color-primary)] text-[var(--color-primary)]"
                style={{
                  background: "transparent",
                  height: "3.25rem",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(37, 99, 235, 0.05)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.transform = "translateY(0)";
                }}
              >
                <FileText className="w-4 h-4" /> Download Resume
              </a>
            </motion.div>

            {/* Supporting Stat Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 sm:mt-12 grid grid-cols-2 gap-4 w-full max-w-sm"
            >
              {[
                { 
                  value: `${portfolioData.projects.length}+`, 
                  label: "Projects Built", 
                  icon: <Briefcase className="w-3.5 h-3.5 text-[var(--color-primary)]" /> 
                },
                { 
                  value: "4+", 
                  label: "Tech Stacks Mastered", 
                  icon: <Terminal className="w-3.5 h-3.5 text-[var(--color-accent)]" /> 
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center lg:items-start p-4 rounded-xl border border-[var(--color-border)] bg-[var(--card-bg-glass)] backdrop-blur-xs shadow-[var(--card-shadow)] transition-all duration-300 hover:shadow-[var(--shadow-md)] hover:border-[var(--color-primary)]/20 cursor-default"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-neutral-100/80 border border-neutral-200/50 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <span
                      className="text-2xl sm:text-3xl font-extrabold flex items-center gap-2"
                      style={{ color: "var(--color-text)" }}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)]"
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 flex items-center justify-center lg:-translate-y-12"
          >
            {/*
              Single relative wrapper — all badges are positioned relative to THIS,
              with padding so they never escape the column bounds.
            */}
            <div
              className="relative group cursor-default"
              style={{
                width: "clamp(200px, 45vw, 320px)",
                height: "clamp(200px, 45vw, 320px)",
                padding: "1rem",
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                const el = e.currentTarget.querySelector('.profile-container') as HTMLElement;
                if (el) el.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${y * -12}deg)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget.querySelector('.profile-container') as HTMLElement;
                if (el) el.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
              }}
            >
              {/* Outer delicate dashed tech line - rotates slowly */}
              <div 
                className="absolute inset-0 rounded-full border border-dashed border-[var(--color-primary)]/20 animate-[spin_60s_linear_infinite] pointer-events-none"
                style={{
                  margin: "0.25rem",
                }}
              />

              {/* Offset circular card background - depth effect */}
              <div 
                className="absolute inset-0 rounded-full border border-[var(--color-border)] pointer-events-none group-hover:translate-x-3.5 group-hover:translate-y-3.5 transition-transform duration-300 ease-saas"
                style={{
                  top: "1.25rem",
                  bottom: "0.75rem",
                  left: "0.75rem",
                  right: "-0.25rem",
                  background: "var(--color-bg)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                }}
              />

              {/* Main Circular Image Container */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-full overflow-hidden profile-container transition-transform duration-300 ease-out z-10 w-full h-full"
                style={{
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--card-shadow)",
                  background: "var(--color-surface)",
                  transformStyle: "preserve-3d",
                }}
              >
                <Image
                  src="/profile.png"
                  alt="Phani Kumar — Technical Engineer & Creative Developer"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, 320px"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
