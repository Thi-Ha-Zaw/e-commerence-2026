import React from "react";

const Category = ({ category: { name, current } }) => {
  return (
    <div className={` ${current ? 'bg-indigo-500 text-gray-50' : 'text-gray-950'} border border-gray-50 shadow-sm rounded px-4 py-2 cursor-pointer active:scale-95`}>
      {name}
    </div>
  );
};

export default Category;
