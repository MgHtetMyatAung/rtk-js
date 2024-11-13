import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../services/endpoints/auth.api";
import { encryptToken } from "../../libs/crypto";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    isAuthenticated: false,
  },
  reducers: {
    systemLogout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        if (action.payload) {
          state.accessToken = encryptToken(action.payload.authToken);
          state.isAuthenticated = !!action.payload.authToken;
        }
      }
    );
  },
});

export const { systemLogout } = authSlice.actions;

export default authSlice.reducer;
