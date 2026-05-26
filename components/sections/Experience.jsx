"use client";

import { useState } from "react";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { FloatingCard } from "../ui/FloatingCard";
import { Badge } from "../ui/Badge";
import ElectricBorder from "@/src/component/ElectricBorder";

export function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      role: "Cybersecurity Intern",
      company: "NCAI",
      companyFull: "National Center of Artificial Intelligence",
      period: "May 2025 – Aug 2025",
      location: "Pakistan",
      icon: "🔐",
      color: "#34d399",
      bullets: [
        "Performed security testing on web applications to identify vulnerabilities including XSS and SQL Injection",
        "Analyzed API requests and authentication mechanisms to ensure secure data handling",
        "Used Kali Linux and Nessus for comprehensive vulnerability scanning and detailed reporting",
        "Provided recommendations for secure coding practices to improve web application security posture",
      ],
      tech: ["Kali Linux", "Nessus", "Burp Suite", "OWASP", "XSS", "SQL Injection"],
    },
  ];

  const achievements = [
    {
      title: "AI Web Hackathon — 1st Place",
      org: "UET ITEC",
      year: "2025",
      desc: "Developed an AI-powered Inventory Management System with intelligent recipe generation from stock levels",
      icon: "🥇",
      color: "#fbbf24",
    },
    {
      title: "SOFTEC 2026 Presenter",
      org: "FAST-NUCES",
      year: "2026",
      desc: "Presented FairGig — a gig worker platform with ML-based anomaly detection for fraud prevention",
      icon: "🏆",
      color: "#a78bfa",
    },
    {
      title: "SQL (Advanced)",
      org: "HackerRank Certification",
      year: "2024",
      desc: "Demonstrated advanced SQL skills including complex joins, window functions, and query optimization",
      icon: "📊",
      color: "#60a5fa",
    },
    {
      title: "React (Basic)",
      org: "HackerRank Certification",
      year: "2024",
      desc: "Certified in React fundamentals including hooks, state management, and component architecture",
      icon: "⚛️",
      color: "#34d399",
    },
  ];

  return (
    <Section id="experience" style={{ background: "transparent" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px", width: "100%" }}>
        <SectionHeader eyebrow="Experience" title="My Journey So Far" subtitle="Real-world experience and achievements that shape my development approach" />

        {/* Responsive Grid - Stacks on mobile */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "32px",
          alignItems: "start"
        }}>
          
          {/* Left Column - Experience */}
          <div>
            <h3 style={{ 
              color: "#fff", 
              fontWeight: 700, 
              fontSize: "clamp(18px, 4vw, 20px)", 
              marginBottom: "24px", 
              display: "flex", 
              alignItems: "center", 
              gap: "10px",
              flexWrap: "wrap"
            }}>
              <span style={{ 
                background: "linear-gradient(135deg,#34d399,#059669)", 
                padding: "4px 10px", 
                borderRadius: 8, 
                fontSize: "12px",
                whiteSpace: "nowrap"
              }}>Work</span>
              Professional Experience
            </h3>

            {experiences.map((exp, i) => (
              <ElectricBorder
                key={i}
                color={exp.color}
                speed={1}
                chaos={0.12}
                thickness={2}
                style={{ borderRadius: 16, marginBottom: 16 }}
              >
                <FloatingCard
                  glowColor={`${exp.color}20`}
                  onClick={() => setActiveExp(i)}
                  style={{ 
                    border: activeExp === i ? `1px solid ${exp.color}40` : 'none',
                    cursor: "pointer",
                    transition: "all 0.2s",
                    margin: 0
                  }}
                >
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", flexDirection: "row" }}>
                    <div style={{ fontSize: "32px", flexShrink: 0 }}>{exp.icon}</div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(16px, 4vw, 17px)", margin: 0 }}>{exp.role}</h4>
                      <p style={{ color: exp.color, fontSize: "13px", fontWeight: 600, margin: "3px 0 0" }}>{exp.company}</p>
                      <p style={{ color: "#475569", fontSize: "12px", margin: "2px 0 0" }}>{exp.companyFull}</p>
                      <div style={{ display: "flex", gap: "10px", marginTop: "8px", flexWrap: "wrap" }}>
                        <Badge color="green">{exp.period}</Badge>
                      </div>
                    </div>
                  </div>

                  {activeExp === i && (
                    <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      {exp.bullets.map((b, j) => (
                        <div key={j} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                          <span style={{ color: exp.color, fontSize: "16px", flexShrink: 0 }}>→</span>
                          <span style={{ color: "#94a3b8", fontSize: "clamp(13px, 3.5vw, 14px)", lineHeight: 1.6 }}>{b}</span>
                        </div>
                      ))}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
                        {exp.tech.map((t) => (
                          <span key={t} style={{ 
                            background: `${exp.color}12`, 
                            border: `1px solid ${exp.color}30`, 
                            color: exp.color, 
                            padding: "4px 10px", 
                            borderRadius: 6, 
                            fontSize: "11px", 
                            fontWeight: 600,
                            whiteSpace: "nowrap"
                          }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </FloatingCard>
              </ElectricBorder>
            ))}

            {/* Currently Learning Card with ElectricBorder */}
            <ElectricBorder
              color="#a78bfa"
              speed={0.8}
              chaos={0.08}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <FloatingCard glowColor="rgba(167,139,250,0.15)" style={{ margin: 0 }}>
                <div style={{ display: "flex", gap: "14px", flexDirection: "row" }}>
                  <span style={{ fontSize: "32px" }}>🌱</span>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(16px, 4vw, 18px)", margin: 0 }}>Currently Learning</h4>
                    <p style={{ color: "#64748b", fontSize: "13px", margin: "4px 0 10px" }}>Expanding my expertise</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {["WebAssembly", "AI Agents", "LangChain", "Docker", "Kubernetes"].map((t) => (
                        <span key={t} style={{ 
                          background: "rgba(167,139,250,0.1)", 
                          border: "1px solid rgba(167,139,250,0.25)", 
                          color: "#a78bfa", 
                          padding: "4px 10px", 
                          borderRadius: 6, 
                          fontSize: "11px", 
                          fontWeight: 600 
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FloatingCard>
            </ElectricBorder>
          </div>

          {/* Right Column - Achievements */}
          <div>
            <h3 style={{ 
              color: "#fff", 
              fontWeight: 700, 
              fontSize: "clamp(18px, 4vw, 20px)", 
              marginBottom: "24px", 
              display: "flex", 
              alignItems: "center", 
              gap: "10px",
              flexWrap: "wrap"
            }}>
              <span style={{ 
                background: "linear-gradient(135deg,#fbbf24,#d97706)", 
                padding: "4px 10px", 
                borderRadius: 8, 
                fontSize: "12px",
                whiteSpace: "nowrap"
              }}>🏆</span>
              Achievements & Certifications
            </h3>

            {achievements.map((a, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: `3px solid ${a.color}`,
                  borderRadius: "0 14px 14px 0",
                  padding: "clamp(12px, 4vw, 16px) clamp(16px, 4vw, 20px)",
                  marginBottom: 14,
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexDirection: "row" }}>
                  <span style={{ fontSize: "clamp(20px, 5vw, 24px)", flexShrink: 0 }}>{a.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "10px", 
                      marginBottom: "4px", 
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center"
                    }}>
                      <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(14px, 4vw, 15px)", margin: 0 }}>{a.title}</h4>
                      <Badge color="purple">{a.year}</Badge>
                    </div>
                    <p style={{ color: a.color, fontSize: "12px", fontWeight: 600, margin: "0 0 6px" }}>{a.org}</p>
                    <p style={{ color: "#64748b", fontSize: "clamp(12px, 3.5vw, 13px)", lineHeight: 1.6, margin: 0 }}>{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Experience;