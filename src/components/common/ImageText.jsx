import { Link } from "react-router-dom";

function ImageText({
  eyebrow,
  title,
  text,
  image,
  imageAlt = "",
  buttonLabel,
  buttonPath,
  reverse = false,
  variant = "light",
}) {
  return (
    <section
      className={`image-text image-text--${variant} ${
        reverse ? "image-text--reverse" : ""
      }`}
    >
      <div className="image-text__media">
        <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
      </div>

      <div className="image-text__content">
        {eyebrow && <p className="image-text__eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}

        {buttonLabel && buttonPath && (
          <Link to={buttonPath} className="image-text__button">
            {buttonLabel}
          </Link>
        )}
      </div>
    </section>
  );
}

export default ImageText;