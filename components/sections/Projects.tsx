"use client";

import { useState } from "react";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { StarField } from "../ui/StarField";

export function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "FairGig",
      subtitle: "Gig Worker Platform with ML Anomaly Detection",
      description: "A secure marketplace for gig workers featuring advanced ML-driven anomaly detection. Built for SOFTEC 2026, it tracks fraudulent job postings and malicious activity patterns while offering seamless UX. Microservices include Auth, Earnings, Anomaly (FastAPI/Python), Grievance (Node.js), Analytics, and Certificate Renderer.",
      award: "🏆 Presented at SOFTEC 2026",
      tech: ["React Native", "Node.js", "FastAPI", "Python", "MongoDB", "Cybersecurity"],
      icon: "🛡️",
      gradient: "linear-gradient(135deg,#7c3aed,#4f46e5)",
      glow: "rgba(124,58,237,0.3)",
      highlights: ["ML Anomaly Detection", "Microservices Architecture", "Fraud Prevention System"],
      live: null,
    },
    {
      id: 2,
      title: "SellSport",
      subtitle: "DSA-Focused E-Commerce Application",
      description: "A high-performance e-commerce platform optimized at the core data-structure layer. Implements custom linked lists, search queues, and stacks to radically speed up inventory processing, cart state retention, and order handling.",
      award: "⚙️ Core DSA Architecture Project",
      tech: ["MERN Stack", "ASP.NET Core", "C#", "Data Structures", "REST APIs"],
      icon: "🛒",
      gradient: "linear-gradient(135deg,#0891b2,#0e7490)",
      glow: "rgba(8,145,178,0.3)",
      highlights: ["Custom Data Structures", "O(1) Cart Operations", "Real-time Inventory"],
      live: null,
    },
    {
      id: 3,
      title: "SPYLT",
      subtitle: "Animated Can Website with Scroll Mechanics",
      description: "A visually high-end production website for a protein milk brand. Features heavy scroll-driven layout transitions, mouse-tracking perspective warps, and 3D-feeling smooth step animations. Showcases multiple flavors with smooth transitions.",
      award: "🎨 UI/UX & Web Animation Focus",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS", "GSAP", "Vercel"],
      icon: "🥤",
      gradient: "linear-gradient(135deg,#059669,#047857)",
      glow: "rgba(5,150,105,0.3)",
      highlights: ["Scroll-triggered Animations", "3D Perspective Warps", "Performance Optimized"],
      live: "https://can-fusion-wtjl.vercel.app",
    },
    {
      id: 4,
      title: "Clothify",
      subtitle: "Full-Stack E-Commerce Store",
      description: "A full-stack e-commerce store developed at UET with complete product catalog, cart management, user authentication, and order processing. Responsive across all device sizes.",
      award: "🏫 Academic Project — UET 2025",
      tech: ["MERN Stack", "JWT Auth", "MongoDB", "React"],
      icon: "👕",
      gradient: "linear-gradient(135deg,#d97706,#b45309)",
      glow: "rgba(217,119,6,0.3)",
      highlights: ["Complete Shopping Flow", "User Auth", "Admin Dashboard"],
      live: null,
    },
    {
      id: 5,
      title: "AI Inventory System",
      subtitle: "Hackathon-Winning AI Application",
      description: "Won 1st place at UET ITEC AI Web Hackathon 2025. An intelligent inventory management system with AI-powered recipe generation that suggests recipes based on available ingredients and stock levels.",
      award: "🥇 1st Place — AI Hackathon UET 2025",
      tech: ["React", "Python", "FastAPI", "OpenAI API", "MongoDB"],
      icon: "🤖",
      gradient: "linear-gradient(135deg,#be185d,#9d174d)",
      glow: "rgba(190,24,93,0.3)",
      highlights: ["AI Recipe Generation", "Real-time Inventory", "1st Place Winner"],
      live: null,
    },
  ];

  return (
    <Section id="projects" style={{ background: 'transparent' }}>
      <StarField />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <SectionHeader 
          eyebrow="Selected Work" 
          title="Featured Projects" 
          subtitle="A collection of projects that showcase my technical range and creative problem-solving" 
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(selected === project.id ? null : project.id)}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: selected === project.id ? `1px solid rgba(167,139,250,0.4)` : "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: selected === project.id ? `0 0 40px ${project.glow}` : "none",
                transform: selected === project.id ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              {/* Project Header with Gradient */}
              <div style={{ 
                padding: "24px 24px 0", 
                background: project.gradient, 
                position: "relative", 
                minHeight: 120,
                overflow: "hidden"
              }}>
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: 48, marginBottom: 8 }}>{project.icon}</div>
                  <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 24, margin: 0, letterSpacing: "-0.02em" }}>
                    {project.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, margin: "4px 0 20px", fontWeight: 500 }}>
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Project Body */}
              <div style={{ padding: "20px 24px 24px" }}>
                {/* Award Badge */}
                <div style={{ marginBottom: 12 }}>
                  <span style={{ 
                    color: "#fbbf24", 
                    fontSize: 12, 
                    fontWeight: 600,
                    background: "rgba(251,191,36,0.1)",
                    padding: "4px 10px",
                    borderRadius: 20,
                    display: "inline-block"
                  }}>
                    {project.award}
                  </span>
                </div>

                {/* Description */}
                <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                  {selected === project.id ? project.description : `${project.description.slice(0, 120)}...`}
                </p>

                {/* Highlights (shown when expanded) */}
                {selected === project.id && (
                  <div style={{ marginBottom: 16, animation: "slide-up 0.3s ease" }}>
                    <div style={{ color: "#a78bfa", fontSize: 12, fontWeight: 600, marginBottom: 8, letterSpacing: "0.05em" }}>
                      KEY HIGHLIGHTS
                    </div>
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#a78bfa", flexShrink: 0 }} />
                        <span style={{ color: "#c4b5fd", fontSize: 13 }}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      style={{ 
                        background: "rgba(255,255,255,0.05)", 
                        border: "1px solid rgba(255,255,255,0.08)", 
                        color: "#cbd5e1", 
                        padding: "4px 10px", 
                        borderRadius: 8, 
                        fontSize: 11,
                        fontWeight: 500
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: "flex", gap: 10 }}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{ 
                        background: "#fff", 
                        color: "#000", 
                        padding: "8px 18px", 
                        borderRadius: 10, 
                        fontSize: 13, 
                        fontWeight: 700, 
                        textDecoration: "none", 
                        display: "flex", 
                        alignItems: "center", 
                        gap: 6,
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(255,255,255,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Live Demo <span style={{ fontSize: 14 }}>↗</span>
                    </a>
                  )}
                  <button
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      setSelected(selected === project.id ? null : project.id);
                    }}
                    style={{ 
                      background: "rgba(255,255,255,0.05)", 
                      border: "1px solid rgba(255,255,255,0.1)", 
                      color: "#94a3b8", 
                      padding: "8px 18px", 
                      borderRadius: 10, 
                      fontSize: 13, 
                      fontWeight: 600, 
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.color = "#94a3b8";
                    }}
                  >
                    {selected === project.id ? "Show Less" : "Learn More"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Section>
  );
}

export default Projects;