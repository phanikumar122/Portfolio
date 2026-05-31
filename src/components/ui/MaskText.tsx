"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const MaskText = ({ children, className }: { children: string; className?: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const phrases = children.split(" ");

  return (
    <div ref={ref} className={className}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className="overflow-hidden inline-flex mr-[0.2em]">
            <motion.p
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : { y: "100%" }}
              transition={{
                duration: 0.75,
                delay: index * 0.05,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="m-0"
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
};
