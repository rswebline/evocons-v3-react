import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import FeaturePanel from "../ui/FeaturePanel";
import { homeContent } from "../../data/homeContent";

function AISection() {
  const content = homeContent.aiSection;

  return (
    <section className="feature-section feature-section--ai" id="ai-data-analytics">
      <div className="container feature-section__grid">
        <div className="feature-section__content">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />

          <ul className="feature-list">
            {content.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Button href={content.cta.href}>{content.cta.label}</Button>
        </div>

        <FeaturePanel
          number={content.panel.number}
          title={content.panel.title}
          text={content.panel.text}
          tags={["AI Readiness", "Data Strategy", "Business Value"]}
        />
      </div>
    </section>
  );
}

export default AISection;