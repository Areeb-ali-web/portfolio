import { Badge } from "./Badge";

export function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 60 }}>
      <div style={{ marginBottom: 12 }}>
        <Badge color="purple">{eyebrow}</Badge>
      </div>
      <h2
        style={{
          fontSize: "clamp(28px, 5vw, 44px)",
          fontWeight: 800,
          color: "#fff",
          margin: "0 0 12px",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: "#94a3b8", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
          {subtitle}
        </p>
      )}
      <div
        style={{
          width: 48,
          height: 3,
          background: "linear-gradient(90deg,#a78bfa,#60a5fa)",
          borderRadius: 99,
          margin: "20px auto 0",
        }}
      />
    </div>
  );
}