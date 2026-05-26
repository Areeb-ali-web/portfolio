"use client";

import { useState } from "react";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { FloatingCard } from "../ui/FloatingCard";
import { Badge } from "../ui/Badge";

export function About() {
  const [activeTab, setActiveTab] = useState("story");
  const tabs = ["story", "skills", "education"];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"], color: "#60a5fa" },
    { category: "Backend", items: ["Node.js", "Express", "FastAPI", "ASP.NET Core", "REST APIs", "JWT Auth"], color: "#34d399" },
    { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"], color: "#fbbf24" },
    { category: "DevOps & Security", items: ["Git", "GitHub", "Kali Linux", "Nessus", "XSS/SQLi Testing", "AWS Basics"], color: "#f472b6" },
    { category: "Languages", items: ["JavaScript", "Python", "C#", "TypeScript", "SQL"], color: "#a78bfa" },
  ];

  return (
    <Section id="about" style={{ background: 'tranparent' }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader eyebrow="About Me" title="Who I Am" subtitle="A passionate developer building the future one commit at a time" />

        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 48 }}>
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                background: activeTab === t ? "linear-gradient(135deg,#7c3aed,#4f46e5)" : "rgba(255,255,255,0.05)",
                border: activeTab === t ? "none" : "1px solid rgba(255,255,255,0.08)",
                color: "#fff",
                padding: "8px 22px",
                borderRadius: 10,
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                textTransform: "capitalize",
                transition: "all 0.2s",
                boxShadow: activeTab === t ? "0 4px 20px rgba(124,58,237,0.4)" : "none",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {activeTab === "story" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <FloatingCard glowColor="rgba(124,58,237,0.15)">
              <div style={{ fontSize: 32, marginBottom: 16 }}>🚀</div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 20, marginBottom: 12 }}>My Journey</h3>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 15 }}>
                I'm a Computer Science student at the University of Engineering and Technology, Lahore with a 3.46 CGPA.
                My journey began with building simple websites and rapidly evolved into crafting full-stack production apps
                with React, Node.js, and Python. I won 1st place at UET's AI Web Hackathon with an inventory management system
                featuring AI-powered recipe generation.
              </p>
            </FloatingCard>

            <FloatingCard glowColor="rgba(59,130,246,0.15)">
              <div style={{ fontSize: 32, marginBottom: 16 }}>🔐</div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 20, marginBottom: 12 }}>Security Focus</h3>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 15 }}>
                As a Cybersecurity Intern at NCAI (National Center of Artificial Intelligence), I performed security testing
                on web apps, analyzed API authentication mechanisms, and used Kali Linux and Nessus for vulnerability scanning.
                This dual expertise in full-stack dev and security makes me uniquely positioned to build secure applications.
              </p>
            </FloatingCard>

            <FloatingCard glowColor="rgba(52,211,153,0.15)" style={{ gridColumn: "1 / -1" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                {[
                  { icon: "🏆", label: "AI Hackathon", sub: "1st Place — UET ITEC 2025" },
                  { icon: "🎓", label: "UET Lahore", sub: "B.Sc. CS — CGPA 3.46" },
                  { icon: "💻", label: "NCAI Intern", sub: "Cybersecurity — 2025" },
                  { icon: "📊", label: "SOFTEC 2026", sub: "FairGig Presented" },
                ].map((item, i) => (
                  <div key={i} style={{ flex: "1 1 160px", textAlign: "center", padding: "16px", background: "rgba(255,255,255,0.03)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{item.label}</div>
                    <div style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>{item.sub}</div>
                  </div>
                ))}
              </div>
            </FloatingCard>
          </div>
        )}

        {activeTab === "skills" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {skills.map((cat) => (
              <FloatingCard key={cat.category} glowColor={`${cat.color}20`}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: cat.color }} />
                  <span style={{ color: cat.color, fontWeight: 700, fontSize: 14, letterSpacing: "0.04em" }}>
                    {cat.category}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        background: `${cat.color}12`,
                        border: `1px solid ${cat.color}30`,
                        color: "#e2e8f0",
                        padding: "4px 12px",
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </FloatingCard>
            ))}
          </div>
        )}

        {activeTab === "education" && (
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            {[
              {
                degree: "B.Sc. Computer Science",
                institution: "University of Engineering and Technology, Lahore",
                period: "2024 – 2028",
                gpa: "3.46 / 4.0",
                icon: "🎓",
                color: "#a78bfa",
                highlights: ["Full-stack development coursework", "Data Structures & Algorithms", "Cybersecurity fundamentals", "AI & Machine Learning basics"],
              },
              {
                degree: "Advance SQL Certificate",
                institution: "HackerRank",
                period: "2024",
                icon: "📜",
                color: "#34d399",
                highlights: ["Complex query optimization", "Window functions", "Stored procedures"],
              },
              {
                degree: "React (Basic) Certificate",
                institution: "HackerRank",
                period: "2024",
                icon: "⚛️",
                color: "#60a5fa",
                highlights: ["Component lifecycle", "Hooks", "State management"],
              },
            ].map((edu, i) => (
              <FloatingCard key={i} style={{ marginBottom: 20 }} glowColor={`${edu.color}20`}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 32, flexShrink: 0 }}>{edu.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                      <div>
                        <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 18, margin: 0 }}>{edu.degree}</h3>
                        <p style={{ color: edu.color, fontSize: 13, margin: "4px 0 0", fontWeight: 600 }}>{edu.institution}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <Badge color="purple">{edu.period}</Badge>
                        {edu.gpa && <div style={{ color: "#34d399", fontSize: 13, fontWeight: 700, marginTop: 6 }}>GPA: {edu.gpa}</div>}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                      {edu.highlights.map((h) => (
                        <span key={h} style={{ color: "#64748b", fontSize: 12, background: "rgba(255,255,255,0.04)", padding: "3px 10px", borderRadius: 6 }}>
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

export default About;