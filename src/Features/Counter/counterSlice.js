import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 2;
    },
    decrement: (state) => {
      if (state.count <= 0) {
        state.count = 0;
      } else {
        state.count -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.count += state.action;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
