import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Field label rendered above the control. */
  label?: string;
  /** Marks the field required (red asterisk). */
  required?: boolean;
  /** Inline validation message; turns the border red and shows an error row. */
  error?: string;
  /** Trailing Material Symbols Outlined icon (e.g. "calendar_today"). */
  icon?: string;
  /** Read-only fields use the beige fill (e.g. auto-generated Order ID). */
  readOnly?: boolean;
  style?: React.CSSProperties;
}

/** Labelled text field with inline validation, used across all SEMERS OS forms. */
export function Input(props: InputProps): JSX.Element;
