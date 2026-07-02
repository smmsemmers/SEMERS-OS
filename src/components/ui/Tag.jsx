export default function Tag({ children }) {
  return (
    <span
      style={{
        fontSize: 11.5,
        fontWeight: 500,
        padding: '3px 11px',
        borderRadius: 6,
        background: '#F0ECE3',
        color: 'var(--sub)',
      }}
    >
      {children}
    </span>
  );
}
