import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import Timeline from "../components/common/Timeline";
import FeatureGrid from "../components/common/FeatureGrid";
import PillarGrid from "../components/common/PillarGrid";
import ImageText from "../components/common/ImageText";
import CTASection from "../components/common/CTASection";
import { aboutPage } from "../data/pages/about";
import ImageCardGrid from "../components/common/ImageCardGrid";
import { servicesPage } from "../data/pages/services";


function DesignSystem() {
  return (
    <>
      <PageHero
        eyebrow="EVOCONS DESIGN SYSTEM"
        title="Componenti, pattern e linguaggio visivo"
        subtitle="Una pagina laboratorio per verificare e mantenere coerenti i componenti riutilizzabili del sito Evocons."
        image="/images/hero/about-hero.jpg"
        height="medium"
      />

      <section className="section design-system-block">
        <div className="container">
          <SectionHeader
            eyebrow="SectionHeader"
            title="Titolo di sezione"
            subtitle="Questo componente introduce le sezioni principali delle pagine interne."
          />
        </div>
      </section>

      <section className="section design-system-block design-system-block--light">
        <div className="container">
          <SectionHeader {...aboutPage.timelineSection} />
          <Timeline items={aboutPage.timeline} />
        </div>
      </section>

      <section className="section design-system-block">
        <div className="container">
          <SectionHeader {...aboutPage.approachSection} />
          <FeatureGrid items={aboutPage.approach} />
        </div>
      </section>

      <section className="section design-system-block design-system-block--light">
        <div className="container">
          <SectionHeader {...aboutPage.whySection} />
          <PillarGrid items={aboutPage.pillars} />
        </div>
      </section>

      <section className="section design-system-block">
  <div className="container">
    <SectionHeader
      eyebrow="ImageText — Light"
      title="Immagine e testo, semplice e pulito"
      subtitle="Pattern editoriale per raccontare metodo, servizi e contenuti di approfondimento."
    />

    <ImageText
      variant="light"
      eyebrow="Il nostro metodo"
      title="Accompagniamo il cambiamento, non vendiamo tecnologia."
      text="Ascoltiamo le persone, analizziamo i processi, costruiamo percorsi su misura e affianchiamo le organizzazioni fino al raggiungimento dei risultati."
      image="/images/hero/about-hero.jpg"
      imageAlt="Team Evocons al lavoro"
      buttonLabel="Scopri di più"
      buttonPath="/chi-siamo"
    />
  </div>
</section>

<section className="section design-system-block design-system-block--light">
  <div className="container">
    <SectionHeader
      eyebrow="ImageText — Immersive"
      title="Immagine e contenuto diventano un unico flusso"
      subtitle="Pattern più narrativo, utile per sezioni strategiche, metodo, servizi principali e pagine di posizionamento."
    />

    <ImageText
      variant="immersive"
      eyebrow="Consulenza e innovazione"
      title="Trasformiamo le idee in valore reale."
      text="Un approccio integrato che unisce strategia, tecnologia e competenze per generare impatto sostenibile nel tempo."
      image="/images/hero/about-hero.jpg"
      imageAlt="Team Evocons in una sessione di lavoro"
      buttonLabel="Scopri di più"
      buttonPath="/servizi"
    />
  </div>
</section>

<section className="section design-system-block">
  <div className="container">
    <SectionHeader
      eyebrow="ImageCard"
      title="Preview delle pagine interne"
      subtitle="Pattern per collegare aree, servizi, percorsi e contenuti del Knowledge Hub."
    />

    <ImageCardGrid items={servicesPage.areas} />
  </div>
</section>

      <CTASection {...aboutPage.cta} />
    </>
  );
}

export default DesignSystem;