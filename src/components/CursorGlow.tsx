import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Lighter glow color for dark mode
  const glowColor = theme === "dark" 
    ? "rgba(96, 165, 250, 0.25)" // Lighter blue with more opacity for dark mode
    : "rgba(59, 130, 246, 0.15)"; // Original for light mode

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{
        background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 50%)`,
      }}
    />
  );
}
