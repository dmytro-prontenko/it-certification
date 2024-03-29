import { createSlice } from "@reduxjs/toolkit";
import {
  addTableDataThunk,
  deleteTableDataThunk,
  editTableDataThunk,
  getTableDataThunk,
  serviceInfoThunk,
} from "../thunk/mainInfoThunks";

const initialState = {
  tableData: [],
  serviceInfo: {
    position: [
      {
        id: 1,
        name: "доцент",
      },
    ],
    degree: [
      {
        id: 2,
        name: "phd",
      },
    ],
    university: [
      {
        id: 3,
        name: "Харківський національний університет ім.Каразіна",
        abbr: "ХНУ",
        department: [
          {
            id: 4,
            name: "Інформаційні технології",
          },
        ],
      },
      {
        id: 5,
        name: "Харківський національний університет ім.Каразіна2",
        abbr: "ХНУ2",
        department: [
          {
            id: 6,
            name: "Інформаційні технології2",
          },
        ],
      },
    ],
    specialty: [
      {
        id: 1,
        code: " ",
        name: " ",
      },
    ],
    educationLevels: [
      {
        id: 1,
        name: " ",
      },
    ],
    discipline: [
      {
        id: 1,
        name: " ",
      },
    ],
    disciplineGroups: [
      {
        id: 1,
        name: " ",
      },
    ],
    disciplineBlocks: [
      {
        id: 1,
        name: " ",
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
      })
      .addCase(serviceInfoThunk.fulfilled, (state, action) => {
        state.serviceInfo = { ...action.payload.serviceInfo };
      });
  },
});

export const mainInfoReducer = mainInfoSlice.reducer;
