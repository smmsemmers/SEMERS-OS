import React from 'react';

export interface AlertBlockProps {
  /** Severity: crit/warn/info/ok. Sets colors + default icon. */
  tone?: 'crit' | 'warn' | 'info' | 'ok';
  title?: string;
  children?: React.ReactNode;
  /** Right-aligned action node (usually a Button). */
  action?: React.ReactNode;
  /** Override the default icon for the tone. */
  icon?: string;
  style?: React.CSSProperties;
}

/**
 * Callout banner for urgent context — deficits, overdue shipments, red flags.
 * @startingPoint section="Feedback" subtitle="Urgent callout banner" viewport="700x150"
 */
export function AlertBlock(props: AlertBlockProps): JSX.Element;
