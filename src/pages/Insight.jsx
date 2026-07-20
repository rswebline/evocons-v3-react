import PageHero from "../components/common/PageHero";
import SectionNavigation from "../components/navigation/SectionNavigation";
import CTASection from "../components/common/CTASection";
import SEO from "../components/common/SEO";
import InsightHub from "../components/insight/InsightHub";
import { insightPage } from "../data/pages/insight";

function Insight() {
  const {
    seo,
    hero,
    navigation,
    introduction,
    areas,
    sections,
    cta,
  } = insightPage;

  return (
    <>
      <SEO {...seo} />

      <PageHero {...hero} />

      <SectionNavigation
        currentLabel={navigation.currentLabel}
        items={navigation.items}
      />

      <InsightHub
        introduction={introduction}
        areas={areas}
        sections={sections}
      />

      <CTASection {...cta} />
    </>
  );
}

export default Insight;