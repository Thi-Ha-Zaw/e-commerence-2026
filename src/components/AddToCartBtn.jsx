import React from "react";
import useCartStore from "../store/useCartStore";
import Swal from "sweetalert2";

const AddToCartBtn = ({ handleAddToCart, isAdded, productId }) => {
  const { removeCart,carts } = useCartStore();

  const cartId = carts.find((cart) => cart.productId === productId)?.id;

  
  const handleRemoveCart = (e) => {
    e.stopPropagation();
    Swal.fire({
      title: "Are you sure to remove?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeCart(cartId);
        Swal.fire({
          title: "Removed!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <button
      onClick={isAdded ? handleRemoveCart : handleAddToCart}
      className={` ${isAdded ? " bg-indigo-600 text-gray-50" : " text-indigo-600"} shadow-sm border border-indigo-600 duration-200  py-1 px-3 rounded-sm hover:bg-indigo-600 hover:text-white`}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
