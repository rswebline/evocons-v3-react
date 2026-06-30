function Timeline({ items = [] }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline__item" key={item.year}>
          <div className="timeline__marker">
            <span>{item.year}</span>
          </div>

          <div className="timeline__content">
            <p className="timeline__eyebrow">{item.label}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Timeline;