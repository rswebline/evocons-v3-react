import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="hero hero--image">
      <div className="hero__overlay"></div>

      <div className="container hero__inner">
        <p className="hero__eyebrow">Evocons per le PMI</p>

        <h1>Cybersecurity, AI e Data per PMI.</h1>

        <p className="hero__text">
          Soluzioni pratiche, misurabili e sicure per crescere nel digitale
          senza perdere controllo, tempo o fiducia.
        </p>

        <div className="hero__actions">
          <Button href="/servizi">Scopri i servizi</Button>
          <Button href="/contatti" variant="secondary">
            Parla con un consulente
          </Button>
        </div>

        <p className="hero__keywords">
          protezione <span>•</span> innovazione <span>•</span> misurabilità{" "}
          <span>•</span> fiducia
        </p>
      </div>
    </section>
  );
}

export default HeroSection;