import { createSlice } from "@reduxjs/toolkit";
import { signInThunk, signUpThunk } from "../thunk/authThunks";

const initialState = {
  userData: {
    id_user: null,
    name: null,
    lastName: null,
    email: null,
    phone: null,
    avatarURL: null,
    isAdmin: false,
    city: null,
    novaPost_point: null,
  },
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmptyToken: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //=======signUp=========================//
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.userData = action.payload.userData;
        state.token = action.payload.token;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.userData = action.payload.userData;
        state.token = action.payload.token;
      });
  },
});

export const { setEmptyToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
