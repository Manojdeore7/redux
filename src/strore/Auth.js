import { createSlice } from "@reduxjs/toolkit";

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
export default AuthSlice;
export const sliceAuthActions = AuthSlice.actions;
