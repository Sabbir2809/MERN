import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      if (state.value === 0) return;
      state.value--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
