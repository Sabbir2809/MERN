import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  // 1. state
  name: "settings",
  initialState: { loader: "d-none" },

  // reducer function(action)
  reducers: {
    showLoader: (state) => {
      state.loader = "";
    },
    hideLoader: (state) => {
      state.loader = "d-none";
    },
  },
});

export const { showLoader, hideLoader } = settingsSlice.actions;
export default settingsSlice.reducer;
