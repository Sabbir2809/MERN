import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  // 1. state
  name: "product",
  initialState: {
    total: [],
    allProduct: [],
  },

  // reducer function(action)
  reducers: {
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setAllProduct: (state, action) => {
      state.allProduct = action.payload;
    },
  },
});

export const { setTotal, setAllProduct } = productSlice.actions;
export default productSlice.reducer;
