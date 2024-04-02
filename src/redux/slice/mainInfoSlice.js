import { createSlice } from "@reduxjs/toolkit";
import {
  addTableDataThunk,
  deleteTableDataThunk,
  editTableDataThunk,
  getTableDataThunk,
  serviceInfoThunk,
} from "../thunk/mainInfoThunks";

const initialState = {
  tableData: [
    {
      content: [
        {
          id: 1,
          specialty: {
            id: 1,
            name: "specialty",
          },
          name: "Назва",
          university: {
            id: 100,
            name: "Харківський національний університет",
          },
          education_level: {
            id: 100,
            name: "Бакалавр",
          },
          guarantor: "Гарант",
          department: {
            id: 1,
            url: "http://google.com",
            name: "Кафедра",
          },
          program_url: "http://google.com",
          syllabus_url: "http://google.com",
        },
      ],
      pageNumber: 1,
      totalElements: 1,
    },
  ],
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
