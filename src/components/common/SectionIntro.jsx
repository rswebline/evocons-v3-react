function SectionIntro({ eyebrow, title, text }) {
  return (
    <section className="section-intro">
      <div className="container">
        {eyebrow && <span className="section-intro__eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

export default SectionIntro;