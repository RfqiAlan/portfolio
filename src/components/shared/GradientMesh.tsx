"use client";

import { useEffect, useRef } from "react";

export function GradientMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const blobs = [
      { x: 0.3, y: 0.3, vx: 0.0003, vy: 0.0002, color: "99, 102, 241" }, // indigo
      { x: 0.7, y: 0.4, vx: -0.0002, vy: 0.0003, color: "168, 85, 247" }, // purple
      { x: 0.5, y: 0.7, vx: 0.0002, vy: -0.0002, color: "236, 72, 153" }, // pink
      { x: 0.2, y: 0.6, vx: 0.0003, vy: 0.0001, color: "6, 182, 212" }, // cyan
    ];

    const animate = () => {
      time += 1;

      // Clear with slight fade for trail effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobs.forEach((blob, i) => {
        // Organic movement using sin/cos
        blob.x += blob.vx + Math.sin(time * 0.001 + i) * 0.0001;
        blob.y += blob.vy + Math.cos(time * 0.001 + i * 2) * 0.0001;

        // Bounce off edges
        if (blob.x < 0.1 || blob.x > 0.9) blob.vx *= -1;
        if (blob.y < 0.1 || blob.y > 0.9) blob.vy *= -1;

        // Draw gradient blob
        const x = blob.x * canvas.width;
        const y = blob.y * canvas.height;
        const radius = Math.min(canvas.width, canvas.height) * 0.4;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${blob.color}, 0.15)`);
        gradient.addColorStop(0.5, `rgba(${blob.color}, 0.05)`);
        gradient.addColorStop(1, `rgba(${blob.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationId = requestAnimationFrame(animate);
    };

    // Initial clear
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-30 opacity-100 dark:opacity-0 transition-opacity duration-500"
      />
      {/* Dark mode gradient mesh using CSS */}
      <div className="fixed inset-0 -z-30 opacity-0 dark:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-purple-950/30 to-pink-950/50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>
    </>
  );
}
