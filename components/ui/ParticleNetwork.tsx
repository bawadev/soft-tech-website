'use client';

import { useEffect, useRef } from 'react';

const COLORS = [
  { r: 14, g: 165, b: 233 },  // sky-500
  { r: 56, g: 189, b: 248 },  // sky-400
  { r: 2, g: 132, b: 199 },   // sky-600
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  phase: number;
  depth: number;
  color: typeof COLORS[number];
  noiseOffsetX: number;
  noiseOffsetY: number;
}

export const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let rafId: number;
    let resizeTimer: ReturnType<typeof setTimeout>;
    let frame = 0;
    let scrollY = 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const mouse = { x: -9999, y: -9999, smoothX: -9999, smoothY: -9999, active: false };
    const mouseRadius = 150;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();

    const count = window.innerWidth < 768 ? 45 : 80;
    const maxDist = 200;
    const baseSpeed = 0.2;

    const particles: Particle[] = Array.from({ length: count }, () => {
      const depth = 0.3 + Math.random() * 0.7;
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * baseSpeed * 2 * depth,
        vy: (Math.random() - 0.5) * baseSpeed * 2 * depth,
        radius: 1.2 + depth * 2.3,
        baseAlpha: 0.2 + depth * 0.5,
        phase: Math.random() * Math.PI * 2,
        depth,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      };
    });

    // Organic noise via combined sines
    const noise = (t: number, offset: number) =>
      Math.sin(t * 0.7 + offset) * 0.5 +
      Math.sin(t * 1.3 + offset * 2.1) * 0.3 +
      Math.sin(t * 2.1 + offset * 0.7) * 0.2;

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      // Precompute scroll-adjusted y positions
      const adjustedY = new Float64Array(particles.length);
      for (let i = 0; i < particles.length; i++) {
        adjustedY[i] = particles[i].y + (scrollY * (1 - particles[i].depth) * 0.15) % h;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = adjustedY[i] - adjustedY[j];
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDist * maxDist) {
            const dist = Math.sqrt(distSq);
            const fade = 1 - dist / maxDist;
            const avgDepth = (particles[i].depth + particles[j].depth) / 2;
            const opacity = 0.18 * fade * fade * avgDepth;

            const ci = particles[i].color;
            const cj = particles[j].color;
            ctx.strokeStyle = `rgba(${(ci.r + cj.r) >> 1}, ${(ci.g + cj.g) >> 1}, ${(ci.b + cj.b) >> 1}, ${opacity})`;
            ctx.lineWidth = 0.4 + avgDepth * 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, adjustedY[i]);
            ctx.lineTo(particles[j].x, adjustedY[j]);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const py = adjustedY[i];

        const breathe = Math.sin(frame * 0.012 + p.phase) * 0.1;
        const sizeBreath = 1 + Math.sin(frame * 0.01 + p.phase * 1.5) * 0.15;
        const alpha = p.baseAlpha + breathe;
        const r = p.radius * sizeBreath;
        const { r: cr, g: cg, b: cb } = p.color;

        // Glow
        const glowR = r * 4;
        const glow = ctx.createRadialGradient(p.x, py, 0, p.x, py, glowR);
        glow.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${alpha * 0.35})`);
        glow.addColorStop(0.5, `rgba(${cr}, ${cg}, ${cb}, ${alpha * 0.08})`);
        glow.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, py, glowR, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, py, r, 0, Math.PI * 2);
        ctx.fill();

        // Bright center highlight
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;
        ctx.beginPath();
        ctx.arc(p.x, py, r * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Mouse glow
      if (mouse.active) {
        const mg = ctx.createRadialGradient(
          mouse.smoothX, mouse.smoothY, 0,
          mouse.smoothX, mouse.smoothY, mouseRadius
        );
        mg.addColorStop(0, 'rgba(14, 165, 233, 0.08)');
        mg.addColorStop(0.5, 'rgba(56, 189, 248, 0.03)');
        mg.addColorStop(1, 'rgba(14, 165, 233, 0)');
        ctx.fillStyle = mg;
        ctx.beginPath();
        ctx.arc(mouse.smoothX, mouse.smoothY, mouseRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      frame++;
      const time = frame * 0.008;

      // Smooth mouse interpolation
      mouse.smoothX += (mouse.x - mouse.smoothX) * 0.12;
      mouse.smoothY += (mouse.y - mouse.smoothY) * 0.12;

      for (const p of particles) {
        // Organic drift
        p.vx += noise(time, p.noiseOffsetX) * 0.08 * p.depth;
        p.vy += noise(time, p.noiseOffsetY) * 0.08 * p.depth;

        // Mouse: attract at distance, repel when close
        if (mouse.active) {
          const dx = p.x - mouse.smoothX;
          const dy = p.y - mouse.smoothY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius && dist > 0) {
            const ratio = dist / mouseRadius;
            if (ratio < 0.3) {
              const force = (1 - ratio / 0.3) * 1.2;
              p.vx += (dx / dist) * force;
              p.vy += (dy / dist) * force;
            } else {
              const force = (1 - ratio) * 0.15;
              p.vx -= (dx / dist) * force;
              p.vy -= (dy / dist) * force;
            }
          }
        }

        // Dampen velocity
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const targetSpeed = baseSpeed * p.depth;
        if (speed > targetSpeed * 4) {
          p.vx *= 0.95;
          p.vy *= 0.95;
        } else if (speed > targetSpeed * 1.5) {
          p.vx *= 0.995;
          p.vy *= 0.995;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Edge wrapping
        const margin = 30;
        if (p.x < -margin) p.x += w + margin * 2;
        if (p.x > w + margin) p.x -= w + margin * 2;
        if (p.y < -margin) p.y += h + margin * 2;
        if (p.y > h + margin) p.y -= h + margin * 2;
      }
    };

    const loop = () => {
      update();
      draw();
      rafId = requestAnimationFrame(loop);
    };

    if (prefersReducedMotion) {
      draw();
    } else {
      loop();
    }

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        resize();
        if (prefersReducedMotion) draw();
      }, 150);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      aria-hidden="true"
    />
  );
};
