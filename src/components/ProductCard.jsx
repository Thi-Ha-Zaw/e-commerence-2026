import React from "react";
import RateStar from "./RateStar";
import { Link } from "react-router";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate },
  },
}) => {
  const currentRate = rate.toFixed(0);
  let length = 5;
  const numbers = Array.from({ length }, (_, i) => i + 1);

  return (
    <Link to={`/product-detail/${id}`}>
      <div className=" cursor-pointer shadow-sm border-gray-50 border rounded-sm p-5 flex flex-col gap-4 h-full">
        <img src={image} alt="" className=" h-28 object-contain" />
        <p className=" text-gray-900 text-sm text-center truncate">{title}</p>
        <div className=" flex items-center justify-center gap-1">
          {numbers.map((number) => (
            <RateStar key={number} rate={currentRate >= number ? 1 : 0.5} />
          ))}
        </div>
        <div className=" flex items-center justify-between gap-2 mt-auto">
          <p className=" text-lg font-bold">${price}</p>
          <button className=" shadow-sm border border-indigo-600 text-indigo-600 py-1 px-3 rounded-sm hover:bg-indigo-600 hover:text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
