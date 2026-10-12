"use client";

import { portfolioData } from "@/data/portfolio";
import { ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

export const Certificates = () => {
  const getIssuerBadge = (issuer: string) => {
    switch (issuer.toLowerCase()) {
      case "cisco":
        return {
          bg: "bg-[#407899]/15 text-[#407899] border-[#407899]/30",
        };
      case "red hat":
        return {
          bg: "bg-[#de6449]/15 text-[#de6449] border-[#de6449]/30",
        };
      case "aws":
        return {
          bg: "bg-[#791e94]/15 text-[#791e94] border-[#791e94]/30",
        };
      case "udemy":
      default:
        return {
          bg: "bg-[#41d3bd]/20 text-[#177f70] border-[#41d3bd]/40",
        };
    }
  };

  return (
    <section id="certificates" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 gap-4 border-b border-[#407899]/18">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="section-badge">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#177f70]" />
                  Credentials
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#191424] tracking-tight">
                Verified Certifications.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4b6272] max-w-md font-light leading-relaxed">
              Accredited milestones across cloud engineering, Linux systems administration, and core programming languages.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.certificates.map((cert, idx) => {
              const badge = getIssuerBadge(cert.issuer);

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="h-full"
                >
                  <TiltCard className="h-full">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bento-card p-6 flex flex-col justify-between h-full group block cursor-pointer hover:border-[#791e94]/30 transition-all duration-300"
                    >
                      <div className="bento-glow" />

                      <div className="relative z-10">
                        {/* Header: Issuer Logo / Icon & Date */}
                        <div className="flex justify-between items-center pb-4 mb-4 border-b border-[#407899]/12">
                          <div className="flex items-center gap-2">
                            <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border ${badge.bg}`}>
                              {cert.issuer}
                            </span>
                          </div>
                          <span className="font-mono text-xs text-[#4b6272] font-medium">
                            {cert.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display font-semibold text-[#191424] text-lg group-hover:text-[#791e94] transition-colors leading-snug mb-2">
                          {cert.title}
                        </h3>
                        
                        {/* Verification Note */}
                        <div className="flex items-center gap-1.5 text-xs text-[#4b6272] font-normal mt-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#41d3bd]" />
                          <span>Official Accredited Credential</span>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#407899]/12 relative z-10 text-xs font-medium">
                        <span className="text-[#4b6272]/70 text-[11px] font-mono">Credly / Issuer</span>
                        <span className="inline-flex items-center gap-1 font-mono text-xs text-[#791e94] group-hover:translate-x-0.5 transition-transform font-semibold">
                          Verify <ExternalLink className="w-3 h-3 text-[#791e94]" />
                        </span>
                      </div>
                    </a>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
