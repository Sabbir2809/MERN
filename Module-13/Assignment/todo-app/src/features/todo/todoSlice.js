import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteTodo: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
