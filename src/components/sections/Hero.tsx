"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, FileText, Sparkles, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { TextScramble } from "@/components/ui/TextScramble";

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
      className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-10 sm:pt-24 sm:pb-16 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
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
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-primary)",
                  boxShadow: "0 0 24px var(--color-glow)",
                }}
              >
                <Sparkles className="w-3 h-3 shrink-0" />
                <TextScramble text="Technical Engineer & Creative Developer" delay={0.15} />
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="font-bold tracking-tighter mb-4 sm:mb-6 leading-[1.04]"
              style={{
                color: "var(--color-text)",
                fontSize: "clamp(2rem, 10vw, 5.5rem)",
              }}
            >
              {["Hi,", "I'm"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="italic inline-block glow-text"
              >
                <TextScramble text="Phani." delay={0.6} />
              </motion.span>
            </motion.h1>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2 mb-5 sm:mb-7"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--color-primary)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
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
              Engineering high-performance digital products into seamless, immersive ecosystems. Full-stack developer with a passion for clean architecture.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2.5 px-7 sm:px-9 rounded-2xl font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all duration-400 block"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-bg)",
                  boxShadow: "0 4px 16px var(--color-glow)",
                  height: "3.25rem",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--color-primary-mid)";
                  el.style.boxShadow = "0 8px 24px var(--color-glow-strong)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--color-primary)";
                  el.style.boxShadow = "0 4px 16px var(--color-glow)";
                  el.style.transform = "translateY(0)";
                }}
              >
                Explore Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="group flex items-center justify-center gap-2.5 px-7 sm:px-9 rounded-2xl font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all duration-400 block"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                  height: "3.25rem",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-text)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-border)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <Mail className="w-4 h-4" /> Get In Touch
              </a>

              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 px-7 sm:px-9 rounded-2xl font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all duration-400 block animate-ease"
                style={{ color: "var(--color-text-muted)", height: "3.25rem" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--color-text)"; el.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "var(--color-text-muted)"; el.style.transform = "translateY(0)"; }}
              >
                <FileText className="w-4 h-4" /> Resume
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 sm:mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-y-4"
              style={{ gap: "0" }}
            >
              {[
                { value: `${portfolioData.projects.length}+`, label: "Projects" },
                { value: `${portfolioData.skills.length}+`, label: "Tech Stacks" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <div className="flex flex-col items-center lg:items-start px-4 sm:px-5 first:pl-0">
                    <span
                      className="text-xl sm:text-2xl font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.16em]"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                  {i < 1 && (
                    <div
                      className="w-px self-stretch mx-1"
                      style={{ background: "var(--color-border)", minHeight: "2rem" }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            {/*
              Single relative wrapper — all badges are positioned relative to THIS,
              with padding so they never escape the column bounds.
            */}
            <div
              className="relative"
              style={{
                width: "clamp(180px, 60vw, 320px)",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                const el = e.currentTarget.querySelector('.profile-container') as HTMLElement;
                if (el) el.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget.querySelector('.profile-container') as HTMLElement;
                if (el) el.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
              }}
            >
              {/* Glow ring — behind the image */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: "conic-gradient(from 0deg, var(--color-primary), var(--color-border), transparent, transparent, var(--color-primary))",
                  opacity: 0.12,
                  filter: "blur(2px)",
                  top: "2.5rem",
                  bottom: "2.5rem",
                }}
              />
              {/* Ambient glow */}
              <div
                className="absolute pointer-events-none animate-glow-pulse"
                style={{
                  inset: "2.5rem 0",
                  background: "radial-gradient(circle, var(--color-glow) 0%, transparent 65%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden profile-container transition-transform duration-200 ease-out mx-auto"
                style={{
                  width: "100%",
                  maxWidth: "280px",
                  height: "clamp(240px, 60vw, 360px)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 0 80px var(--color-glow)",
                  background: "var(--color-surface)",
                }}
              >
                <Image
                  src="/profile.png"
                  alt="Phani Kumar — Technical Engineer & Creative Developer"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 60vw, (max-width: 1200px) 36vw, 400px"
                />
                {/* Bottom fade */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                  style={{ background: "linear-gradient(to top, var(--color-surface) 0%, transparent 100%)", opacity: 0.22 }}
                />
              </motion.div>

              {/* Badge — top-right, inside the wrapper padding space */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute right-0 flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{
                  top: "0.5rem",
                  background: "var(--card-bg)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.12), 0 0 16px var(--color-glow)",
                  whiteSpace: "nowrap",
                }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse shrink-0" style={{ background: "#22C55E" }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
                  Open to Work
                </span>
              </motion.div>



            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
