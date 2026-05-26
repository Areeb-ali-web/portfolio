"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const moveDot = (e: MouseEvent) => {
      setTimeout(() => setDot({ x: e.clientX, y: e.clientY }), 80);
    };
    const over = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a,button,[data-hover]')) setHovered(true);
    };
    const out = () => setHovered(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", moveDot);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", moveDot);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full"
        style={{
          width: hovered ? 48 : 24,
          height: hovered ? 48 : 24,
          background: "var(--accent)",
          mixBlendMode: "difference",
          x: pos.x - (hovered ? 24 : 12),
          y: pos.y - (hovered ? 24 : 12),
          transition: "width 0.2s, height 0.2s",
        }}
      />
      <div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full"
        style={{
          width: 6,
          height: 6,
          background: "white",
          transform: `translate(${dot.x - 3}px, ${dot.y - 3}px)`,
        }}
      />
    </>
  );
}
