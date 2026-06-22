import React from "react";
import { useParams } from "react-router";
import { products } from "../data/product";
import RateStar from "../components/RateStar";

const ProductDetail = () => {
  const { productId } = useParams();
  const currentProduct = products.find((pd) => pd.id == productId);

  const currentRate = currentProduct.rating.rate.toFixed(0);
  let length = 5;
  const numbers = Array.from({ length }, (_, i) => i + 1);

  console.log(currentProduct);
  return (
    <div className=" w-[60%] mx-auto flex justify-center flex-col h-full ">
      <div className=" flex gap-20 border border-gray-100 shadow p-15 rounded">
        <div className=" w-1/2 flex justify-end">
          <img src={currentProduct.image} alt="" className=" w-64" />
        </div>
        <div className=" w-1/2 flex flex-col gap-5">
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
            <button className=" cursor-pointer shadow-sm border border-indigo-600 text-indigo-600 py-1 px-3 rounded-sm hover:bg-indigo-600 hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
