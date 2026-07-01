import React from "react";
import useCartStore from "../store/useCartStore";
import Swal from "sweetalert2";

const CartRow = ({ cart: { id, productId, quantity }, products }) => {
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    }
  };

  const handleRemoveCart = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
  };
  return (
    <li className="flex py-6">
      <div className="size-24 flex justify-center items-center shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={products.find((product) => product.id === productId).image}
          className=" size-18  object-contain"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              {products.find((product) => product.id === productId).title}
            </h3>
            <p className="ml-4">
              ${products.find((product) => product.id === productId).price}
            </p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            {products.find((product) => product.id === productId).category}
          </p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className=" flex gap-3">
            <div className="flex gap-2.5 items-center">
              <button
                onClick={handleIncreaseQuantity}
                className=" border size-6 shadow-sm text-center border-gray-400 text-gray-700 cursor-pointer rounded-full"
              >
                +
              </button>
              <span className=" text-gray-700">{quantity}</span>
              <button
                onClick={handleDecreaseQuantity}
                className=" border size-6 shadow-sm text-center border-gray-400 text-gray-700 cursor-pointer rounded-full"
              >
                -
              </button>
            </div>
          </div>

          <div className="flex">
            <button
              onClick={handleRemoveCart}
              className="font-medium text-indigo-600 hover:text-indigo-500 underline cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartRow;
