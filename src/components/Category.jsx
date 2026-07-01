import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const Category = ({ category: { id, name, isActive } }) => {
  const { activeCategory } = useCategoryStore();

  const handleActiveCategory = () => {
    activeCategory(id);
  };
  return (
    <div
      onClick={handleActiveCategory}

      className={` ${isActive ? "bg-indigo-500 text-gray-50" : "text-gray-950"} border border-gray-50 shadow-sm rounded px-4 py-2 cursor-pointer active:scale-95 duration-200`}
    >
      {name}
    </div>
  );
};

export default Category;
