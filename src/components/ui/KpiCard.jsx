import Icon from './Icon';

export default function KpiCard({ label, val, sub, icon, accent, compact }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: 'var(--r-kpi)',
        padding: compact ? '13px 14px' : '13px 15px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: accent }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
        <span style={{ fontSize: compact ? 11 : 11.5, color: '#7C7565', fontWeight: 500, lineHeight: 1.2 }}>{label}</span>
        <Icon name={icon} size={compact ? 17 : 18} color={accent} />
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: compact ? 22 : 25,
          fontWeight: 600,
          color: 'var(--ink)',
          lineHeight: 1,
          letterSpacing: '-.5px',
        }}
      >
        {val}
      </div>
      {sub && (
        <div style={{ fontSize: compact ? 10.5 : 11, color: 'var(--mut)', marginTop: compact ? 5 : 7, lineHeight: 1.35 }}>
          {sub}
        </div>
      )}
    </div>
  );
}
