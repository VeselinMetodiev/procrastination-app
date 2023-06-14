import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
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
