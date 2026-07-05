"use client";

import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Award } from "lucide-react";
import { motion } from "framer-motion";

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-20 md:py-28 bg-bg relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-12 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">Credentials</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">
                Certifications.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-text-muted leading-relaxed">
              Academic credentials and industry checkpoints verifying competencies across cloud architecture, security administration, and python development.
            </p>
          </div>

          {/* Grid Layout (Compact Glass Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.certificates.map((cert, idx) => {
              return (
                <motion.a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group glass-secondary glass-secondary-hover p-5 flex flex-col justify-between h-full cursor-pointer"
                >
                  <div>
                    {/* Header: Issuer Logo / Icon & Date */}
                    <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent group-hover:text-primary transition-colors">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[10px] text-text-muted">
                        {cert.date}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-semibold text-text text-base group-hover:text-accent transition-colors leading-snug mb-1">
                      {cert.title}
                    </h3>
                    
                    {/* Issuer label */}
                    <span className="font-sans text-xs text-text-muted uppercase tracking-wider block font-medium">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-end border-t border-white/10 mt-6 pt-3">
                    <span className="flex items-center gap-1 font-mono text-[10px] text-text-muted group-hover:text-accent transition-colors uppercase font-medium">
                      verify <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
