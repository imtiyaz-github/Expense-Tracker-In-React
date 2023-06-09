import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: localStorage.getItem("isLoggedIn") === "true",
  token: localStorage.getItem("token2"),
  userEmail: localStorage.getItem("email2"),
};

const AuthSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true

        state.token = action.payload.token
        state.userEmail = action.payload.userEmail
        localStorage.setItem("token2", action.payload.token);
      localStorage.setItem("email2", action.payload.userEmail);
      localStorage.setItem("isLoggedIn", true);
    },

    logout(state) {
       state.isAuthenticated = false
       state.token = null
      localStorage.removeItem("token2");
      localStorage.removeItem("email2");
      localStorage.removeItem("isLoggedIn", false);
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
