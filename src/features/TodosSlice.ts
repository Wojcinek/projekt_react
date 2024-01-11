import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Todo from '../model/Todo'

export interface TodoState {
	todos: Todo[]
}

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos')
	const data = await response.json()
	return data
})

export const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	},
	reducers: {},
	extraReducers: {
		[fetchTodos.fulfilled.type]: (state, action) => {
			state.todos = action.payload
		},
	},
})

export default todosSlice.reducer
export const selectTodos = (state: { todos: TodoState }) => state.todos.todos
