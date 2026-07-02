import React from 'react';

export interface SelectProps {
  label?: string;
  required?: boolean;
  /** Selected value text; empty shows the muted placeholder. */
  value?: string;
  placeholder?: string;
  /** Inline validation message; turns border red. */
  error?: string;
  style?: React.CSSProperties;
}

/** Dropdown trigger styled to match Input; cosmetic shell for menus. */
export function Select(props: SelectProps): JSX.Element;
