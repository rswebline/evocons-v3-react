import SectionHeader from "../ui/SectionHeader";
import { homeContent } from "../../data/homeContent";

function MethodSection() {
  const content = homeContent.methodSection;

  return (
    <section className="method-section">
      <div className="container">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="method-grid">
          {content.steps.map((step) => (
            <article className="method-card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MethodSection;