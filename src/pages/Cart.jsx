import React, { useCallback } from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import CartRow from "../components/CartRow";

const Cart = () => {
  const { products } = useProductStore();
  const { carts,increaseQuantity, decreaseQuantity, removeCart } = useCartStore();

  const total = carts.reduce((acc, cart) => {
    const price = products.find(
      (product) => product.id === cart.productId,
    ).price;
    const cost = cart.quantity * price;
    return acc + cost;
  }, 0);




  return (
    <div>
      <div className=" bg-white shadow-xl">
        <div className="  px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="text-lg font-medium text-gray-900">
              Shopping cart
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {carts.map((cart) => (
                  <CartRow key={cart.id} cart={cart} products={products} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6 flex justify-end">
            <button className=" w-72 rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
