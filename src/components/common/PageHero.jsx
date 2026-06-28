function PageHero({ eyebrow, title, subtitle, image, height = "medium" }) {
  return (
    <section
      className={`page-hero page-hero--${height}`}
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(7, 19, 38, 0.96) 0%,
            rgba(7, 19, 38, 0.82) 34%,
            rgba(7, 19, 38, 0.42) 68%,
            rgba(7, 19, 38, 0.18) 100%
          ),
          url(${image})
        `,
      }}
    >
      <div className="container page-hero__content">
        {eyebrow && <span className="page-hero__eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHero;