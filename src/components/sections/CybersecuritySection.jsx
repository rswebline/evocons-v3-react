import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import FeaturePanel from "../ui/FeaturePanel";
import { homeContent } from "../../data/pages/home";

function CybersecuritySection() {
  const content = homeContent.cybersecuritySection;

  return (
    <section className="feature-section feature-section--cybersecurity" id="cybersecurity">
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
          tags={["Risk Assessment", "Security Awareness", "Business Continuity"]}
        />
      </div>
    </section>
  );
}

export default CybersecuritySection;