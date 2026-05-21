"use client";

import { Github, Linkedin, Mail, Zap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Magnetic } from "@/components/ui/Magnetic";

export const Footer = () => {
  const socials = [
    { href: portfolioData.github, icon: <Github className="w-[1.1rem] h-[1.1rem]" />, label: "GitHub" },
    { href: portfolioData.linkedin, icon: <Linkedin className="w-[1.1rem] h-[1.1rem]" />, label: "LinkedIn" },
    { href: `mailto:${portfolioData.email}`, icon: <Mail className="w-[1.1rem] h-[1.1rem]" />, label: "Email" },
  ];

  return (
    <footer
      className="py-14 sm:py-20 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      {/* Subtle glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-40 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3 items-center sm:items-start text-center sm:text-left">
            <div className="flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: "var(--color-text)" }}>
                Phani
              </span>
              <span
                className="text-xl sm:text-2xl font-bold tracking-tight italic"
                style={{ color: "var(--color-text)" }}
              >
                Kumar.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-3 h-3" style={{ color: "var(--color-text)" }} />
              <p className="text-[10px] uppercase tracking-[0.18em] font-semibold" style={{ color: "var(--color-text-muted)" }}>
                Precision Engineered Digital Artifacts
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <Magnetic key={s.label} strength={0.35}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 block"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--color-primary)";
                    el.style.borderColor = "var(--color-primary-mid)";
                    el.style.boxShadow = "0 0 20px var(--color-glow)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--color-text-muted)";
                    el.style.borderColor = "var(--color-border)";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
          <p style={{ opacity: 0.6 }}>© {new Date().getFullYear()} Phani Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
