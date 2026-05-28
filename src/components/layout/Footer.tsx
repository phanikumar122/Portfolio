"use client";

export const Footer = () => {
  return (
    <footer
      className="py-10 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-bg)" }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-48 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--color-text-muted)", opacity: 0.6 }}>
          &copy; {new Date().getFullYear()} Phani Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
