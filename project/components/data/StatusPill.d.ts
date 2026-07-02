import React from 'react';

export interface StatusPillProps {
  /** Semantic tone: ok=green, warn=amber, crit=red, info=slate-blue, neutral=cream. */
  tone?: 'ok' | 'warn' | 'crit' | 'info' | 'neutral';
  /** Optional leading Material Symbols icon. */
  icon?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Universal status chip used in every SEMERS OS table and header.
 * @startingPoint section="Data" subtitle="Semantic status chips" viewport="700x150"
 */
export function StatusPill(props: StatusPillProps): JSX.Element;
