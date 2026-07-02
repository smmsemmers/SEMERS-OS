import React from 'react';

export interface KpiCardProps {
  /** Metric name. */
  label: string;
  /** The number — rendered in IBM Plex Mono. */
  value: string;
  /** Supporting context line below the value. */
  sub?: string;
  /** Left accent + icon color: ok/warn/crit/info. */
  tone?: 'ok' | 'warn' | 'crit' | 'info';
  /** Material Symbols Outlined icon name. */
  icon?: string;
  style?: React.CSSProperties;
}

/**
 * Metric tile for SEMERS OS dashboards (laid out in 5- or 6-col grids).
 * @startingPoint section="Data" subtitle="Dashboard KPI tile" viewport="700x150"
 */
export function KpiCard(props: KpiCardProps): JSX.Element;
