export const RatingStars = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, i) => (
      <span key={i}>{i < Math.round(rating) ? "★" : "☆"}</span>
    ));
    return <div className="text-yellow-500">{stars}</div>;
  };
  