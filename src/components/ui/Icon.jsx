export default function Icon({ name, size = 20, color, style, ...rest }) {
  return (
    <span className="ms" style={{ fontSize: size, color, ...style }} {...rest}>
      {name}
    </span>
  );
}
