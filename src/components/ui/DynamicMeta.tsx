"use client";

import { useEffect } from "react";

export const DynamicMeta = () => {
  useEffect(() => {
    let originalTitle = document.title;
    let timeoutId: NodeJS.Timeout;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        timeoutId = setTimeout(() => {
          document.title = "Come back! 🚀";
        }, 500); // Small delay so it doesn't flicker on quick alt-tabs
      } else {
        clearTimeout(timeoutId);
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
};
