"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useSpring(0, { stiffness: 450, damping: 45 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 45 });

  useEffect(() => {
    const checkTouch = () => {
      const touch = 
        typeof window !== "undefined" && 
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);
      setIsTouch(touch);
    };
    checkTouch();

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('clickable') ||
        getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window === "undefined" || isTouch) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        translateX: mouseX,
        translateY: mouseY,
        pointerEvents: "none",
        zIndex: 10000,
        display: isVisible ? "block" : "none",
      }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          width: isHovering ? 64 : 12,
          height: isHovering ? 64 : 12,
          backgroundColor: isHovering ? "rgba(var(--color-primary-rgb), 0.1)" : "var(--color-primary)",
          border: isHovering ? "1px solid var(--color-primary)" : "none",
        }}
        className="rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden"
        style={{
          backdropFilter: isHovering ? "blur(4px)" : "none",
        }}
      >
        {isHovering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        )}
      </motion.div>
    </motion.div>
  );
};
