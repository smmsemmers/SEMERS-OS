import React from 'react';

const ACCENT = {
  ok:   'var(--semers-green)', warn: 'var(--semers-amber)',
  crit: 'var(--semers-red)',   info: 'var(--semers-slate)',
};

/** KPI card — the metric tile used across every SEMERS OS dashboard. */
export function KpiCard({ label, value, sub, tone = 'info', icon, style }) {
  const accent = ACCENT[tone] || ACCENT.info;
  return (
    <div style={{
      background: 'var(--semers-surface)', border: '1px solid var(--semers-line)',
      borderRadius: 'var(--radius-lg)', padding: '13px 15px', position: 'relative', overflow: 'hidden', ...style,
    }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: accent }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
        <span style={{ fontSize: 11.5, color: 'var(--semers-ink-sub)', fontWeight: 500 }}>{label}</span>
        {icon ? <span className="material-symbols-outlined" style={{ fontSize: 18, color: accent }}>{icon}</span> : null}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 25, fontWeight: 600, color: 'var(--semers-ink)', lineHeight: 1, letterSpacing: '-.5px' }}>{value}</div>
      {sub ? <div style={{ fontSize: 11, color: 'var(--semers-ink-muted)', marginTop: 7, lineHeight: 1.35 }}>{sub}</div> : null}
    </div>
  );
}
