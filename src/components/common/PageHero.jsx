function PageHero({
  eyebrow,
  title,
  mobileTitle,
  subtitle,
  image,
  height = "medium",
  className = "",
}) {
  return (
    <section
      className={`page-hero page-hero--${height} ${className}`}
      style={{ backgroundImage: `linear-gradient(90deg, rgba(5, 18, 35, 0.88), rgba(5, 18, 35, 0.35)), url(${image})` }}
    >
      <div className="page-hero__content">
        {eyebrow && <span className="page-hero__eyebrow">{eyebrow}</span>}

        <h1>
          <span className="page-hero__title-desktop">{title}</span>
          {mobileTitle && (
            <span className="page-hero__title-mobile">{mobileTitle}</span>
          )}
        </h1>

        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHero;