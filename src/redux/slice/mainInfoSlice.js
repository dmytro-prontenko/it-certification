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
        id: 1,
        specialty: {
          id: 1,
          name: "121",
        },
        name: "Назва програми",
        university: {
          id: 2,
          name: "Львівський національний університет",
        },
        education_level: {
          id: 100,
          name: "Бакалавр",
        },
        guarantor: "Гаранторенко Гарант Гарантович",
        department: {
          id: 3,
          url: "http://google.com",
          name: "Кафедра біоінформатики",
        },
        program_url: "http://google.com/program",
        syllabus_url: "http://google.com/sylabus",
      },
    ],
    pageNumber: 1,
    totalElements: 1,
  },
  serviceInfo: null,
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
        state.serviceInfo = action.payload;
      });
  },
});

export const mainInfoReducer = mainInfoSlice.reducer;
