"use client";

import { motion } from "framer-motion";

export const NoiseOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035] overflow-hidden">
      <motion.div
        animate={{
          x: ["-5%", "5%", "-2%", "3%", "0%"],
          y: ["5%", "-3%", "1%", "-5%", "2%"],
        }}
        transition={{
          duration: 0.25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-200%] bg-[url('https://res.cloudinary.com/dqr68xvvt/image/upload/v1705663784/noise_fpx7q8.png')] bg-repeat opacity-100"
      />
    </div>
  );
};
