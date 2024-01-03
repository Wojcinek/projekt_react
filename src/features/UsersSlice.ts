import { User } from './../model/User';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface UsersState {
    users: User[]
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data
})

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action) => {
            state.users = action.payload
        }
    }
})

export default usersSlice.reducer
export const selectUsers = (state: {users: UsersState}) => state.users.users