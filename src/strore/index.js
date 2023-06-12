import { createSlice, configureStore } from "@reduxjs/toolkit";
let initialState = {
  counter: 0,
  show: true,
};
let counterSlice = createSlice({
  name: "counter",
  initialState,
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

let store = configureStore({
  reducer: counterSlice.reducer,
});
export const sliceActions = counterSlice.actions;
export default store;
