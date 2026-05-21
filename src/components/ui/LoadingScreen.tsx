"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loading-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "var(--color-bg)", pointerEvents: "all" }}
        >
          {/* Background orbs */}
          <div
            className="absolute animate-glow-pulse rounded-full pointer-events-none"
            style={{
              width: "clamp(200px, 40vw, 400px)",
              height: "clamp(200px, 40vw, 400px)",
              top: "20%", left: "20%",
              background: "radial-gradient(circle, var(--blob-1) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <div
            className="absolute animate-glow-pulse rounded-full pointer-events-none"
            style={{
              width: "clamp(150px, 30vw, 300px)",
              height: "clamp(150px, 30vw, 300px)",
              bottom: "20%", right: "20%",
              background: "radial-gradient(circle, var(--blob-2) 0%, transparent 70%)",
              filter: "blur(40px)",
              animationDelay: "1s",
            }}
          />

          <div className="relative flex flex-col items-center gap-8 z-10 px-4">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline gap-1"
            >
              <span className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "var(--color-text)" }}>
                Phani
              </span>
              <span className="text-2xl sm:text-3xl font-bold tracking-tight italic glow-text">
                Kumar.
              </span>
            </motion.div>

            {/* Progress bar */}
            <div
              className="relative w-36 h-px overflow-hidden rounded-full"
              style={{ background: "var(--color-border)" }}
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
                  boxShadow: "0 0 10px var(--color-glow)",
                }}
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-[10px] font-bold uppercase tracking-[0.3em]"
              style={{ color: "var(--color-text-muted)" }}
            >
              Booting Interface
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
