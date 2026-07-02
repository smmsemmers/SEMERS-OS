import React from 'react';

/**
 * SEMERS OS text input with label, optional error (inline validation),
 * and optional trailing Material Symbols icon (e.g. calendar).
 */
export function Input({ label, required, error, value, placeholder, icon, readOnly, style, ...rest }) {
  const borderColor = error ? 'var(--semers-red)' : 'var(--semers-line-input)';
  return (
    <div style={style}>
      {label ? (
        <label style={{ display: 'block', fontSize: 11.5, color: 'var(--semers-ink-sub)', fontWeight: 500, marginBottom: 5 }}>
          {label}{required ? <span style={{ color: 'var(--semers-red)' }}> *</span> : null}
        </label>
      ) : null}
      <div style={{
        height: 38, border: `${error ? 1.5 : 1}px solid ${borderColor}`, borderRadius: 'var(--radius-sm)',
        background: readOnly ? 'var(--semers-beige)' : 'var(--semers-surface)',
        display: 'flex', alignItems: 'center', gap: 7, padding: '0 11px',
      }}>
        <input
          value={value} placeholder={placeholder} readOnly={readOnly} {...rest}
          style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--semers-ink)', minWidth: 0 }}
        />
        {icon ? <span className="material-symbols-outlined" style={{ fontSize: 17, color: 'var(--semers-ink-faint)' }}>{icon}</span> : null}
      </div>
      {error ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, fontSize: 11, color: 'var(--semers-red)' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>error</span>{error}
        </div>
      ) : null}
    </div>
  );
}
