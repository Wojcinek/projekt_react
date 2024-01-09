import {configureStore} from "@reduxjs/toolkit";
import loggedUserReducer from "../features/loggedUserSlice";
import usersReducer from "../features/UsersSlice";
import postsReducer from "../features/PostsSlice";

const store = configureStore({
    reducer:{
        loggedUser: loggedUserReducer,
        users: usersReducer,
        posts: postsReducer
    }
})

export type AppDispatch = typeof store.dispatch
export default store