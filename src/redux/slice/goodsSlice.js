import { createSlice, } from "@reduxjs/toolkit";

const initialState = {

};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder

    },
});




export const goodsReducer = goodsSlice.reducer;