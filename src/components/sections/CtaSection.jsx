import Button from "../ui/Button";

function CtaSection() {
  return (
    <section
      className="cta-section"
      aria-labelledby="cta-section-title"
      aria-describedby="cta-section-text"
    >
      <div className="container cta-section__content">
        <p className="cta-section__eyebrow">Inizia da una conversazione</p>

        <h2 id="cta-section-title">
          Hai già investito in tecnologia. Ora trasformiamola in risultati.
        </h2>

        <p id="cta-section-text" className="cta-section__text">
          Confrontiamoci su obiettivi, priorità e opportunità concrete per la tua
          organizzazione.
        </p>

        <div
          className="cta-section__actions"
          role="group"
          aria-label="Azioni principali"
        >
          <Button href="/contatti">Parla con un consulente</Button>

          <Button href="/servizi" variant="secondary">
            Esplora i servizi
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
