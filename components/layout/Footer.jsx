export function Footer() {
  return (
    <footer style={{
      background: "#030305",
      borderTop: "1px solid rgba(255,255,255,0.04)",
      padding: "40px 24px",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 8, letterSpacing: "-0.02em" }}>
          Areeb<span style={{ color: "#a78bfa" }}>.</span>
        </div>
        <p style={{ color: "#475569", fontSize: 13, marginBottom: 20 }}>
          Full Stack Developer · Lahore, Pakistan
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 24 }}>
          {["Home", "About", "Projects", "Experience", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ color: "#475569", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}>
              {l}
            </a>
          ))}
        </div>
        <div style={{ color: "#2d3748", fontSize: 12 }}>
          © 2026 Areeb Ali. Crafted with ❤️ and lots of ☕
        </div>
      </div>
    </footer>
  );
}