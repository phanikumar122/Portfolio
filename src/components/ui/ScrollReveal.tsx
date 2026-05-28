"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: string;
  staggerChildren?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 25,
  blur = "8px",
  staggerChildren,
  className,
}: ScrollRevealProps) => {
  const isStaggerContainer = staggerChildren !== undefined;

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      filter: blur ? `blur(${blur})` : "none",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: staggerChildren,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      filter: blur ? `blur(${blur})` : "none",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  if (isStaggerContainer) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={variants}
        className={className}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return (
              <motion.div variants={childVariants} className="h-full">
                {child}
              </motion.div>
            );
          }
          return child;
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
