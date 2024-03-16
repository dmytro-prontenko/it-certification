import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const mainInfoSlice = createSlice({
  name: "mainInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const mainInfoReducer = mainInfoSlice.reducer;
