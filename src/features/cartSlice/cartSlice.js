import { createSlice } from "@reduxjs/toolkit";
import { sumQuantity, sumPrice } from "../../components/helpers/helpers";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  totalPrice: 0,
  checkOut: false,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.totalPrice = sumPrice(state.selectedItems);
      state.checkOut = false;
    },

    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.totalPrice = sumPrice(state.selectedItems);
    },

    increaseItem: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.totalPrice = sumPrice(state.selectedItems);
    },

    decreaseItem: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.totalPrice = sumPrice(state.selectedItems);
    },

    checkOut: (state) => {
      state.checkOut = true;
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, increaseItem, decreaseItem, checkOut } =
  cartSlice.actions;
