import PillarCard from "./PillarCard";

function PillarGrid({ items = [] }) {
  return (
    <div className="pillar-grid">
      {items.map((item) => (
        <PillarCard
          key={item.title}
          value={item.value}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}

export default PillarGrid;