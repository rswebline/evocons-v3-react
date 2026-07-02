import { Link } from "react-router-dom";

function ImageCard({ eyebrow, title, previewImage, imageAlt = "", path }) {
  return (
    <Link to={path} className="image-card">
      <div className="image-card__media">
        <img src={previewImage} alt={imageAlt} />
      </div>

      <div className="image-card__content">
        {eyebrow && <p>{eyebrow}</p>}
        <h3>{title}</h3>
        <span aria-hidden="true">→</span>
      </div>
    </Link>
  );
}

export default ImageCard;