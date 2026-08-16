"use client";

import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Award } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-24 md:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-12 gap-6 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-3">Credentials</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-text tracking-tight">
                Certifications.
              </h2>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.certificates.map((cert, idx) => {
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="h-full"
                >
                  <TiltCard className="h-full">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bento-card p-6 flex flex-col justify-between h-full group block cursor-pointer"
                    >
                      <div className="bento-glow" />

                      <div className="relative z-10">
                        {/* Header: Issuer Logo / Icon & Date */}
                        <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-text-muted group-hover:text-white transition-colors">
                            <Award className="w-5 h-5" />
                          </div>
                          <span className="font-mono text-[10px] text-text-muted font-semibold tracking-wider">
                            {cert.date}
                          </span>
                        </div>

                        {/* Content */}
                        <h3 className="font-display font-semibold text-text text-lg group-hover:text-white transition-colors leading-snug mb-1">
                          {cert.title}
                        </h3>
                        
                        {/* Issuer label */}
                        <span className="font-sans text-xs text-text-muted tracking-wider block font-medium mt-1">
                          Issued by {cert.issuer}
                        </span>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-end mt-8 relative z-10">
                        <span className="flex items-center gap-1.5 font-mono text-[10px] text-text-muted group-hover:text-white transition-colors uppercase font-bold tracking-wider">
                          Verify Credential <ExternalLink className="w-3.5 h-3.5" />
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
