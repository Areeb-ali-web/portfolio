export function GradientText({ children, className = "" }) {
  return (
    <span
      className={className}
      style={{
        background: "linear-gradient(135deg, #a78bfa, #60a5fa, #34d399)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}