"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    color: "#c8f565",
    items: [
      { name: "React", level: 90 },
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    label: "Backend",
    color: "#ff6b35",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express", level: 80 },
      { name: "Python / FastAPI", level: 70 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    label: "Databases & Tools",
    color: "#64b5f6",
    items: [
      { name: "MongoDB", level: 78 },
      { name: "MySQL", level: 80 },
      { name: "Git / GitHub", level: 85 },
      { name: "AWS Basics", level: 55 },
      { name: "Kali Linux", level: 60 },
    ],
  },
];

const certs = [
  { name: "SQL (Advanced)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/404609d40b11" },
  { name: "React (Basic)", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/f1b99b144d1c" },
  { name: "Cyber Security Intern", issuer: "NCAI Pakistan", url: null },
];

function Bar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="mono text-xs tracking-wide" style={{ color: "var(--text)" }}>{name}</span>
        <span className="mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-px relative" style={{ background: "var(--border)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 h-px"
          style={{ background: color }}
        />
        <motion.div
          initial={{ left: 0 }}
          animate={inView ? { left: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{ background: color, boxShadow: `0 0 8px ${color}` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="skills" className="px-8 md:px-16 py-24" style={{ background: "var(--surface)" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
          ✦ Capabilities
        </p>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none" style={{ color: "var(--text)" }}>
          SKILLS
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 mb-20">
        {categories.map((cat, ci) => (
          <div key={cat.label}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full" style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
              <span className="mono text-xs tracking-widest uppercase" style={{ color: cat.color }}>{cat.label}</span>
            </div>
            {cat.items.map((item, i) => (
              <Bar key={item.name} name={item.name} level={item.level} color={cat.color} delay={ci * 0.1 + i * 0.08} />
            ))}
          </div>
        ))}
      </div>

      {/* Certs */}
      <div>
        <p className="mono text-xs tracking-widest uppercase mb-8" style={{ color: "var(--muted)" }}>Certifications & Experience</p>
        <div className="flex flex-wrap gap-4">
          {certs.map((c) => (
            <a
              key={c.name}
              href={c.url || undefined}
              target={c.url ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-3 border px-5 py-3 transition-all duration-200"
              style={{ borderColor: "var(--border)", cursor: c.url ? "pointer" : "default" }}
              onMouseEnter={(e) => { if (c.url) { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; } }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
              <div>
                <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>{c.name}</div>
                <div className="mono text-xs" style={{ color: "var(--muted)" }}>{c.issuer}</div>
              </div>
              {c.url && <span className="mono text-xs ml-2" style={{ color: "var(--accent)" }}>↗</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
