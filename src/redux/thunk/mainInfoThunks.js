import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getData } from "../../service/api";

export const getTeacherThunk = createAsyncThunk(
  "data/getTeachers",
  async (_, thunkAPI) => {
    try {
      const response = await getData("/teachers");
      return response;
    } catch (error) {
      console.log(error);
      toast.error("Error get water for this day:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
