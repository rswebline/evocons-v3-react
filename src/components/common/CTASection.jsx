import { Link } from "react-router-dom";

function CTASection({ eyebrow, title, text, buttonLabel, buttonPath }) {
  return (
    <section className="cta-section">
      <div className="container cta-section__inner">
        {eyebrow && <p className="cta-section__eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}

        {buttonLabel && buttonPath && (
          <Link to={buttonPath} className="cta-section__button">
            {buttonLabel}
          </Link>
        )}
      </div>
    </section>
  );
}

export default CTASection;