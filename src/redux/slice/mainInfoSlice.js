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
        value: "доцент",
      },
    ],
    degree: [
      {
        id: "1",
        value: "phd",
      },
    ],
    university: [
      {
        id: "1",
        name: "Харківський національний університет ім.Каразіна",
        universityAbbr: "ХНУ",
        cathedra: [
          {
            id: "1",
            value: "Інформаційні технології",
          },
        ],
      },
      {
        id: "2",
        name: "Харківський національний університет ім.Каразіна2",
        universityAbbr: "ХНУ2",
        cathedra: [
          {
            id: "1",
            value: "Інформаційні технології2",
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
