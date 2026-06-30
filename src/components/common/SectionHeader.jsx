function SectionHeader({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <header className={`section-header section-header--${align}`}>
      {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </header>
  );
}

export default SectionHeader;