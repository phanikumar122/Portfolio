"use client";

import { useEffect, useRef } from "react";

export const useInteractiveGlow = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!frameId) {
        frameId = requestAnimationFrame(updateGlow);
      }
    };

    const updateGlow = () => {
      const container = containerRef.current;
      if (!container) {
        frameId = 0;
        return;
      }

      const elements = container.querySelectorAll(".interactive-glow") as NodeListOf<HTMLElement>;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = mouseX - rect.left;
        const y = mouseY - rect.top;
        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
      });

      frameId = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return containerRef;
};
