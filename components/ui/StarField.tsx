"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  dur: number;
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = Array.from(
      { length: 80 },
      (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 4,
        dur: Math.random() * 3 + 2,
      })
    );

    setStars(generatedStars);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: "white",
            animation: `twinkle ${s.dur}s ${s.delay}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}