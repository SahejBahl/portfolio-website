import { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
  side: "left" | "right";
}

export default function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles only on the sides
    const initParticles = () => {
      particlesRef.current = [];

      // Calculate the content area width (max-w-3xl is 896px)
      const centerWidth = Math.min(896, canvas.width * 0.6);
      const leftBound = (canvas.width - centerWidth) / 2;
      const rightBound = leftBound + centerWidth;

      // More particles for better visual effect
      const particleCount = Math.max(80, Math.floor((canvas.width * canvas.height) / 8000));

      for (let i = 0; i < particleCount; i++) {
        let x, baseX;
        let side: "left" | "right";

        // Randomly choose left or right side
        if (Math.random() < 0.5) {
          // Left side
          x = Math.random() * leftBound;
          baseX = x;
          side = "left";
        } else {
          // Right side
          x = rightBound + Math.random() * (canvas.width - rightBound);
          baseX = x;
          side = "right";
        }

        const y = Math.random() * canvas.height;

        particlesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2.5 + 1.5,
          baseX,
          baseY: y,
          side,
        });
      }
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop
    const animate = () => {
      // Fade trail effect
      ctx.fillStyle = theme === "dark"
        ? "rgba(20, 20, 30, 0.15)"
        : "rgba(255, 255, 255, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      timeRef.current += 0.016;

      // Colors based on theme
      const particleColor = theme === "dark"
        ? "rgba(96, 165, 250, 0.8)"
        : "rgba(59, 130, 246, 0.6)";

      const glowColor = theme === "dark"
        ? "rgba(96, 165, 250, 0.4)"
        : "rgba(59, 130, 246, 0.3)";

      const connectionColor = theme === "dark"
        ? "rgba(96, 165, 250, 0.2)"
        : "rgba(59, 130, 246, 0.15)";

      particlesRef.current.forEach((particle, i) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const pushRadius = 180;

        // Strong anti-gravity push from cursor
        if (distance < pushRadius) {
          const force = (pushRadius - distance) / pushRadius;
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * force * 3;
          particle.vy -= Math.sin(angle) * force * 3;
        }

        // Ambient floating motion
        particle.vx += Math.sin(timeRef.current * 0.5 + particle.baseY * 0.01) * 0.02;
        particle.vy += Math.cos(timeRef.current * 0.3 + particle.baseX * 0.01) * 0.02;

        // Return to base position (gentler)
        const baseDx = particle.baseX - particle.x;
        const baseDy = particle.baseY - particle.y;
        particle.vx += baseDx * 0.005;
        particle.vy += baseDy * 0.005;

        // Apply damping
        particle.vx *= 0.94;
        particle.vy *= 0.94;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Keep particles on their side
        const centerWidth = Math.min(896, canvas.width * 0.6);
        const leftBound = (canvas.width - centerWidth) / 2;
        const rightBound = leftBound + centerWidth;

        if (particle.side === "left") {
          if (particle.x > leftBound - 20) particle.x = leftBound - 20;
          if (particle.x < 0) particle.x = 0;
        } else {
          if (particle.x < rightBound + 20) particle.x = rightBound + 20;
          if (particle.x > canvas.width) particle.x = canvas.width;
        }

        if (particle.y < 0) particle.y = 0;
        if (particle.y > canvas.height) particle.y = canvas.height;

        // Draw connections to nearby particles on same side
        particlesRef.current.forEach((other, j) => {
          if (j <= i || particle.side !== other.side) return;

          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            const opacity = (1 - dist / 120) * 0.4;
            ctx.strokeStyle = connectionColor.replace(/[\d.]+\)$/, `${opacity})`);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // Draw particle with glow
        ctx.save();

        // Outer glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        gradient.addColorStop(0, glowColor);
        gradient.addColorStop(1, "rgba(96, 165, 250, 0)");

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
