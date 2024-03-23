import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addData, getData } from "../../service/api";

//================= getThunk =================//
export const getTeachersThunk = createAsyncThunk(
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

// export const getSpecialtyThunk = createAsyncThunk(
//   "data/getSpecialty",
//   async (getParams, thunkAPI) => {
//     try {
//       const response = await getData({ endPoint: "/specialty/", getParams });
//       return response;
//     } catch (error) {
//       console.log(error);
//       toast.error("Error get specialty:", error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

//================= postThunk =================//

export const postTeachersThunk = createAsyncThunk(
  "data/postData",
  async ({ endPoint, postData, postParams }, thunkAPI) => {
    try {
      const response = await addData({ endPoint, postData, postParams });
      return response;
    } catch (error) {
      console.log(error);
      toast.error(`Error post ${endPoint} : `, error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
