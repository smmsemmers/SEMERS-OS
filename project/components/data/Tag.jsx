import React from 'react';

/** Neutral metadata tag — SKU attributes (size, packaging, language). */
export function Tag({ children, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontSize: 11.5, fontWeight: 500, padding: '3px 11px', borderRadius: 'var(--radius-xs)',
      background: 'var(--semers-surface-cream)', color: 'var(--semers-ink-sub)', whiteSpace: 'nowrap', ...style,
    }}>{children}</span>
  );
}
