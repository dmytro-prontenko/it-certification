import { createSlice } from "@reduxjs/toolkit";
import { getSpecialtyThunk, getTeachersThunk } from "../thunk/mainInfoThunks";

const initialState = {
  teachers: [],
  specialty: [],
};

const mainInfoSlice = createSlice({
  name: "mainInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeachersThunk.fulfilled, (state, action) => {
        state.teachers = action.payload;
      })
      .addCase(getSpecialtyThunk.fulfilled, (state, action) => {
        state.specialty = action.payload;
      });
  },
});

export const mainInfoReducer = mainInfoSlice.reducer;
