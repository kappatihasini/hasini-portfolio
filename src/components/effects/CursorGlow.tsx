"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-50 w-[400px] h-[400px] rounded-full transition-transform duration-100 ease-out"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,0.08) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
