import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    img: "https://picsum.photos/300",
    title: "This is dummy title",
    content: "It helps the designer plan where the content will sit.r.",
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
    },
  },
  {
    id: nanoid(),
    img: "https://picsum.photos/100",
    title: "This is dummy title",
    content: "It helps the designer plan where the content will sit.r.",
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
    },
  },
  {
    id: nanoid(),
    img: "https://picsum.photos/300",
    title: "This is dummy title",
    content: "It helps the designer plan where the content will sit.r.",
    reactions: {
      thumbsUp: 0,
      thumbsDown: 0,
    },
  },
  {
    id: nanoid(),
    img: "https://picsum.photos/400",
    title: "This is dummy title",
    content: "It helps the designer plan where the content will sit.r.",
    reactions: {
      thumbsUp: 10,
      thumbsDown: 0,
    },
  },
];

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    addNewPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(post) {
        console.log("post in prepare", post);
        return {
          payload: {
            ...post,
            img: "https://picsum.photos/500",
            reactions: {
              thumbsUp: 10,
              thumbsDown: 0,
            },
          },
        };
      },
    },
    reactions: (state, action) => {
      console.log(state, action.payload);
      console.log(state);
      const post = state?.find((item) => item?.id === action?.payload?.postId);
      console.log(post);
      if (post) {
        post.reactions[action.payload.reaction]++;
      }
      // post?.reactions[action.payload.reaction]++
    },
  },
});

export const { addNewPost, reactions } = postSlice.actions;
export const allPosts = (state) => {
  return state.posts;
};

export default postSlice.reducer;
