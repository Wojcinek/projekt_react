import {configureStore} from "@reduxjs/toolkit";
import loggedUserReducer from "../features/loggedUserSlice";
import usersReducer from "../features/UsersSlice";

const store = configureStore({
    reducer:{
        loggedUser: loggedUserReducer,
        users: usersReducer,
    }
})

export type AppDispatch = typeof store.dispatch
export default store