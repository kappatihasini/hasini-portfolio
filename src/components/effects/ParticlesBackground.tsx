"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

const COLORS = [
  "rgba(59,130,246,",   // blue
  "rgba(139,92,246,",   // purple
  "rgba(6,182,212,",    // cyan
];

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Spawn initial particles
    const spawnParticle = (): Particle => {
      const maxLife = 120 + Math.random() * 180;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.1,
        size: Math.random() * 2 + 0.5,
        opacity: 0,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 0,
        maxLife,
      };
    };

    for (let i = 0; i < 80; i++) {
      const p = spawnParticle();
      p.life = Math.random() * p.maxLife; // stagger
      particles.current.push(p);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;

        // Fade in / fade out
        const progress = p.life / p.maxLife;
        if (progress < 0.2) {
          p.opacity = progress / 0.2;
        } else if (progress > 0.8) {
          p.opacity = 1 - (progress - 0.8) / 0.2;
        } else {
          p.opacity = 1;
        }

        if (p.life >= p.maxLife) {
          particles.current[i] = spawnParticle();
          return;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${(p.opacity * 0.7).toFixed(2)})`;
        ctx.fill();

        // Soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${(p.opacity * 0.1).toFixed(2)})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
