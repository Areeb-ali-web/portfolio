"use client";

import { useState } from "react";

export function FloatingCard({ children, style = {}, glowColor = "rgba(139,92,246,0.15)", onClick }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: 20,
        padding: 28,
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 60px ${glowColor}` : "0 4px 20px rgba(0,0,0,0.3)",
        cursor: onClick ? "pointer" : "default",
        backdropFilter: "blur(10px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}