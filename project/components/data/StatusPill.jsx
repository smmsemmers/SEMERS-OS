import React from 'react';

const MAP = {
  ok:   { bg: 'var(--semers-green-soft)', fg: 'var(--semers-green-ink)' },
  warn: { bg: 'var(--semers-amber-soft)', fg: 'var(--semers-amber-ink)' },
  crit: { bg: 'var(--semers-red-soft)',   fg: 'var(--semers-red-ink)' },
  info: { bg: 'var(--semers-slate-soft)', fg: 'var(--semers-slate-ink)' },
  neutral: { bg: 'var(--semers-surface-cream)', fg: 'var(--semers-ink-sub)' },
};

/** Status pill — the universal state chip across SEMERS OS tables. */
export function StatusPill({ tone = 'neutral', icon, children, style }) {
  const c = MAP[tone] || MAP.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      fontSize: 11.5, fontWeight: 600, padding: '3px 10px', borderRadius: 'var(--radius-pill)',
      background: c.bg, color: c.fg, whiteSpace: 'nowrap', ...style,
    }}>
      {icon ? <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{icon}</span> : null}
      {children}
    </span>
  );
}
