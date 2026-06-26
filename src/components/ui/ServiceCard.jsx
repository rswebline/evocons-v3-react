function ServiceCard({ title, description }) {
  return (
    <article className="service-card">
      <div className="service-card__marker" aria-hidden="true" />

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="service-card__link">Scopri di più →</span>
    </article>
  );
}

export default ServiceCard;