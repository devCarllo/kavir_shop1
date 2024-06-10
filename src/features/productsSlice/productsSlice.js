import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/config";

const initialState = {
  isLoading: true,
  products: [],
  error: "",
};

const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  return api.get("/products");
});

const productsSlice = createSlice({
  name: "products",

  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
      state.error = "pending";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      (state.isLoading = false),
        (state.products = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      (state.isLoading = true),
        (state.products = []),
        (state.error = action.error.message);
    });
  },
});

export default productsSlice.reducer;
export { fetchProducts };
