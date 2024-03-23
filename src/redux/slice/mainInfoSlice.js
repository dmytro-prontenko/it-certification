import { createSlice } from "@reduxjs/toolkit";
import {
  addTableDataThunk,
  editTableDataThunk,
  getTableDataThunk,
} from "../thunk/mainInfoThunks";

const initialState = {
  tableData: [],
};

const mainInfoSlice = createSlice({
  name: "mainInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTableDataThunk.fulfilled, (state, action) => {
        state.tableData = action.payload;
      })
      .addCase(addTableDataThunk.fulfilled, (state, action) => {
        state.tableData = action.payload;
      })
      .addCase(editTableDataThunk.fulfilled, (state, action) => {
        state.tableData = action.payload;
      });
  },
});

export const mainInfoReducer = mainInfoSlice.reducer;
