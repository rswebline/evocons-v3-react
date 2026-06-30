import PageHero from "../components/common/PageHero";
import Timeline from "../components/common/Timeline";
import SectionNavigation from "../components/navigation/SectionNavigation";
import { aboutPage } from "../data/pages/about";
import SectionHeader from "../components/common/SectionHeader";
import FeatureGrid from "../components/common/FeatureGrid";
import PillarGrid from "../components/common/PillarGrid";
import CTASection from "../components/common/CTASection";
import ImageText from "../components/common/ImageText";
import ImageCardGrid from "../components/common/ImageCardGrid";
import { internalAreas } from "../data/internalAreas";

function About() {
  return (
    <>
      <PageHero {...aboutPage.hero} />

      <SectionNavigation
        currentLabel={aboutPage.navigation.currentLabel}
        items={aboutPage.navigation.items}
      />

      <section className="section about-intro">
        <div className="container about-intro__grid">
          <div>
            <h2>{aboutPage.intro.title}</h2>
          </div>

          <div>
            <p>{aboutPage.intro.text}</p>
          </div>
        </div>
      </section>

      <section className="section about-timeline">
        <div className="container">
          <SectionHeader
            eyebrow={aboutPage.timelineSection.eyebrow}
            title={aboutPage.timelineSection.title}
            subtitle={aboutPage.timelineSection.text}
          />

          <Timeline items={aboutPage.timeline} />
        </div>
      </section>

      <section className="section about-approach" id="metodo">
        <div className="container">
          <SectionHeader {...aboutPage.approachSection} />
          <FeatureGrid items={aboutPage.approach} />
        </div>
      </section>

      <section className="section about-method-highlight">
        <div className="container">
          <ImageText
            variant="immersive"
            eyebrow="Consulenza e innovazione"
            title="Evocons accompagna il cambiamento, non vende tecnologia."
            text="Partiamo dall’ascolto, analizziamo processi e competenze, costruiamo percorsi concreti e affianchiamo le organizzazioni nella loro evoluzione digitale."
            image="/images/hero/about-hero.jpg"
            imageAlt="Team Evocons al lavoro"
            buttonLabel="Scopri i servizi"
            buttonPath="/servizi"
          />
        </div>
      </section>

      <section className="section about-areas">
        <div className="container">
          <SectionHeader
            eyebrow="Aree di intervento"
            title="Dove accompagniamo la trasformazione"
            subtitle="AI, Cybersecurity e Academy sono le aree attraverso cui Evocons aiuta imprese e professionisti a comprendere, progettare e governare il cambiamento."
          />

          <ImageCardGrid items={internalAreas} />
        </div>
      </section>

      <section className="section about-why" id="valori">
        <div className="container">
          <SectionHeader {...aboutPage.whySection} />
          <PillarGrid items={aboutPage.pillars} />
        </div>
      </section>

      <CTASection {...aboutPage.cta} />
      </>
  );
}

export default About;