import React from 'react';

/** SEMERS OS dropdown trigger (cosmetic — pairs with a real menu in product code). */
export function Select({ label, required, value, placeholder = 'Выбрать', error, style }) {
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
        background: 'var(--semers-surface)', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 11px', fontSize: 13, color: value ? 'var(--semers-ink)' : 'var(--semers-ink-muted)', cursor: 'pointer',
      }}>
        <span>{value || placeholder}</span>
        <span className="material-symbols-outlined" style={{ fontSize: 18, color: error ? 'var(--semers-red)' : 'var(--semers-ink-faint)' }}>expand_more</span>
      </div>
    </div>
  );
}
