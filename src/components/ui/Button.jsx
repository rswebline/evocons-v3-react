function Button({ children, href = '#', variant = 'primary' }) {
  return (
    <a
      href={href}
      className={`btn btn--${variant}`}
    >
      {children}
    </a>
  );
}

export default Button;