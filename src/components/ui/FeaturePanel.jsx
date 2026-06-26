function FeaturePanel({ number, title, text, tags = [] }) {
  return (
    <aside className="feature-panel">
      <span className="feature-panel__number">{number}</span>

      <h3>{title}</h3>

      <p>{text}</p>

      {tags.length > 0 && (
        <div className="feature-panel__tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
    </aside>
  );
}

export default FeaturePanel;