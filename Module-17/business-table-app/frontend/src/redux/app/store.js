import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import settingsReducer from "../features/settingsSlice";

export default configureStore({
  reducer: {
    settings: settingsReducer,
    product: productReducer,
  },
});
