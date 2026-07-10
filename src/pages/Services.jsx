import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import ImageText from "../components/common/ImageText";
import ImageCardGrid from "../components/common/ImageCardGrid";
import CTASection from "../components/common/CTASection";
import SectionNavigation from "../components/navigation/SectionNavigation";
import { servicesPage } from "../data/pages/services";
import SectionIntro from "../components/common/SectionIntro";
import ServiceFlow from "../components/common/ServiceFlow";
import SEO from "../components/common/SEO";

function Services() {
  return (
    <>
      <SEO {...servicesPage.seo} />
      <PageHero {...servicesPage.hero} />

      <SectionNavigation
        currentLabel={servicesPage.navigation.currentLabel}
        items={servicesPage.navigation.items}
      />

      <SectionIntro {...servicesPage.intro} />

      <section className="section services-highlight">
        <div className="container">
          <ImageText variant="immersive" {...servicesPage.highlight} />
        </div>
      </section>

      <section className="section services-areas">
        <div className="container">
          <SectionHeader {...servicesPage.areasSection} />
          <ImageCardGrid items={servicesPage.areas} />
        </div>
      </section>

      <section className="section services-flow">
        <div className="container">
          <SectionHeader {...servicesPage.flowSection}/>
          <ServiceFlow items={servicesPage.flow}/>
        </div>
      </section>

      <CTASection {...servicesPage.cta} />
    </>
  );
}

export default Services;