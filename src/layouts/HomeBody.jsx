import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product";

const HomeBody = () => {
  
  return (
    <section className=" mt-10">
      <h4 className=" text-lg mb-3 text-gray-800">Available Product Lists</h4>
      <div className=" grid grid-cols-4 gap-8">
        {products.map((pd) => (
          <ProductCard key={pd.id} product={pd} />
        ))}
      </div>
    </section>
  );
};

export default HomeBody;
