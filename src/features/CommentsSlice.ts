import { create } from "domain";
import { Comment } from "../model/Comment";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface CommentState {
    comments: Comment[];
}

export const fetchComments = createAsyncThunk("comments/fetchComments", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    return data;
});

export const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
    },
    reducers: {},
    extraReducers: {
        [fetchComments.fulfilled.type]: (state, action) => {
            state.comments = action.payload;
        },
    },
});

export default commentsSlice.reducer;
export const selectComments = (state: { comments: CommentState }) => state.comments.comments;