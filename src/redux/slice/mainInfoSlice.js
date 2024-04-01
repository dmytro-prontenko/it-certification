import { createSlice } from "@reduxjs/toolkit";
import {
  addTableDataThunk,
  deleteTableDataThunk,
  editTableDataThunk,
  getTableDataThunk,
  serviceInfoThunk,
} from "../thunk/mainInfoThunks";

const initialState = {
  tableData: {
    content: [
      {
        id: 100,
        name: "Харківський національний університет",
        abbr: "ХНУ",
        programs_list_url: "http://google.com",
        url: "http://google.com",
      },
    ],
    pageNumber: 1,
    totalElements: 1,
  },
  serviceInfo: {
    position: [
      {
        id: 1,
        name: "професор",
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
            id: 1,
            name: "Кафедра",
          },
          {
            id: 2,
            name: "Кафедра2",
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
