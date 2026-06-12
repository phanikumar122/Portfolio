"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Award, Shield, Code2 } from "lucide-react";
import { MaskText } from "@/components/ui/MaskText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const issuerMeta: Record<string, { color: string; bg: string; border: string; icon: React.ReactNode }> = {
  Cisco: {
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200/60",
    icon: <Shield className="w-4 h-4" />,
  },
  "Red Hat": {
    color: "text-red-650",
    bg: "bg-red-50",
    border: "border-red-200/60",
    icon: <Code2 className="w-4 h-4" />,
  },
  Udemy: {
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200/60",
    icon: <Award className="w-4 h-4" />,
  },
  AWS: {
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200/60",
    icon: <Award className="w-4 h-4" />,
  },
};

const defaultMeta = {
  color: "text-indigo-600",
  bg: "bg-indigo-50",
  border: "border-indigo-200/60",
  icon: <Award className="w-4 h-4" />,
};

export const Certificates = () => {
  // cardVariants removed

  return (
    <section
      id="certificates"
      className="py-10 sm:py-16 md:py-20 relative overflow-hidden"
      style={{
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* Background Blobs */}
      <div
        className="absolute top-0 right-1/4 pointer-events-none"
        style={{
          width: "clamp(150px,28vw,380px)",
          height: "clamp(150px,28vw,380px)",
          background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 pointer-events-none"
        style={{
          width: "clamp(120px,22vw,320px)",
          height: "clamp(120px,22vw,320px)",
          background: "radial-gradient(ellipse, var(--blob-2) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <ScrollReveal className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="section-line" />
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.3em]"
                  style={{ color: "var(--color-primary)" }}
                >
                  ACCOLADES
                </p>
              </div>
              <h2
                className="font-bold tracking-tighter"
                style={{ color: "var(--color-text)", fontSize: "clamp(2rem, 7vw, 5.5rem)" }}
              >
                <MaskText>Recognition. Verified.</MaskText>
              </h2>
            </div>
            <p
              className="max-w-xs text-sm sm:text-base font-medium leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              Certified across networking, security, and development. Click any card to view the official credential.
            </p>
          </ScrollReveal>

          {/* Certificate Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {portfolioData.certificates.map((cert, idx) => {
              const meta = issuerMeta[cert.issuer] ?? defaultMeta;
              return (
                <motion.a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col justify-between p-5 sm:p-6 bg-white border border-neutral-200 rounded-2xl shadow-[var(--card-shadow)] hover:border-[var(--color-primary)]/30 hover:shadow-[var(--shadow-md)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                >
                  {/* Top accent line */}
                  <div className="flex justify-between items-center text-[8px] font-mono text-neutral-400 font-extrabold uppercase tracking-widest mb-4 border-b border-neutral-200 pb-2">
                    <span>CREDENTIAL #{String(cert.id).padStart(2, "0")}</span>
                    <span>{cert.date}</span>
                  </div>

                  {/* Issuer icon + title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${meta.bg} ${meta.border} ${meta.color}`}
                    >
                      {meta.icon}
                    </div>
                    <div className="leading-tight">
                      <h3 className="text-sm font-bold text-neutral-900 leading-snug">
                        {cert.title}
                      </h3>
                      <span className={`text-[10px] font-mono font-bold block mt-0.5 ${meta.color}`}>
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  {/* Footer action */}
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-200 mt-auto">
                    <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider text-neutral-400">
                      Verified · {cert.date}
                    </span>
                    <span
                      className={`flex items-center gap-1 text-[9px] font-mono font-black uppercase tracking-wider ${meta.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                    >
                      View <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Hover shimmer */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, transparent 40%, rgba(37,99,235,0.02) 100%)"
                    }}
                  />
                </motion.a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
