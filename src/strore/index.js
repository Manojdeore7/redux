import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter";
import AuthSlice from "./Auth";

let store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer },
});

export default store;
