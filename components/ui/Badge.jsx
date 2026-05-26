export function Badge({ children, color = "purple" }) {
  const colors = {
    purple: { bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.3)", text: "#a78bfa" },
    cyan: { bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.3)", text: "#22d3ee" },
    green: { bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.3)", text: "#34d399" },
    amber: { bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.3)", text: "#fbbf24" },
  };
  const c = colors[color] || colors.purple;
  
  return (
    <span
      style={{
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.text,
        padding: "3px 10px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}