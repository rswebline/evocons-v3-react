import ImageCard from "./ImageCard";

function ImageCardGrid({ items = [] }) {
  return (
    <div className="image-card-grid">
      {items.map((item) => (
        <ImageCard key={item.title} {...item} />
      ))}
    </div>
  );
}

export default ImageCardGrid;