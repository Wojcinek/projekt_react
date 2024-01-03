import {createSlice} from "@reduxjs/toolkit";

interface LoggedUserState{
    loggedUser: string | null
}

const initialState: LoggedUserState = {
    loggedUser: null
}

export const loggedUserSlice = createSlice({
    name: "loggedUser",
    initialState,
    reducers: {
        login: (state, action) => {
            state.loggedUser = action.payload
        },
        logout: (state) => {
            state.loggedUser = null
        }
    }
})

export const {login, logout} = loggedUserSlice.actions
export const selectUser = (state: {loggedUser: LoggedUserState}) => state.loggedUser
export default loggedUserSlice.reducer