import PageHero from "../components/common/PageHero";
import SectionIntro from "../components/common/SectionIntro";
import SectionHeader from "../components/common/SectionHeader";
import ImageText from "../components/common/ImageText";
import FeatureGrid from "../components/common/FeatureGrid";
import ServiceFlow from "../components/common/ServiceFlow";
import CTASection from "../components/common/CTASection";
import SectionNavigation from "../components/navigation/SectionNavigation";
import { aiPage } from "../data/pages/ai";
import QuotePanel from "../components/common/QuotePanel";
import KnowledgeHub from "../components/common/KnowledgeHub";
import SEO from "../components/common/SEO";

function AIDataAnalytics() {
  return (
    <>
      <SEO {...aiPage.seo} />
      <PageHero {...aiPage.hero} />

      <SectionNavigation
        currentLabel={aiPage.navigation.currentLabel}
        items={aiPage.navigation.items}
      />

      <SectionIntro {...aiPage.intro} />

      <QuotePanel
        variant="light"
        {...aiPage.quote}
      />
      
      <section className="section page-highlight">
        <div className="container">
          <ImageText variant="immersive" {...aiPage.highlight} />
        </div>
      </section>


      <section className="section page-features">
        <div className="container">
          <SectionHeader {...aiPage.featuresSection} />
          <FeatureGrid items={aiPage.features} />
        </div>
      </section>

      <section className="section page-flow">
        <div className="container">
          <SectionHeader {...aiPage.flowSection} />
          <ServiceFlow items={aiPage.flow} />
        </div>
      </section>

      <KnowledgeHub
        header={aiPage.knowledgeHub.header}
        items={aiPage.knowledgeHub.items}
      />

      <CTASection {...aiPage.cta} />
    </>
  );
}

export default AIDataAnalytics;