import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Post } from '../model/Post'

export interface PostState {
	posts: Post[]
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await response.json()
	return data
})

export interface addPostPayload {
	userId: number | undefined
	title: string
	body: string
}

export const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
	},
	reducers: {
		addPost: (state: PostState, action: PayloadAction<addPostPayload>) => {
			if (action.payload.userId === undefined) {
				throw new Error('User ID undefined')
			}
			const newPost: Post = {
				userId: action.payload.userId,
				id: Math.random(),
				title: action.payload.title,
				body: action.payload.body,
			}
			state.posts.push(newPost)
		},
		deletePost: (state: PostState, action: PayloadAction<number>) => {
			const index = state.posts.findIndex((post) => post.id === action.payload)
			state.posts.splice(index, 1)
		},
	},
	extraReducers: {
		[fetchPosts.fulfilled.type]: (state, action) => {
			state.posts = action.payload
		},
	},
})

export default postsSlice.reducer
export const selectPosts = (state: { posts: PostState }) => state.posts.posts
export const { addPost, deletePost } = postsSlice.actions
