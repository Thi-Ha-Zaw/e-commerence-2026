import React from "react";
import { useParams } from "react-router";
import RateStar from "../components/RateStar";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import AddToCartBtn from "../components/AddToCartBtn";

const ProductDetail = () => {
  const { products } = useProductStore();
  const { productId } = useParams();
  const { carts,addToCart } = useCartStore();
  const currentProduct = products.find((pd) => pd.id == productId);

  const currentRate = currentProduct.rating.rate.toFixed(0);
  let length = 5;
  const numbers = Array.from({ length }, (_, i) => i + 1);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };
    addToCart(newCart);
  };
  return (
    <div className=" w-full lg:w-[60%] mx-0 lg:mx-auto flex justify-start lg:justify-center flex-col h-full ">
      <div className=" flex gap-3 flex-col md:flex-row  md:gap-20 border border-gray-100 shadow p-15 rounded">
        <div className=" w-full md:w-1/2 flex justify-start md:justify-end">
          <img src={currentProduct.image} alt="" className=" w-64" />
        </div>
        <div className=" w-full md:w-1/2 flex flex-col gap-5">
          <h1 className=" text-2xl font-bold pt-5">{currentProduct.title}</h1>
          <p className=" bg-gray-200 p-2 rounded shadow-sm text-gray-800">
            {currentProduct.category}
          </p>
          <p className=" text-gray-800 font-mono">
            {currentProduct.description}
          </p>
          <div className=" flex gap-1">
            {numbers.map((number) => (
              <RateStar key={number} rate={currentRate >= number ? 1 : 0.5} />
            ))}
          </div>
          <div className=" flex items-center justify-between gap-2">
            <p className=" text-lg font-bold">${currentProduct.price}</p>
            <AddToCartBtn
              handleAddToCart={handleAddToCart}
              isAdded={carts.some(
                (cart) => cart.productId === currentProduct.id,
              )}
              productId={currentProduct.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
