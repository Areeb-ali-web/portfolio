"use client";

import { useState } from "react";
import { Section } from "../ui/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { FloatingCard } from "../ui/FloatingCard";

export function TechStack() {
  const [hovered, setHovered] = useState(null);

  const categories = [
    {
      name: "Frontend",
      icon: "🖥️",
      color: "#60a5fa",
      techs: [
        { name: "React", level: 90, desc: "5+ production projects" },
        { name: "Next.js", level: 85, desc: "SSR & SSG expert" },
        { name: "TypeScript", level: 80, desc: "Type-safe development" },
        { name: "Tailwind CSS", level: 95, desc: "All projects" },
        { name: "Framer Motion", level: 75, desc: "Complex animations" },
      ],
    },
    {
      name: "Backend",
      icon: "⚙️",
      color: "#34d399",
      techs: [
        { name: "Node.js", level: 85, desc: "REST & GraphQL APIs" },
        { name: "Express.js", level: 85, desc: "MVC architecture" },
        { name: "FastAPI", level: 70, desc: "ML microservices" },
        { name: "ASP.NET Core", level: 65, desc: "C# enterprise apps" },
      ],
    },
    {
      name: "Data & DevOps",
      icon: "🗄️",
      color: "#a78bfa",
      techs: [
        { name: "MongoDB", level: 85, desc: "Document databases" },
        { name: "MySQL", level: 80, desc: "Relational DBs (Advanced cert)" },
        { name: "Git & GitHub", level: 90, desc: "Version control" },
        { name: "Kali Linux", level: 70, desc: "Security testing" },
      ],
    },
  ];

  return (
    <Section id="techstack" style={{ background: "transparent" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader eyebrow="Tech Stack" title="Tools I Master" subtitle="Technologies I use to turn ideas into production-ready applications" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 28 }}>
          {categories.map((cat) => (
            <FloatingCard key={cat.name} glowColor={`${cat.color}20`}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{ fontSize: 24 }}>{cat.icon}</span>
                <h3 style={{ color: cat.color, fontWeight: 700, fontSize: 17, margin: 0 }}>{cat.name}</h3>
              </div>

              {cat.techs.map((tech) => (
                <div
                  key={tech.name}
                  style={{ marginBottom: 16 }}
                  onMouseEnter={() => setHovered(`${cat.name}-${tech.name}`)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ color: "#e2e8f0", fontSize: 14, fontWeight: 600 }}>{tech.name}</span>
                    <span style={{ color: "#64748b", fontSize: 12 }}>
                      {hovered === `${cat.name}-${tech.name}` ? tech.desc : `${tech.level}%`}
                    </span>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 99, height: 6, overflow: "hidden" }}>
                    <div
                      style={{
                        width: `${tech.level}%`,
                        height: "100%",
                        background: `linear-gradient(90deg,${cat.color},${cat.color}80)`,
                        borderRadius: 99,
                        transition: "width 1s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </FloatingCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
export default TechStack;