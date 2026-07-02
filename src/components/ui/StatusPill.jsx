export default function StatusPill({ label, bg, color }) {
  return (
    <span
      style={{
        fontSize: 11.5,
        fontWeight: 600,
        padding: '3px 10px',
        borderRadius: 'var(--r-pill)',
        background: bg,
        color,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}
