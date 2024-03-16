import { createSlice } from "@reduxjs/toolkit";
import { signInThunk, signUpThunk } from "../thunk/authThunks";

const initialState = {
  userData: {
    id_user: null,
    name: "Dmytro",
    lastName: "Prontenko",
    email: "dprontenko@gmail.com",
    phone: "+380505253148",
    avatarURL: "U",
    isAdmin: false,
    city: "Kyiv",
    novaPost_point: "23",
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
