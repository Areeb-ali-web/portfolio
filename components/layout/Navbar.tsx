"use client";

import { useEffect, useState } from "react";

interface NavbarProps {
  active?: string;
}

export function Navbar({ active }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    // run once after mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = ["Home", "About", "Projects", "Experience", "Contact"];

  // Prevent mismatch during SSR
  if (!mounted) return null;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        width: "100%",
        maxWidth: 1200,

        padding: scrolled ? "12px 24px" : "20px 24px",
        background: scrolled ? "rgba(5,5,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "none",

        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        style={{
          fontSize: 22,
          fontWeight: 800,
          color: "#fff",
          textDecoration: "none",
        }}
      >
        Areeb<span style={{ color: "#a78bfa" }}>.</span>
      </a>

      {/* Links */}
      <div style={{ display: "flex", gap: 4 }}>
        {links.map((l) => {
          const key = l.toLowerCase();

          return (
            <a
              key={l}
              href={`#${key}`}
              style={{
                color: active === key ? "#a78bfa" : "#94a3b8",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                padding: "6px 14px",
                borderRadius: 8,
                background:
                  active === key
                    ? "rgba(167,139,250,0.1)"
                    : "transparent",
                transition: "all 0.2s",
              }}
            >
              {l}
            </a>
          );
        })}
      </div>

      {/* Resume */}
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
        }}
      >
        Resume
      </a>
    </nav>
  );
}