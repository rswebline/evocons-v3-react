import PageHero from "../components/common/PageHero";
import SectionIntro from "../components/common/SectionIntro";
import SectionHeader from "../components/common/SectionHeader";
import ImageText from "../components/common/ImageText";
import FeatureGrid from "../components/common/FeatureGrid";
import ServiceFlow from "../components/common/ServiceFlow";
import CTASection from "../components/common/CTASection";
import SectionNavigation from "../components/navigation/SectionNavigation";
import QuotePanel from "../components/common/QuotePanel";
import KnowledgeHub from "../components/common/KnowledgeHub";
import { cybersecurityPage } from "../data/pages/cybersecurity";
import SEO from "../components/common/SEO";

function Cybersecurity() {
  return (
    <>
      <SEO {...cybersecurityPage.seo} />
      <PageHero {...cybersecurityPage.hero} />

      <SectionNavigation
        currentLabel={cybersecurityPage.navigation.currentLabel}
        items={cybersecurityPage.navigation.items}
      />

      <SectionIntro {...cybersecurityPage.intro} />

      <section className="section page-highlight">
        <div className="container">
          <ImageText variant="immersive" {...cybersecurityPage.highlight} />
        </div>
      </section>

      <QuotePanel variant="light" {...cybersecurityPage.quote} />

      <section className="section page-features">
        <div className="container">
          <SectionHeader {...cybersecurityPage.featuresSection} />
          <FeatureGrid items={cybersecurityPage.features} />
        </div>
      </section>

      <section className="section page-flow">
        <div className="container">
          <SectionHeader {...cybersecurityPage.flowSection} />
          <ServiceFlow items={cybersecurityPage.flow} />
        </div>
      </section>

      <KnowledgeHub
        header={cybersecurityPage.knowledgeHub.header}
        items={cybersecurityPage.knowledgeHub.items}
      />

      <CTASection {...cybersecurityPage.cta} />
    </>
  );
}

export default Cybersecurity;