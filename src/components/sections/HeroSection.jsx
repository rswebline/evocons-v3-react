import Button from '../ui/Button';

function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <p className="eyebrow">Consulenza, formazione e innovazione digitale</p>

        <h1>
          Evolviamo competenze, processi e tecnologie per far crescere le imprese.
        </h1>

        <p>
          Evocons accompagna aziende e professionisti nei percorsi di trasformazione
          digitale, con un approccio concreto, sostenibile e orientato ai risultati.
        </p>

        <Button href="/contatti">
          Contattaci
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;