import ImageCardGrid from "./ImageCardGrid";

function KnowledgeHub({ header, items = [] }) {
  return (
    <section className="knowledge-hub">
      <div className="container">
        {header && (
          <header className="knowledge-hub__header">
            {header.eyebrow && <p>{header.eyebrow}</p>}
            <h2>{header.title}</h2>
            {header.subtitle && <span>{header.subtitle}</span>}
          </header>
        )}

        <ImageCardGrid items={items} />
      </div>
    </section>
  );
}

export default KnowledgeHub;