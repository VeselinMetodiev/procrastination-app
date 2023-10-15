import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../../constants/categories";

const initialState = {
  value: 0,
  categories: categories,
};

export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("increment");
      state.value += 1;
    },
    decrement: (state) => {
      console.log("decrement");
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = todos.actions;

export default todos.reducer;
