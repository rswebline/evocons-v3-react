import PageHero from "../components/common/PageHero";
import SectionNavigation from "../components/navigation/SectionNavigation";
import SectionIntro from "../components/common/SectionIntro";
import SectionHeader from "../components/common/SectionHeader";
import FeatureGrid from "../components/common/FeatureGrid";
import QuotePanel from "../components/common/QuotePanel";
import CTASection from "../components/common/CTASection";

import { contactsPage } from "../data/pages/contacts";

function Contacts() {
  return (
    <>
      <PageHero {...contactsPage.hero} />

      <SectionNavigation
        currentLabel={contactsPage.navigation.currentLabel}
        items={contactsPage.navigation.items}
      />

      <SectionIntro {...contactsPage.intro} />

      <section className="section">
        <div className="container">
          <SectionHeader {...contactsPage.contactsSection} />
          <FeatureGrid items={contactsPage.contacts} />
        </div>
      </section>

      <QuotePanel {...contactsPage.quote} />

      <CTASection {...contactsPage.cta} />
    </>
  );
}

export default Contacts;