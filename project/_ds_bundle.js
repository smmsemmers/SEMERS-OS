/* SEMERS OS Design System — browser bundle.
   Exposes all component primitives on window.SemersDS (plain React.createElement,
   no build step). Used by the *.card.html specimens; product code should import the
   .jsx sources in /components instead. Requires React + tokens (styles.css). */
(function (global) {
  const React = global.React;
  const h = React.createElement;
  const ms = (name, style) => h('span', { className: 'material-symbols-outlined', style }, name);

  function Button({ variant = 'primary', size = 'md', icon, disabled, children, style, ...rest }) {
    const hgt = size === 'sm' ? 34 : 40;
    const base = {
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7,
      height: hgt, padding: size === 'sm' ? '0 13px' : '0 16px', borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      border: '1px solid transparent', whiteSpace: 'nowrap',
    };
    const variants = {
      primary: { background: 'var(--semers-green)', color: '#fff' },
      secondary: { background: 'var(--semers-surface)', color: 'var(--semers-ink-sub)', borderColor: 'var(--semers-line-input)' },
      ghost: { background: 'transparent', color: 'var(--semers-green)' },
      destructive: { background: 'var(--semers-red)', color: '#fff' },
    };
    return h('button', { disabled, style: { ...base, ...variants[variant], ...style }, ...rest },
      icon ? ms(icon, { fontSize: size === 'sm' ? 17 : 18 }) : null, children);
  }

  function Input({ label, required, error, value, placeholder, icon, readOnly, style, ...rest }) {
    const borderColor = error ? 'var(--semers-red)' : 'var(--semers-line-input)';
    return h('div', { style },
      label ? h('label', { style: { display: 'block', fontSize: 11.5, color: 'var(--semers-ink-sub)', fontWeight: 500, marginBottom: 5 } },
        label, required ? h('span', { style: { color: 'var(--semers-red)' } }, ' *') : null) : null,
      h('div', { style: { height: 38, border: `${error ? 1.5 : 1}px solid ${borderColor}`, borderRadius: 'var(--radius-sm)',
        background: readOnly ? 'var(--semers-beige)' : 'var(--semers-surface)', display: 'flex', alignItems: 'center', gap: 7, padding: '0 11px' } },
        h('input', { value, placeholder, readOnly, ...rest, style: { flex: 1, border: 'none', outline: 'none', background: 'transparent',
          fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--semers-ink)', minWidth: 0 } }),
        icon ? ms(icon, { fontSize: 17, color: 'var(--semers-ink-faint)' }) : null),
      error ? h('div', { style: { display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, fontSize: 11, color: 'var(--semers-red)' } },
        ms('error', { fontSize: 14 }), error) : null);
  }

  function Select({ label, required, value, placeholder = 'Выбрать', error, style }) {
    const borderColor = error ? 'var(--semers-red)' : 'var(--semers-line-input)';
    return h('div', { style },
      label ? h('label', { style: { display: 'block', fontSize: 11.5, color: 'var(--semers-ink-sub)', fontWeight: 500, marginBottom: 5 } },
        label, required ? h('span', { style: { color: 'var(--semers-red)' } }, ' *') : null) : null,
      h('div', { style: { height: 38, border: `${error ? 1.5 : 1}px solid ${borderColor}`, borderRadius: 'var(--radius-sm)',
        background: 'var(--semers-surface)', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 11px', fontSize: 13, color: value ? 'var(--semers-ink)' : 'var(--semers-ink-muted)', cursor: 'pointer' } },
        h('span', null, value || placeholder),
        ms('expand_more', { fontSize: 18, color: error ? 'var(--semers-red)' : 'var(--semers-ink-faint)' })));
  }

  const PILL = {
    ok: { bg: 'var(--semers-green-soft)', fg: 'var(--semers-green-ink)' },
    warn: { bg: 'var(--semers-amber-soft)', fg: 'var(--semers-amber-ink)' },
    crit: { bg: 'var(--semers-red-soft)', fg: 'var(--semers-red-ink)' },
    info: { bg: 'var(--semers-slate-soft)', fg: 'var(--semers-slate-ink)' },
    neutral: { bg: 'var(--semers-surface-cream)', fg: 'var(--semers-ink-sub)' },
  };
  function StatusPill({ tone = 'neutral', icon, children, style }) {
    const c = PILL[tone] || PILL.neutral;
    return h('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11.5, fontWeight: 600,
      padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: c.bg, color: c.fg, whiteSpace: 'nowrap', ...style } },
      icon ? ms(icon, { fontSize: 14 }) : null, children);
  }

  function Tag({ children, style }) {
    return h('span', { style: { display: 'inline-flex', alignItems: 'center', fontSize: 11.5, fontWeight: 500,
      padding: '3px 11px', borderRadius: 'var(--radius-xs)', background: 'var(--semers-surface-cream)',
      color: 'var(--semers-ink-sub)', whiteSpace: 'nowrap', ...style } }, children);
  }

  const ACCENT = { ok: 'var(--semers-green)', warn: 'var(--semers-amber)', crit: 'var(--semers-red)', info: 'var(--semers-slate)' };
  function KpiCard({ label, value, sub, tone = 'info', icon, style }) {
    const accent = ACCENT[tone] || ACCENT.info;
    return h('div', { style: { background: 'var(--semers-surface)', border: '1px solid var(--semers-line)',
      borderRadius: 'var(--radius-lg)', padding: '13px 15px', position: 'relative', overflow: 'hidden', ...style } },
      h('div', { style: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: accent } }),
      h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 } },
        h('span', { style: { fontSize: 11.5, color: 'var(--semers-ink-sub)', fontWeight: 500 } }, label),
        icon ? ms(icon, { fontSize: 18, color: accent }) : null),
      h('div', { style: { fontFamily: 'var(--font-mono)', fontSize: 25, fontWeight: 600, color: 'var(--semers-ink)', lineHeight: 1, letterSpacing: '-.5px' } }, value),
      sub ? h('div', { style: { fontSize: 11, color: 'var(--semers-ink-muted)', marginTop: 7, lineHeight: 1.35 } }, sub) : null);
  }

  const ALERT = {
    crit: { bg: 'var(--semers-red-soft)', bd: 'var(--semers-red-border)', fg: 'var(--semers-red-ink)', ic: 'var(--semers-red)', icon: 'error' },
    warn: { bg: 'var(--semers-amber-soft)', bd: 'var(--semers-amber-border)', fg: 'var(--semers-amber-ink)', ic: 'var(--semers-amber)', icon: 'warning' },
    info: { bg: 'var(--semers-slate-soft)', bd: 'var(--semers-slate-border)', fg: 'var(--semers-slate-ink)', ic: 'var(--semers-slate)', icon: 'info' },
    ok: { bg: 'var(--semers-green-soft)', bd: '#BBD4A3', fg: 'var(--semers-green-ink)', ic: 'var(--semers-green)', icon: 'check_circle' },
  };
  function AlertBlock({ tone = 'warn', title, children, action, icon, style }) {
    const c = ALERT[tone] || ALERT.warn;
    return h('div', { style: { display: 'flex', gap: 13, alignItems: 'flex-start', background: c.bg,
      border: `1px solid ${c.bd}`, borderRadius: 'var(--radius-xl)', padding: '14px 18px', ...style } },
      ms(icon || c.icon, { fontSize: 22, color: c.ic, marginTop: 1 }),
      h('div', { style: { flex: 1, minWidth: 0 } },
        title ? h('div', { style: { fontSize: 14, fontWeight: 600, color: c.fg } }, title) : null,
        children ? h('div', { style: { fontSize: 12.5, color: c.fg, opacity: 0.85, marginTop: title ? 4 : 0, lineHeight: 1.45 } }, children) : null),
      action ? h('div', { style: { flex: 'none', alignSelf: 'center' } }, action) : null);
  }

  global.SemersDS = { Button, Input, Select, StatusPill, Tag, KpiCard, AlertBlock };
})(window);
