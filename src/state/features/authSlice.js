import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isUserAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticatedUser(state, action) {
      state.isUserAuthenticated = Boolean(action.payload);
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setAuthenticatedUser, setUser } = authSlice.actions;
export default authSlice.reducer;
