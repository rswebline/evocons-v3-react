import { Link } from "react-router-dom";

const icons = {
  ai: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 3a3 3 0 0 0-3 3v.2A3.5 3.5 0 0 0 4.5 12 3.5 3.5 0 0 0 6 17.8V18a3 3 0 0 0 5 2.2V3.8A3 3 0 0 0 9 3Z" />
      <path d="M15 3a3 3 0 0 1 3 3v.2A3.5 3.5 0 0 1 19.5 12a3.5 3.5 0 0 1-1.5 5.8V18a3 3 0 0 1-5 2.2V3.8A3 3 0 0 1 15 3Z" />
      <path d="M9 8H7.5M15 8h1.5M9 16H7.5M15 16h1.5M12 6v12" />
    </svg>
  ),

  cyber: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.8 2.8 8.1 7 10 4.2-1.9 7-5.2 7-10V6l-7-3Z" />
    </svg>
  ),

  academy: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M7 11.5V16c3 2.2 7 2.2 10 0v-4.5M21 9v6" />
    </svg>
  ),

  transformation: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 21V8h6v13M14 21V3h6v18M2 21h20" />
      <path d="M7 12h0M7 16h0M17 7h0M17 11h0M17 15h0" />
    </svg>
  ),

  arrow: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),

  download: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  ),
};

function AreaCard({ area }) {
  return (
    <article className="insight-area">
      <div
        className={`insight-area__icon insight-area__icon--${area.icon}`}
      >
        {icons[area.icon]}
      </div>

      <div className="insight-area__content">
        <h3>{area.title}</h3>
        <p>{area.text}</p>

        {area.meta && (
          <span className="insight-area__meta">{area.meta}</span>
        )}
      </div>
    </article>
  );
}

function ContentCard({ item }) {
  const cardContent = (
    <>
      <div className="insight-card__media">
        <img
          src={item.image}
          alt={item.imageAlt || ""}
          loading="lazy"
        />

        <span className="insight-card__type">
          {item.typeLabel}
        </span>
      </div>

      <div className="insight-card__body">
        <h3>{item.title}</h3>

        {item.text && <p>{item.text}</p>}

        <div className="insight-card__footer">
          <span>{item.linkLabel}</span>

          <span className="insight-card__arrow">
            {item.download ? icons.download : icons.arrow}
          </span>
        </div>
      </div>
    </>
  );

  if (!item.path || item.path === "#") {
    return (
      <article className="insight-card insight-card--placeholder">
        {cardContent}
      </article>
    );
  }

  if (item.external) {
    return (
      <a
        className="insight-card"
        href={item.path}
        target="_blank"
        rel="noreferrer"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link className="insight-card" to={item.path}>
      {cardContent}
    </Link>
  );
}

function ContentSection({ section }) {
  return (
    <section
      className="insight-content-section"
      aria-labelledby={`insight-section-${section.id}`}
    >
      <div className="insight-content-section__header">
        <div>
          {section.eyebrow && (
            <span className="insight-content-section__eyebrow">
              {section.eyebrow}
            </span>
          )}

          <h2 id={`insight-section-${section.id}`}>
            {section.title}
          </h2>
        </div>

        {section.linkLabel && section.linkPath && (
          <Link
            className="insight-content-section__link"
            to={section.linkPath}
          >
            {section.linkLabel}
            {icons.arrow}
          </Link>
        )}
      </div>

      <div
        className={`insight-content-grid insight-content-grid--${section.items.length}`}
      >
        {section.items.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function InsightHub({ introduction, areas = [], sections = [] }) {
  return (
    <main className="insight-hub">
      <section className="insight-hub__introduction">
        <div className="container insight-hub__intro-grid">
          <div className="insight-hub__intro-copy">
            {introduction.eyebrow && (
              <span className="insight-hub__eyebrow">
                {introduction.eyebrow}
              </span>
            )}

            <h2>{introduction.title}</h2>
            <p>{introduction.text}</p>

            {introduction.linkLabel &&
              introduction.linkPath && (
                <Link
                  className="insight-hub__intro-link"
                  to={introduction.linkPath}
                >
                  {introduction.linkLabel}
                  {icons.arrow}
                </Link>
              )}
          </div>

          <div className="insight-areas">
            {areas.map((area) => (
              <AreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>

      <div className="container insight-hub__content">
        {sections.map((section) => (
          <ContentSection
            key={section.id}
            section={section}
          />
        ))}
      </div>
    </main>
  );
}

export default InsightHub;