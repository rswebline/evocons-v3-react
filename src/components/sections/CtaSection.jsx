import Button from "../ui/Button";
import { homeContent } from "../../data/homeContent";

function CtaSection() {
const content = homeContent.ctaSection;

return (
<section className="cta-section">
    <div className="container">
        <div className="cta-section__content">
            <h2>{content.title}</h2>

            <p>{content.description}</p>

            <Button href={content.primaryButton.href}>
                {content.primaryButton.label}
            </Button>
        </div>
    </div>
</section>
);
}

export default CtaSection;