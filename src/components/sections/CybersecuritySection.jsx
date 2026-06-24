import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { homeContent } from "../../data/homeContent";

function CybersecuritySection() {
  const content = homeContent.cybersecuritySection;

  return (
    <section className="feature-section feature-section--cybersecurity">
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

        <div className="feature-section__panel">
          <span>{content.panel.number}</span>
          <h3>{content.panel.title}</h3>
          <p>{content.panel.text}</p>
        </div>
      </div>
    </section>
  );
}

export default CybersecuritySection;