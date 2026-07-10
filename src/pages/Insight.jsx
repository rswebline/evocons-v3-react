import PageHero from "../components/common/PageHero";
import SectionNavigation from "../components/navigation/SectionNavigation";
import SectionIntro from "../components/common/SectionIntro";
import QuotePanel from "../components/common/QuotePanel";
import CTASection from "../components/common/CTASection";
import { insightPage } from "../data/pages/insight";
import SEO from "../components/common/SEO";


function Insight() {
  return (
    <>
      <SEO {...insightPage.seo} />
      <PageHero {...insightPage.hero} />

      <SectionNavigation
        currentLabel={insightPage.navigation.currentLabel}
        items={insightPage.navigation.items}
      />

      <SectionIntro {...insightPage.intro} />

      <QuotePanel variant="light" {...insightPage.quote} />

      <CTASection {...insightPage.cta} />
    </>
  );
}

export default Insight;