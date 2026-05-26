"use client";

export default function Footer() {
  return (
    <footer
      className="px-8 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <span className="mono text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
        © 2025 Areeb Ali
      </span>
      <span className="mono text-xs" style={{ color: "var(--muted)" }}>
        Built with Next.js · Framer Motion · Tailwind CSS
      </span>
      <a
        href="#"
        className="mono text-xs tracking-widest uppercase transition-colors duration-200"
        style={{ color: "var(--muted)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
      >
        Back to Top ↑
      </a>
    </footer>
  );
}
