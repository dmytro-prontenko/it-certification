import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getData } from "../../service/api";

export const getTeachersThunk = createAsyncThunk(
  "data/getTeachers",
  async (_, thunkAPI) => {
    try {
      const response = await getData("/teachers");
      return response;
    } catch (error) {
      console.log(error);
      toast.error("Error get teachers:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSpecialtyThunk = createAsyncThunk(
  "data/getSpecialty",
  async (_, thunkAPI) => {
    try {
      const response = await getData("/specialty/");
      return response;
    } catch (error) {
      console.log(error);
      toast.error("Error get specialty:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
