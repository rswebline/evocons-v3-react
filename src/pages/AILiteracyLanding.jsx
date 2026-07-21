import SEO from "../components/common/SEO";
import { aiLiteracyPage } from "../data/pages/aiLiteracy";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
    >
      <path
        d="M5 12h14M14 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="23"
      height="23"
      fill="none"
    >
      <path
        d="M5 12.5l4 4L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AILiteracyLanding() {
  const {
    seo,
    hero,
    need,
    scenario,
    meaning,
    path,
    contents,
    cta,
  } = aiLiteracyPage;

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        url={seo.url}
      />

      <article className="ai-literacy-landing">
        <header
          className="ai-literacy-hero"
          style={{ "--ai-literacy-hero-image": `url(${hero.image})` }}
        >
          <div className="ai-literacy-shell ai-literacy-hero__grid">
            <div className="ai-literacy-hero__content">
              <p className="ai-literacy-eyebrow">{hero.eyebrow}</p>

              <h1>{hero.title}</h1>

              <p className="ai-literacy-hero__subtitle">{hero.subtitle}</p>

              <p className="ai-literacy-hero__text">{hero.text}</p>

              <div className="ai-literacy-hero__actions">
                <a
                  className="ai-literacy-button ai-literacy-button--primary"
                  href={hero.primaryCta.href}
                >
                  {hero.primaryCta.label}
                  <ArrowIcon />
                </a>

                <a
                  className="ai-literacy-button ai-literacy-button--ghost"
                  href={hero.secondaryCta.href}
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>

            <div className="ai-literacy-hero__visual" aria-hidden="true">
              <div className="ai-literacy-orbit ai-literacy-orbit--one" />
              <div className="ai-literacy-orbit ai-literacy-orbit--two" />
              <span className="ai-literacy-hero__glow" />
            </div>
          </div>
        </header>

        <section className="ai-literacy-section ai-literacy-need">
          <div className="ai-literacy-shell ai-literacy-need__grid">
            <div className="ai-literacy-need__copy">
              <p className="ai-literacy-eyebrow ai-literacy-eyebrow--dark">
                {need.eyebrow}
              </p>
              <h2>{need.title}</h2>
              <p className="ai-literacy-lead">{need.lead}</p>
              <p>{need.text}</p>
            </div>

            <aside className="ai-literacy-need__panel">
              <ul>
                {need.signals.map((signal) => (
                  <li key={signal}>
                    <span className="ai-literacy-icon">
                      <CheckIcon />
                    </span>
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>

              <p className="ai-literacy-need__takeaway">
                {need.takeaway}
              </p>
            </aside>
          </div>
        </section>

        <section className="ai-literacy-section ai-literacy-scenario">
          <div className="ai-literacy-shell">
            <p className="ai-literacy-eyebrow ai-literacy-eyebrow--center">
              {scenario.eyebrow}
            </p>

            <div className="ai-literacy-scenario__grid">
              {scenario.items.map((item, index) => (
                <article className="ai-literacy-scenario__item" key={item.title}>
                  <span className="ai-literacy-scenario__number">
                    0{index + 1}
                  </span>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.sourceLabel}
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-literacy-section ai-literacy-meaning">
          <div className="ai-literacy-shell ai-literacy-meaning__grid">
            <div className="ai-literacy-meaning__copy">
              <p className="ai-literacy-eyebrow ai-literacy-eyebrow--dark">
                {meaning.eyebrow}
              </p>
              <h2>{meaning.title}</h2>

              {meaning.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <a className="ai-literacy-text-link" href="#white-paper">
                Approfondisci nel White Paper
                <ArrowIcon />
              </a>
            </div>

            <div
              className="ai-literacy-model"
              aria-label="L'AI Literacy come relazione tra persone, processi e tecnologia"
            >
              <div className="ai-literacy-model__center">
                <strong>AI Literacy</strong>
                <span>Competenza organizzativa</span>
              </div>

              {meaning.model.map((item, index) => (
                <div
                  className={`ai-literacy-model__node ai-literacy-model__node--${
                    index + 1
                  }`}
                  key={item.title}
                >
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="ai-literacy-section ai-literacy-path"
          id="percorso"
        >
          <div className="ai-literacy-shell">
            <p className="ai-literacy-eyebrow ai-literacy-eyebrow--center">
              {path.eyebrow}
            </p>

            <ol className="ai-literacy-path__list">
              {path.steps.map((step) => (
                <li key={step.number}>
                  <span className="ai-literacy-path__number">
                    {step.number}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="ai-literacy-section ai-literacy-contents"
          id="white-paper"
        >
          <div className="ai-literacy-shell">
            <p className="ai-literacy-eyebrow ai-literacy-eyebrow--center">
              {contents.eyebrow}
            </p>

            <div className="ai-literacy-contents__grid">
              {contents.items.map((item, index) => (
                <article key={item.title}>
                  <span className="ai-literacy-contents__number">
                    0{index + 1}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ai-literacy-cta">
          <div className="ai-literacy-shell ai-literacy-cta__grid">
            <blockquote>{cta.quote}</blockquote>

            <div>
              <p>{cta.text}</p>
              <a
                className="ai-literacy-button ai-literacy-button--primary"
                href={cta.buttonHref}
              >
                {cta.buttonLabel}
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default AILiteracyLanding;
