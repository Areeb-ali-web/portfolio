export function LogoMarquee() {
  const techs = ["React", "Next.js", "Node.js", "TypeScript", "Python", "MongoDB", "Tailwind CSS", "Express", "C#", "ASP.NET", "Framer Motion", "GSAP", "FastAPI", "Kali Linux"];
  const doubled = [...techs, ...techs];

  return (
    <div style={{ background: "transparent", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "20px 0", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(90deg,#07070f,transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(270deg,#07070f,transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ display: "flex", gap: 0, animation: "marquee 30s linear infinite", width: "max-content" }}>
        {doubled.map((t, i) => (
          <div
            key={i}
            style={{
              padding: "6px 28px",
              color: i % 3 === 0 ? "#a78bfa" : i % 3 === 1 ? "#60a5fa" : "#34d399",
              fontSize: 13,
              fontWeight: 600,
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoMarquee;