"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isComplete = document.readyState === "complete";
    const t = setTimeout(() => setLoading(false), isComplete ? 300 : 1500);
    const onLoad = () => setLoading(false);
    if (!isComplete) window.addEventListener("load", onLoad);
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loading-overlay"
          initial={{ y: "0%" }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-bg"
          style={{ pointerEvents: "all" }}
        >
          <div className="relative flex flex-col items-center gap-6 z-10 px-4">
            
            {/* Header / Brand */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-baseline gap-1 font-display font-bold text-xl sm:text-2xl"
            >
              <span className="text-text">
                Phani
              </span>
              <span className="text-zinc-500 italic">
                Kumar.
              </span>
            </motion.div>

            {/* Progress line */}
            <div
              className="relative w-48 h-[2px] overflow-hidden bg-zinc-200 rounded-full"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-zinc-900 to-zinc-400"
              />
            </div>

            {/* Telemetry subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-[10px] font-mono tracking-widest uppercase text-text-muted"
            >
              Initializing Interface
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
