import React from 'react';

/**
 * SEMERS OS button. Variants: primary (apple green), secondary (outline),
 * ghost (text), destructive (red). Optional Material Symbols icon name.
 */
export function Button({ variant = 'primary', size = 'md', icon, disabled, children, style, ...rest }) {
  const h = size === 'sm' ? 34 : 40;
  const pad = size === 'sm' ? '0 13px' : '0 16px';
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7,
    height: h, padding: pad, borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
    border: '1px solid transparent', whiteSpace: 'nowrap', transition: 'filter .12s ease',
  };
  const variants = {
    primary:     { background: 'var(--semers-green)', color: '#fff' },
    secondary:   { background: 'var(--semers-surface)', color: 'var(--semers-ink-sub)', borderColor: 'var(--semers-line-input)' },
    ghost:       { background: 'transparent', color: 'var(--semers-green)' },
    destructive: { background: 'var(--semers-red)', color: '#fff' },
  };
  return (
    <button disabled={disabled} style={{ ...base, ...variants[variant], ...style }} {...rest}>
      {icon ? <span className="material-symbols-outlined" style={{ fontSize: size === 'sm' ? 17 : 18 }}>{icon}</span> : null}
      {children}
    </button>
  );
}
