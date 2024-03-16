import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, signUp } from "../../service/api";
import { toast } from "react-toastify";

export const signUpThunk = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await signUp(userData);
      return response;
    } catch (error) {
      toast.error(`Email is already in use`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await signIn(userData);
      return response;
    } catch (error) {
      toast.error(`Incorrect email or password`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);