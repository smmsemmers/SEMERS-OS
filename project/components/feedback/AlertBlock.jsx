import React from 'react';

const MAP = {
  crit: { bg: 'var(--semers-red-soft)',   bd: 'var(--semers-red-border)',   fg: 'var(--semers-red-ink)',   ic: 'var(--semers-red)',   icon: 'error' },
  warn: { bg: 'var(--semers-amber-soft)', bd: 'var(--semers-amber-border)', fg: 'var(--semers-amber-ink)', ic: 'var(--semers-amber)', icon: 'warning' },
  info: { bg: 'var(--semers-slate-soft)', bd: 'var(--semers-slate-border)', fg: 'var(--semers-slate-ink)', ic: 'var(--semers-slate)', icon: 'info' },
  ok:   { bg: 'var(--semers-green-soft)', bd: '#BBD4A3',                    fg: 'var(--semers-green-ink)', ic: 'var(--semers-green)', icon: 'check_circle' },
};

/** Alert / callout block — "что горит сегодня", red-flag rows, deficit warnings. */
export function AlertBlock({ tone = 'warn', title, children, action, icon, style }) {
  const c = MAP[tone] || MAP.warn;
  return (
    <div style={{
      display: 'flex', gap: 13, alignItems: 'flex-start',
      background: c.bg, border: `1px solid ${c.bd}`, borderRadius: 'var(--radius-xl)',
      padding: '14px 18px', ...style,
    }}>
      <span className="material-symbols-outlined" style={{ fontSize: 22, color: c.ic, marginTop: 1 }}>{icon || c.icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {title ? <div style={{ fontSize: 14, fontWeight: 600, color: c.fg }}>{title}</div> : null}
        {children ? <div style={{ fontSize: 12.5, color: c.fg, opacity: 0.85, marginTop: title ? 4 : 0, lineHeight: 1.45 }}>{children}</div> : null}
      </div>
      {action ? <div style={{ flex: 'none', alignSelf: 'center' }}>{action}</div> : null}
    </div>
  );
}
