import PageHero from "../components/common/PageHero";
import SectionNavigation from "../components/navigation/SectionNavigation";
import { aboutPage } from "../data/pages/about";

function About() {
  return (
    <>
      <PageHero {...aboutPage.hero} />

      <SectionNavigation
        currentLabel={aboutPage.navigation.currentLabel}
        items={aboutPage.navigation.items}
      />

      <section className="section">
        <div className="container">
          <p>
            Qui inizierà la storia di Evocons, con la timeline iconografica che
            recupereremo e miglioreremo dalla versione attuale del sito.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;