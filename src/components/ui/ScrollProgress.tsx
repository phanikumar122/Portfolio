"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the progress reading
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center pointer-events-none mix-blend-difference hidden sm:flex">
      {/* Background ring */}
      <svg width="40" height="40" viewBox="0 0 100 100" className="-rotate-90">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="4"
        />
        {/* Progress ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          pathLength="1"
          style={{ pathLength: scaleX }}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
