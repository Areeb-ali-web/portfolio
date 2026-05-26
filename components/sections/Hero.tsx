"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Section } from "../ui/Section";
import { GradientText } from "../ui/GradientText";
import { StarField } from "../ui/StarField";
import AreebPic from "@/public/Areeb.png";

const styles = `
  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse-ring {
    0% {
      box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(52, 211, 153, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animated-slide-up {
    animation: slide-up 0.8s ease both;
  }

  .animated-float {
    animation: float 3s ease-in-out infinite;
    display: inline-block;
  }

  .animated-blink {
    animation: blink 1s infinite;
    margin-left: 2px;
  }

  .gradient-button {
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    transition: all 0.2s;
  }

  .gradient-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(124, 58, 237, 0.5);
  }

  .outline-button {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition: all 0.2s;
  }

  .outline-button:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .social-link {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: all 0.2s;
  }

  .social-link:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.15);
    color: #fff;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .floating-badge {
      display: none;
    }
  }
`;

export function Hero() {
  const [typed, setTyped] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const roles = ["Full Stack Developer", "MERN Stack Engineer", "AI Hackathon Winner", "Next.js Developer"];

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;
    if (!deleting && typed.length < current.length) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 80);
    } else if (!deleting && typed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), 40);
    } else if (deleting && typed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIndex]);

  return (
    <Section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", background: "#050508", overflow: "hidden" }}>
      <style>{styles}</style>
      <StarField />

      <div style={{ position: "absolute", top: "20%", left: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px 40px", width: "100%" }}>
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: 60, 
            alignItems: "center" 
          }}
        >
          {/* Left Column */}
          <div className="animated-slide-up">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 0 0 rgba(52,211,153,0.4)", animation: "pulse-ring 2s infinite" }} />
              <span style={{ color: "#34d399", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em" }}>Available for work</span>
            </div>

            <h1 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: "0 0 12px", letterSpacing: "-0.03em" }}>
              Hi, I'm{" "}
              <GradientText>Areeb Ali</GradientText>{" "}
              <span className="animated-float">👋</span>
            </h1>

            <div style={{ fontSize: "clamp(18px,3vw,28px)", color: "#a78bfa", fontWeight: 700, marginBottom: 20, minHeight: 40 }}>
              {typed}
              <span className="animated-blink">|</span>
            </div>

            <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.7, marginBottom: 32, maxWidth: 440 }}>
              Full-stack developer from UET Lahore. Built production-ready apps with React, Node.js, and Python.
              <strong style={{ color: "#c4b5fd" }}> Winner of AI Web Hackathon 2025</strong> at UET ITEC.
              Cybersecurity intern at NCAI. CGPA 3.46.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="#projects"
                className="gradient-button"
                style={{
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 15,
                  boxShadow: "0 8px 30px rgba(124,58,237,0.4)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
                aria-label="View my work projects"
              >
                View My Work →
              </a>
              <a
                href="#contact"
                className="outline-button"
                style={{
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: 15,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
                aria-label="Contact me"
              >
                Contact Me
              </a>
            </div>

            <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
              {[
                { label: "GitHub", href: "https://github.com/Areeb-ali-web", icon: "⌨️" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/areeb-ali-93a450383/", icon: "💼" },
                { label: "Email", href: "mailto:aareeb273@gmail.com", icon: "📧" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{
                    color: "#94a3b8",
                    padding: "8px 16px",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  aria-label={`Visit my ${s.label} profile`}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image Section */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 400 }}>
            {/* Background decorative rings */}
            <div style={{ position: "absolute", width: "clamp(280px, 40vw, 360px)", height: "clamp(280px, 40vw, 360px)", borderRadius: "50%", border: "1px dashed rgba(167,139,250,0.2)", animation: "spin-slow 20s linear infinite" }} />
            <div style={{ position: "absolute", width: "clamp(220px, 30vw, 280px)", height: "clamp(220px, 30vw, 280px)", borderRadius: "50%", border: "1px dashed rgba(96,165,250,0.15)", animation: "spin-slow 15s linear infinite reverse" }} />

            {/* Profile Image Container */}
            <div
              style={{
                width: "clamp(180px, 25vw, 220px)",
                height: "clamp(180px, 25vw, 220px)",
                borderRadius: "50%",
                background: "linear-gradient(135deg,#7c3aed,#2563eb)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 50px rgba(124,58,237,0.3), 0 0 100px rgba(124,58,237,0.1)",
                position: "relative",
                zIndex: 2,
                overflow: "hidden",
                border: "4px solid rgba(255, 255, 255, 0.05)"
              }}
            >
              <Image 
                src={AreebPic} 
                alt="Areeb Ali - Full Stack Developer"
                placeholder="blur"
                priority
                loading="eager"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>

            {/* Floating Badges */}
            {[
              { text: "🏆 Hackathon Winner", x: -140, y: -100, color: "#fbbf24" },
              { text: "🔒 NCAI Intern", x: 70, y: -120, color: "#34d399" },
              { text: "⚡ MERN Stack", x: -120, y: 80, color: "#60a5fa" },
              { text: "🎓 UET Lahore", x: 70, y: 100, color: "#a78bfa" },
            ].map((chip, i) => (
              <div
                key={i}
                className="floating-badge"
                style={{
                  position: "absolute",
                  background: "rgba(10,10,25,0.9)",
                  border: `1px solid ${chip.color}40`,
                  borderRadius: 10,
                  padding: "6px 12px",
                  fontSize: "clamp(11px, 1.5vw, 13px)",
                  fontWeight: 600,
                  color: chip.color,
                  left: `calc(50% + ${chip.x}px)`,
                  top: `calc(50% + ${chip.y}px)`,
                  whiteSpace: "nowrap",
                  animation: `float ${3 + i * 0.5}s ${i * 0.5}s ease-in-out infinite`,
                  zIndex: 3,
                  backdropFilter: "blur(8px)",
                }}
              >
                {chip.text}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid Footer */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", 
          gap: 20, 
          marginTop: 80, 
          paddingTop: 40, 
          borderTop: "1px solid rgba(255,255,255,0.06)" 
        }}>
          {[
            { num: "3.46", label: "CGPA", suffix: "" },
            { num: "20+", label: "Projects Built", suffix: "" },
            { num: "1st", label: "AI Hackathon Place", suffix: "" },
            { num: "3", label: "Years of Experience", suffix: "" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
                <GradientText>{s.num}</GradientText>
                {s.suffix}
              </div>
              <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Hero;