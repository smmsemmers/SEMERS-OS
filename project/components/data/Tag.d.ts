import React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Neutral square-cornered tag for attributes (vs. rounded StatusPill for state). */
export function Tag(props: TagProps): JSX.Element;
