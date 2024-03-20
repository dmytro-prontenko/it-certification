import { createSlice } from "@reduxjs/toolkit";
import { getTeacherThunk } from "../thunk/mainInfoThunks";

const initialState = {
  teachers: [
    {
      id: 1,
      name: "Щербаков Олександр Всеволодович",
      role: "доцент",
      status: "к.т.н",
      email: "",
      details: "",
    },
    {
      id: 2,
      name: "Голубничий Дмитро Юрійович",
      role: " к.т.н.",
      status: "Доцент",
      email: "",
      details: "",
    },
    {
      id: 3,
      name: "Євстрат Дмитро Іванович",
      role: "доцент",
      status: "к.т.н.",
      email: "",
      details: "",
    },
    {
      id: 4,
      name: "Ляпота В.М.",
      role: "ст. викл.",
      status: "",
      email: "vitaliy.lyapota@nure.ua",
      details: "",
    },
  ],
};

const mainInfoSlice = createSlice({
  name: "mainInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeacherThunk.fulfilled, (state, action) => {
      state.teachers = action.payload;
    });
  },
});

export const mainInfoReducer = mainInfoSlice.reducer;
