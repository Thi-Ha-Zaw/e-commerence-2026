import React from "react";
import RateStar from "./RateStar";
import { Link, useNavigate } from "react-router";
import useCartStore from "../store/useCartStore";
import AddToCartBtn from "./AddToCartBtn";

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


  const {addToCart,carts} = useCartStore();

  const isAdded = carts.some((cart) => cart.productId === id);


  const navigate = useNavigate();

  const handleOpenDetail = () => {
    navigate(`/product-detail/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addToCart(newCart);
  };

  return (
    <div onClick={handleOpenDetail}>
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
          <AddToCartBtn handleAddToCart={handleAddToCart} isAdded={isAdded} productId={id} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
