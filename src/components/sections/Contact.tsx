"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Contact = () => {
  // cardVariants removed

  const channels = [
    {
      name: "Gmail",
      value: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
      description: "Send a direct message payload to my official inbox.",
      actionText: "Send Email",
      icon: <Mail className="w-5 h-5" />,
      colorClass: "text-red-600",
      bgClass: "bg-red-50",
      borderClass: "border-red-200/60",
      glowClass: "rgba(239, 68, 68, 0.03)",
    },
    {
      name: "GitHub",
      value: "phanikumar122",
      href: portfolioData.github,
      description: "Inspect source repositories, Move/Flutter modules, and projects.",
      actionText: "Explore Repos",
      icon: <Github className="w-5 h-5" />,
      colorClass: "text-indigo-650",
      bgClass: "bg-indigo-50",
      borderClass: "border-indigo-200/60",
      glowClass: "rgba(99, 102, 241, 0.03)",
    },
    {
      name: "LinkedIn",
      value: "Phani Kumar",
      href: portfolioData.linkedin,
      description: "Establish professional connection on global ecosystems.",
      actionText: "Connect Profile",
      icon: <Linkedin className="w-5 h-5" />,
      colorClass: "text-blue-600",
      bgClass: "bg-blue-50",
      borderClass: "border-blue-200/60",
      glowClass: "rgba(59, 130, 246, 0.03)",
    },
  ];

  return (
    <section
      id="contact"
      className="py-10 sm:py-16 md:py-20 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "clamp(300px, 60vw, 800px)",
          height: "clamp(200px, 40vw, 500px)",
          background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="section-line w-8" />
              <p
                className="text-[11px] font-bold uppercase tracking-[0.3em]"
                style={{ color: "var(--color-primary)" }}
              >
                CONNECTION
              </p>
              <span className="section-line w-8" />
            </div>
            <h2
              className="font-bold tracking-tighter mb-6"
              style={{ color: "var(--color-text)", fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.1 }}
            >
              Connect With <span className="italic glow-text">Me.</span>
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed font-medium text-neutral-500 dark:text-neutral-400"
            >
              Open for architectural consultation, backend logic engineering, and remote collaboration. Choose your preferred gateway below.
            </p>
          </ScrollReveal>

          {/* Symmetrical Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {channels.map((chan, idx) => (
              <motion.a
                key={chan.name}
                href={chan.href}
                target={chan.href.startsWith("mailto") ? undefined : "_blank"}
                rel={chan.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between p-5 sm:p-6 bg-white border border-neutral-200 rounded-2xl shadow-[var(--card-shadow)] hover:border-[var(--color-primary)]/30 hover:shadow-[var(--shadow-md)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                {/* Content */}
                <div>
                  <div className="flex justify-between items-center text-[8px] font-mono text-neutral-400 font-extrabold uppercase tracking-widest mb-4 border-b border-neutral-200 pb-2">
                    <span>GATEWAY SECURE</span>
                    <span>{chan.name}</span>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${chan.bgClass} ${chan.borderClass} ${chan.colorClass}`}
                    >
                      {chan.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-neutral-900 leading-snug">
                        {chan.name}
                      </h3>
                      <span className="text-[10px] font-mono font-bold text-neutral-500 block mt-0.5 truncate max-w-[200px] sm:max-w-[160px]">
                        {chan.value}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-550 leading-relaxed font-medium mb-6">
                    {chan.description}
                  </p>
                </div>

                {/* Footer action */}
                <div className="flex items-center justify-end pt-3 border-t border-neutral-200 mt-auto">
                  <span
                    className={`flex items-center gap-1.5 text-[9px] font-mono font-black uppercase tracking-wider ${chan.colorClass}`}
                  >
                    {chan.actionText} <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>

                {/* Custom hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${chan.glowClass} 100%)`,
                  }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
