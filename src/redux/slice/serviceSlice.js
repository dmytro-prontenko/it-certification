import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { signInThunk, signUpThunk } from "../thunk/authThunks";
import {
  addTableDataThunk,
  deleteTableDataThunk,
  editTableDataThunk,
  getTableDataThunk,
  serviceInfoThunk,
} from "../thunk/mainInfoThunks";

const initialState = {
  error: null,
  isSignedIn: false,
  isLoading: false,
  openModal: false,
  currentPage: 1,
  modalContent: {
    action: null,
    recordDataEdit: null,
    recordDataAdd: null,
    editedData: null,
  },
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setModalStatus: (state, action) => {
      state.openModal = action.payload;
    },
    setModalContent: (state, action) => {
      state.modalContent = { ...state.modalContent, ...action.payload };
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          signUpThunk.pending,
          signInThunk.pending,
          getTableDataThunk.pending,
          addTableDataThunk.pending,
          editTableDataThunk.pending,
          deleteTableDataThunk.pending,
          serviceInfoThunk.pending
        ),
        (state) => {
          state.error = null;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.fulfilled,
          signInThunk.fulfilled,
          getTableDataThunk.fulfilled,
          addTableDataThunk.fulfilled,
          editTableDataThunk.fulfilled,
          deleteTableDataThunk.fulfilled,
          serviceInfoThunk.fulfilled
        ),
        (state) => {
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.rejected,
          signInThunk.rejected,
          getTableDataThunk.rejected,
          addTableDataThunk.rejected,
          editTableDataThunk.rejected,
          deleteTableDataThunk.rejected,
          serviceInfoThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const {
  setModalStatus,
  setModalContent,
  setIdForEditDelete,
  setChooseDate,
  setCurrentPage,
} = serviceSlice.actions;

export const serviceReducer = serviceSlice.reducer;
