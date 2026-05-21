"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Award, Shield, Code2 } from "lucide-react";
import { MaskText } from "@/components/ui/MaskText";

const issuerMeta: Record<string, { color: string; bg: string; border: string; icon: React.ReactNode }> = {
  Cisco: {
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    icon: <Shield className="w-4 h-4" />,
  },
  "Red Hat": {
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    icon: <Code2 className="w-4 h-4" />,
  },
  Udemy: {
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    icon: <Award className="w-4 h-4" />,
  },
};

const defaultMeta = {
  color: "text-indigo-500",
  bg: "bg-indigo-500/10",
  border: "border-indigo-500/20",
  icon: <Award className="w-4 h-4" />,
};

export const Certificates = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="certificates"
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-surface)",
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
          <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-4"
              >
                <span className="section-line" />
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.3em]"
                  style={{ color: "var(--color-primary)" }}
                >
                  ACCOLADES
                </p>
              </motion.div>
              <motion.h2
                className="font-bold tracking-tighter text-neutral-900 dark:text-neutral-100"
                style={{ fontSize: "clamp(2rem, 7vw, 5.5rem)" }}
              >
                <MaskText>Recognition. Verified.</MaskText>
              </motion.h2>
            </div>
            <p
              className="max-w-xs text-sm sm:text-base font-medium leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              Certified across networking, security, and development. Click any card to view the official credential.
            </p>
          </div>

          {/* Certificate Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioData.certificates.map((cert) => {
              const meta = issuerMeta[cert.issuer] ?? defaultMeta;
              return (
                <motion.a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  className="group relative flex flex-col justify-between p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm hover:border-neutral-400 dark:hover:border-neutral-600 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                >
                  {/* Top accent line */}
                  <div className="flex justify-between items-center text-[8px] font-mono text-neutral-400 dark:text-neutral-500 font-extrabold uppercase tracking-widest mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">
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
                      <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 leading-snug">
                        {cert.title}
                      </h3>
                      <span className={`text-[10px] font-mono font-bold block mt-0.5 ${meta.color}`}>
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  {/* Footer action */}
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-200 dark:border-neutral-800 mt-auto">
                    <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
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
                      background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.03) 100%)"
                    }}
                  />
                </motion.a>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
