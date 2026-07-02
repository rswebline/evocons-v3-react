function QuotePanel({
  quote,
  author,
  variant = "dark",
}) {
  return (
    <section className={`quote-panel quote-panel--${variant}`}>
      <div className="container quote-panel__inner">
        <blockquote>
          {quote.split("\n").map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </blockquote>

        {author && <p>{author}</p>}
      </div>
    </section>
  );
}

export default QuotePanel;