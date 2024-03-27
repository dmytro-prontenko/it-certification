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
        id: "1",
        name: "доцент",
      },
    ],
    degree: [
      {
        id: "1",
        name: "phd",
      },
    ],
    university: [
      {
        id: "1",
        name: "Харківський національний університет ім.Каразіна",
        abbr: "ХНУ",
        department: [
          {
            id: "1",
            name: "Інформаційні технології",
          },
        ],
      },
      {
        id: "2",
        name: "Харківський національний університет ім.Каразіна2",
        abbr: "ХНУ2",
        department: [
          {
            id: "1",
            name: "Інформаційні технології2",
          },
        ],
      },
    ],
    specialty: [
      {
        id: "",
        code: "",
        name: "",
      },
    ],
    educationLevels: [
      {
        id: "",
        name: "",
      },
    ],
    discipline: [
      {
        id: "",
        name: "",
      },
    ],
    disciplineGroups: [
      {
        id: "",
        name: "",
      },
    ],
    disciplineBlocks: [
      {
        id: "",
        name: "",
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
