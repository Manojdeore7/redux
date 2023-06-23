import { createSlice } from "@reduxjs/toolkit";
let initialCounterState = {
  counter: 0,
  show: true,
};
let counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});
export default counterSlice;
export const sliceCounterActions = counterSlice.actions;
