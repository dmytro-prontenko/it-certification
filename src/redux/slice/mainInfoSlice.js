import { createSlice } from "@reduxjs/toolkit";
import {
  addTableDataThunk,
  deleteTableDataThunk,
  editTableDataThunk,
  getTableDataThunk,
} from "../thunk/mainInfoThunks";

const initialState = {
  tableData: [],
  serviceInfo: [
    {
      position: [],
      degree: [],
      university:[],
      universityAbbr:[],
      cathedra:[],
      specNum:[],
      specName:[],
      educationLevel:[],
      disciplineName:[],
      disciplineBlockName:[],
      disciplineGroupName:[],
    },
  ],
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
      })
      .addCase(deleteTableDataThunk.fulfilled, (state, action) => {
        state.tableData = action.payload;
      });
  },
});

export const mainInfoReducer = mainInfoSlice.reducer;
