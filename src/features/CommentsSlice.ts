import { create } from 'domain'
import { Comment } from '../model/Comment'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CommentState {
	comments: Comment[]
}

export interface AddComment {
	postId: number
	title: string
	email: string | undefined
	comment: string
}

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/comments')
	const data = await response.json()
	return data
})

export const commentsSlice = createSlice({
	name: 'comments',
	initialState: {
		comments: [],
	},
	reducers: {
		addComment: (state: CommentState, action: PayloadAction<AddComment>) => {
			if (action.payload.email === undefined) {
				throw new Error('Email is undefined')
			}
			const newComment: Comment = {
				postId: action.payload.postId,
				id: Math.random(),
				name: action.payload.title,
				email: action.payload.email,
				body: action.payload.comment,
			}
			state.comments.push(newComment)
		},
		deleteComment: (state: CommentState, action: PayloadAction<number>) => {
			const index = state.comments.findIndex((comment) => comment.id === action.payload)
			state.comments.splice(index, 1)
		},
	},
	extraReducers: {
		[fetchComments.fulfilled.type]: (state, action) => {
			state.comments = action.payload
		},
	},
})

export default commentsSlice.reducer
export const { addComment, deleteComment } = commentsSlice.actions
export const selectComments = (state: { comments: CommentState }) => state.comments.comments
