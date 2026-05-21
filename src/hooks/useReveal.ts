"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useReveal = (options: {
  type?: "slide-up" | "scale-up" | "fade-in",
  delay?: number,
  duration?: number
} = {}) => {
  const { type = "slide-up", delay = 0, duration = 1.2 } = options;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = {
        opacity: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none"
        }
    };

    if (type === "slide-up") {
      fromVars.y = 100;
      toVars.y = 0;
    } else if (type === "scale-up") {
        fromVars.scale = 0.8;
        toVars.scale = 1;
    }

    gsap.fromTo(el, fromVars, toVars);

    return () => {
        ScrollTrigger.getAll().forEach(t => {
            if (t.trigger === el) t.kill();
        });
    };
  }, [type, delay, duration]);

  return ref;
};
