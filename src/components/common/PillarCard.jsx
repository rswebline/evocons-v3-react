import { Link } from "react-router-dom";

function PillarCard({ value, title, text }) {
  return (
    <article className="pillar-card">
      {value && <p className="pillar-card__value">{value}</p>}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default PillarCard;