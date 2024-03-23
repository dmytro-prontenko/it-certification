import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addData, editData, getData } from "../../service/api";

//================= getThunk =================//
export const getTableDataThunk = createAsyncThunk(
  "data/getData",
  async ({ endPoint, getParams }, thunkAPI) => {
    try {
      const response = await getData({ endPoint, getParams });
      return response;
    } catch (error) {
      console.log(error);
      toast.error(`Error get ${endPoint} : `, error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================= addThunk =================//

export const addTableDataThunk = createAsyncThunk(
  "data/addData",
  async ({ endPoint, postData, postParams }, thunkAPI) => {
    try {
      const response = await addData({ endPoint, postData, postParams });
      return response;
    } catch (error) {
      console.log(error);
      toast.error(`Error add ${endPoint} : `, error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//================= editThunk =================//

export const editTableDataThunk = createAsyncThunk(
  "data/editData",
  async ({ endPoint, postData, postParams }, thunkAPI) => {
    try {
      const response = await editData({ endPoint, postData, postParams });
      return response;
    } catch (error) {
      console.log(error);
      toast.error(`Error edit ${endPoint} : `, error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
