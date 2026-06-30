import FeatureCard from "./FeatureCard";

function FeatureGrid({ items = [] }) {
  return (
    <div className="feature-grid">
      {items.map((item) => (
        <FeatureCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}

export default FeatureGrid;