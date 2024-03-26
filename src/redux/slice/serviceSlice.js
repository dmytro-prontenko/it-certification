import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { signInThunk, signUpThunk } from "../thunk/authThunks";

const initialState = {
  error: null,
  isSignedIn: false,
  isLoading: false,
  openModal: false,
  currentPage:1,
  modalContent: {
    action: null,
    recordData: null,
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
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(signUpThunk.pending, signInThunk.pending),
        (state) => {
          state.error = null;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(signUpThunk.fulfilled, signInThunk.fulfilled),
        (state) => {
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(signUpThunk.rejected, signInThunk.rejected),
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
} = serviceSlice.actions;

export const serviceReducer = serviceSlice.reducer;
