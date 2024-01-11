import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Photo } from './../model/Photo'

export interface PhotoState {
	photos: Photo[]
}

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/photos')
	const data = await response.json()
	return data
})

export const photoSlice = createSlice({
	name: 'photos',
	initialState: {
		photos: [],
	},
	reducers: {},
	extraReducers: {
		[fetchPhotos.fulfilled.type]: (state, action) => {
			state.photos = action.payload
		},
	},
})

export default photoSlice.reducer
export const selectPhotos = (state: { photos: PhotoState }) => state.photos.photos
