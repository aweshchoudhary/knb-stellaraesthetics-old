import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:
    JSON.parse(
      sessionStorage.getItem(
        "oidc.user:https://au.stellaraesthetics.in/:206769574157323753@authentication_with_react"
      )
    ) || {},
  isUserAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticatedUser(state) {
      state.isUserAuthenticated = !state.isUserAuthenticated;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setAuthenticatedUser, setUser } = authSlice.actions;
export default authSlice.reducer;
