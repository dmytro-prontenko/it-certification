import { createSlice } from "@reduxjs/toolkit";
import {
  addTableDataThunk,
  deleteTableDataThunk,
  editTableDataThunk,
  getTableDataThunk,
} from "../thunk/mainInfoThunks";

const initialState = {
  tableData: [],
  serviceInfo: {
    position: [
      {
        id: "",
        value: "",
      },
    ],
    degree: [
      {
        id: "",
        value: "",
      },
    ],
    university: [
      {
        id: "",
        name: "",
        universityAbbr: "",
        cathedra: [
          {
            id: "",
            value: "",
          },
        ],
      },
    ],
    specialty: [
      {
        id: "",
        specialtyNum: "",
        specialtyName: "",
      },
    ],
    educationLevel: [
      {
        id: "",
        value: "",
      },
    ],
    disciplineName: [
      {
        id: "",
        value: "",
      },
    ],
    disciplineBlockName: [
      {
        id: "",
        value: "",
      },
    ],
    disciplineGroupName: [
      {
        id: "",
        value: "",
      },
    ],
  },
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
