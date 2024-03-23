import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getData } from "../../service/api";

//================= getThunk =================//
export const getTeachersThunk = createAsyncThunk(
  "data/getTeachers",
  async (getParams, thunkAPI) => {
    try {
      const response = await getData({ endPoint: "/teachers", getParams });
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
  async (getParams, thunkAPI) => {
    try {
      const response = await getData({ endPoint: "/specialty/", getParams });
      return response;
    } catch (error) {
      console.log(error);
      toast.error("Error get specialty:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================= postThunk =================//
