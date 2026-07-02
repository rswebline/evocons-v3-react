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
import { academyPage } from "../data/pages/academy";

function Academy() {
  return (
    <>
      <PageHero {...academyPage.hero} />

      <SectionNavigation
        currentLabel={academyPage.navigation.currentLabel}
        items={academyPage.navigation.items}
      />

      <SectionIntro {...academyPage.intro} />

      <section className="section page-highlight">
        <div className="container">
          <ImageText variant="immersive" {...academyPage.highlight} />
        </div>
      </section>

      <QuotePanel variant="light" {...academyPage.quote} />

      <section className="section page-features">
        <div className="container">
          <SectionHeader {...academyPage.featuresSection} />
          <FeatureGrid items={academyPage.features} />
        </div>
      </section>

      <section className="section page-flow">
        <div className="container">
          <SectionHeader {...academyPage.flowSection} />
          <ServiceFlow items={academyPage.flow} />
        </div>
      </section>

      <KnowledgeHub
        header={academyPage.knowledgeHub.header}
        items={academyPage.knowledgeHub.items}
      />

      <CTASection {...academyPage.cta} />
    </>
  );
}

export default Academy;