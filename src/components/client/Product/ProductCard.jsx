import { RatingStars } from "./RatingStars";
import { PriceTag } from "./PriceTag";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="block bg-white shadow rounded-lg p-4 hover:shadow-md transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <h2 className="text-lg font-bold">{product.name}</h2>
      <RatingStars rating={product.rating} />
      <PriceTag price={product.price} />
    </Link>
  );
};
