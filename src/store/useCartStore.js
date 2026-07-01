import { create } from "zustand";

const useCartStore = create((set)=>({
    carts : [{
        id: 1,
        productId: 1,
        quantity: 2,
    },{
        id: 2,
        productId: 2,
        quantity: 2,
    }],

    increaseQuantity: (id) => set((state) => ({
        carts: state.carts.map((cart) => cart.id == id ? {...cart, quantity: cart.quantity + 1} : cart),
    })),

    decreaseQuantity: (id) => set((state) => ({
        carts: state.carts.map((cart) => cart.id == id ? {...cart, quantity: cart.quantity - 1} : cart),
    })),

    addToCart: (newCart) => set((state) => ({
        carts: [...state.carts, newCart],
    })),

    removeCart: (id) => set((state) => ({
        carts: state.carts.filter((cart) => cart.id != id),
    })),

}))

export default useCartStore;