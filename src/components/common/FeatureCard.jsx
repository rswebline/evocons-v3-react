function FeatureCard({ icon, title, text }) {
  return (
    <article className="feature-card">
      {icon && <div className="feature-card__icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default FeatureCard;