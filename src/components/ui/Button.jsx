import Icon from './Icon';

const VARIANTS = {
  primary: { background: 'var(--green)', border: 'none', color: '#fff' },
  secondary: { background: '#fff', border: '1px solid var(--input-border)', color: '#5A5448' },
  ghost: { background: 'transparent', border: 'none', color: 'var(--green)' },
  destructive: { background: 'var(--red)', border: 'none', color: '#fff' },
};

export default function Button({ variant = 'primary', icon, children, height = 38, style, ...rest }) {
  const v = VARIANTS[variant];
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        height,
        padding: '0 16px',
        borderRadius: 'var(--r-button)',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 600,
        cursor: 'pointer',
        ...v,
        ...style,
      }}
      {...rest}
    >
      {icon && <Icon name={icon} size={18} />}
      {children}
    </button>
  );
}
