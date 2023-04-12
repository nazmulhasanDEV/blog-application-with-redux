import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../components/posts/postSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});
