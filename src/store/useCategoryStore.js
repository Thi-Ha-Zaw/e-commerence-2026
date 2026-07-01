import { create } from "zustand";

const useCategoryStore = create((set)=>({
     categories : [
    { id: 1, name: "all", isActive: true },
    { id: 2, name: "electronics", isActive: false },
    { id: 3, name: "jewellery", isActive: false },
    { id: 4, name: "men's clothings", isActive: false },
    { id: 5, name: "women's clothings", isActive: false }
],
 activeCategory: (categoryId) => set((state)=>({categories: state.categories.map((category)=>category.id === categoryId ? {...category, isActive: true} : {...category, isActive: false})}))
}))

export default useCategoryStore;