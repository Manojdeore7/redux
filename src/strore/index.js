import { createSlice, configureStore } from "@reduxjs/toolkit";

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
let initialAuthState = {
  isAuthenticated: false,
};
let AuthSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
let store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer },
});
export const sliceCounterActions = counterSlice.actions;
export const sliceAuthActions = AuthSlice.actions;
export default store;
