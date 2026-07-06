import PageHero from "../components/common/PageHero";
import SectionIntro from "../components/common/SectionIntro";
import SectionHeader from "../components/common/SectionHeader";
import ImageText from "../components/common/ImageText";
import ImageCardGrid from "../components/common/ImageCardGrid";
import ServiceFlow from "../components/common/ServiceFlow";
import CTASection from "../components/sections/CtaSection";

import { homePage } from "../data/pages/home";

function Home() {
  return (
    <>
      <PageHero {...homePage.hero} />

<section className="home-intro">
  <SectionIntro {...homePage.intro} />
</section>

<section className="section home-highlight">
  <div className="container">
    <ImageText variant="immersive" {...homePage.highlight} />
  </div>
</section>

      <section className="section home-pillars">
        <div className="container">
          <SectionHeader {...homePage.pillarsSection} />
          <ImageCardGrid items={homePage.pillars} />
        </div>
      </section>

      <section className="section home-method">
        <div className="container">
          <SectionHeader {...homePage.methodSection} />
          <ServiceFlow items={homePage.method} />
        </div>
      </section>

      <CTASection {...homePage.cta} />
    </>
  );
}

export default Home;