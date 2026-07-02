import Icon from './Icon';
import { C } from '../../theme';

const TONES = {
  crit: { bg: C.redSoft, border: '#F1C9C0', ink: C.redInk, sub: '#8A4538', icon: C.red },
  warn: { bg: C.amberSoft, border: '#ECD6A8', ink: '#8A5A12', sub: '#8A6A2E', icon: C.amber },
  info: { bg: C.slateSoft, border: '#C9DAE2', ink: C.slateInk, sub: '#4E6675', icon: C.slateInk },
};

export default function AlertBlock({ tone = 'crit', icon, title, desc, action, compact }) {
  const t = TONES[tone];
  return (
    <div
      style={{
        background: t.bg,
        border: `1px solid ${t.border}`,
        borderRadius: 'var(--r-panel)',
        padding: compact ? '14px 20px' : '16px 20px',
        display: 'flex',
        gap: compact ? 13 : 14,
        alignItems: compact ? 'center' : 'flex-start',
      }}
    >
      <Icon name={icon} size={compact ? 22 : 24} color={t.icon} />
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontSize: compact ? 14 : 15, fontWeight: 600, color: t.ink }}>{title}</div>}
        {desc && <div style={{ fontSize: compact ? 13 : 12.5, color: t.sub, marginTop: title ? 4 : 0, lineHeight: 1.45 }}>{desc}</div>}
      </div>
      {action}
    </div>
  );
}
