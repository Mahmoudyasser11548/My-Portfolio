export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 60px",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "rgba(232,232,240,0.45)",
          letterSpacing: "0.05em",
        }}
      >
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "#00ff88" }}>Mahmoud Yasser</span> — Built with
        precision.
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "rgba(232,232,240,0.45)",
          letterSpacing: "0.05em",
        }}
      >
        Assiut, Egypt &nbsp;·&nbsp;{" "}
        <span style={{ color: "#00ff88" }}>Open to opportunities</span>
      </span>
    </footer>
  );
}
