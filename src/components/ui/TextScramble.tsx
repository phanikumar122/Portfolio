"use client";

import { useEffect, useRef, useState } from "react";

const chars = "!<>-_\\/[]{}—=+*^?#________";

export const TextScramble = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const frame = useRef(0);
  const queue = useRef<{ from: string; to: string; start: number; end: number; char?: string }[]>([]);
  const requestRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const q = [];
      for (let i = 0; i < text.length; i++) {
        const from = "";
        const to = text[i];
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        q.push({ from, to, start, end });
      }
      queue.current = q;

      const update = () => {
        let output = "";
        let complete = 0;
        for (let i = 0, n = queue.current.length; i < n; i++) {
          const item = queue.current[i];
          if (frame.current >= item.end) {
            complete++;
            output += item.to;
          } else if (frame.current >= item.start) {
            if (!item.char || Math.random() < 0.28) {
              item.char = chars[Math.floor(Math.random() * chars.length)];
              queue.current[i].char = item.char;
            }
            output += `<span class="opacity-50">${item.char}</span>`;
          } else {
            output += item.from;
          }
        }
        setDisplayText(output);
        if (complete === queue.current.length) {
          if (requestRef.current) cancelAnimationFrame(requestRef.current);
        } else {
          frame.current++;
          requestRef.current = requestAnimationFrame(update);
        }
      };
      update();
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [text, delay]);

  return <span dangerouslySetInnerHTML={{ __html: displayText }} />;
};
