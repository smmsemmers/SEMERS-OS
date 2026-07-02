import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual intent. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  /** Control height: md (40px) default, sm (34px) for toolbars/filters. */
  size?: 'md' | 'sm';
  /** Material Symbols Outlined icon name, rendered before the label. */
  icon?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * Primary action button for SEMERS OS.
 * @startingPoint section="Forms" subtitle="Primary / secondary / ghost / destructive" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
