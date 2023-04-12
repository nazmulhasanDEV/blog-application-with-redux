import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    // posts: (state) => {
    //   state;
    // },
  },
});

export const { posts } = postSlice.actions;

export default postSlice.reducer;
