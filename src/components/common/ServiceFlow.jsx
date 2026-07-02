function ServiceFlow({ items = [] }) {
  return (
    <div className="service-flow">
      {items.map((item, index) => (
        <article className="service-flow__item" key={item.title}>
          <span className="service-flow__number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export default ServiceFlow;