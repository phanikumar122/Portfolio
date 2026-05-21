"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;
    const words = textRef.current.querySelectorAll(".word");
    if (words.length === 0) return;
    const tl = gsap.timeline({
      scrollTrigger: { trigger: containerRef.current, start: "top 80%", end: "bottom 40%", scrub: true },
    });
    tl.to(words, { opacity: 1, stagger: 0.1, ease: "none" });
    return () => { if (tl.scrollTrigger) tl.scrollTrigger.kill(); tl.kill(); };
  }, []);

  const descriptionWords = portfolioData.description.split(" ");

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-36 lg:py-48 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Accent blob */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:block"
        style={{ width: "clamp(200px,35vw,500px)", height: "clamp(200px,35vw,500px)", background: "radial-gradient(ellipse, var(--blob-2) 0%, transparent 65%)", filter: "blur(70px)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="section-line" />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--color-text)" }}>
              The Vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-28 items-start">

            {/* Animated text */}
            <div className="lg:col-span-8">
              <p
                ref={textRef}
                className="font-bold leading-[1.08] tracking-tight"
                style={{ color: "var(--color-text)", fontSize: "clamp(1.6rem, 5vw, 4.5rem)" }}
              >
                {descriptionWords.map((word, i) => (
                  <span key={i} className="word inline-block mr-[0.22em] last:mr-0 transition-opacity duration-500" style={{ opacity: 0.08 }}>
                    {word}
                  </span>
                ))}
              </p>
            </div>

            {/* Stat cards */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5 w-full pt-2">
              {[
                { value: "12+", label: "Digital Works" },
                { value: "4+", label: "Toolsets" },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col items-center lg:items-start p-5 sm:p-8 lg:p-10 rounded-[1.25rem] transition-all duration-450 cursor-default"
                  style={{ background: "var(--card-bg)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--color-primary)"; el.style.boxShadow = "0 12px 30px rgba(0,0,0,0.04)"; el.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--card-border)"; el.style.boxShadow = "var(--card-shadow)"; el.style.transform = "translateY(0)"; }}
                >
                  <p
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 group-hover:scale-105 transition-transform duration-500 origin-left"
                    style={{ color: "var(--color-text)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold" style={{ color: "var(--color-text-muted)" }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
