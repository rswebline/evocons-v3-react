function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      {eyebrow && (
        <span className="section-header__eyebrow">
          {eyebrow}
        </span>
      )}

      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}
    </div>
  );
}

export default SectionHeader;