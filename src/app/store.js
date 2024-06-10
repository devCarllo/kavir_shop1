import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/productsSlice/productsSlice";
import cartSlice from "../features/cartSlice/cartSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});

export default store;
export const selectProducts = (store) => store.products;
export const selectCart = (store) => store.cart;
