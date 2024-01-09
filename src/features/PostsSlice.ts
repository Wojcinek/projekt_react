import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../model/Post";

export interface PostState {
    posts: Post[];
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
});

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
    },
    reducers: {},
    extraReducers: {
        [fetchPosts.fulfilled.type]: (state, action) => {
            state.posts = action.payload;
        },
    },
});

export default postsSlice.reducer;
export const selectPosts = (state: { posts: PostState }) => state.posts.posts;