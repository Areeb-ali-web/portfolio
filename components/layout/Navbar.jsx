"use client";

import { useState, useEffect } from "react";

export function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["Home", "About", "Projects", "Experience", "Contact"];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "12px 24px" : "20px 24px",
        background: scrolled ? "rgba(5,5,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1200,
        margin: "0 auto",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
      }}
    >
      <a
        href="#home"
        style={{
          fontSize: 22,
          fontWeight: 800,
          color: "#fff",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        Areeb<span style={{ color: "#a78bfa" }}>.</span>
      </a>

      <div style={{ display: "flex", gap: 4 }}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              color: active === l.toLowerCase() ? "#a78bfa" : "#94a3b8",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              padding: "6px 14px",
              borderRadius: 8,
              transition: "all 0.2s",
              background: active === l.toLowerCase() ? "rgba(167,139,250,0.1)" : "transparent",
            }}
          >
            {l}
          </a>
        ))}
      </div>

<a
  href="/Areeb_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
    color: "#fff",
    textDecoration: "none",
    padding: "8px 20px",
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 600,
    boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
    transition: "all 0.2s",
  }}
>
  Resume
</a>
    </nav>
  );
}