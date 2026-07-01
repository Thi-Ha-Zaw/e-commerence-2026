import React from "react";
import ProductCard from "../components/ProductCard";
import useProductStore from "../store/useProductStore";

const HomeBody = () => {

  const {products} = useProductStore();
  
  return (
    <section className=" mt-10">
      <h4 className=" text-lg mb-3 text-gray-800">Available Product Lists</h4>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((pd) => (
          <ProductCard key={pd.id} product={pd} />
        ))}
      </div>
    </section>
  );
};

export default HomeBody;
