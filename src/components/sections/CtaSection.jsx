import Button from "../ui/Button";

function CtaSection({
  eyebrow = "Inizia da una conversazione",
  title,
  text,
  buttonLabel,
  buttonPath,
  secondaryButtonLabel,
  secondaryButtonPath,
}) {
  return (
    <section
      className="cta-section"
      aria-labelledby="cta-section-title"
      aria-describedby="cta-section-text"
    >
      <div className="container cta-section__content">
        {eyebrow && (
          <p className="cta-section__eyebrow">{eyebrow}</p>
        )}

        <h2 id="cta-section-title">{title}</h2>

        <p id="cta-section-text" className="cta-section__text">
          {text}
        </p>

        <div
          className="cta-section__actions"
          role="group"
          aria-label="Azioni principali"
        >
          <Button href={buttonPath}>
            {buttonLabel}
          </Button>

          {secondaryButtonLabel && secondaryButtonPath && (
            <Button href={secondaryButtonPath} variant="secondary">
              {secondaryButtonLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default CtaSection;