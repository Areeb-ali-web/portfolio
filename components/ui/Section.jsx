export function Section({ id, children, style = {} }) {
  return (
    <section
      id={id}
      style={{
        position: "relative",
        padding: "80px 0",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </section>
  );
}