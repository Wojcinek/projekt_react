import {configureStore} from "@reduxjs/toolkit";
import loggedUserReducer from "../features/loggedUserSlice";
import usersReducer from "../features/UsersSlice";
import postsReducer from "../features/PostsSlice";
import commentsReducer from "../features/CommentsSlice";

const store = configureStore({
    reducer:{
        loggedUser: loggedUserReducer,
        users: usersReducer,
        posts: postsReducer,
        comments: commentsReducer
    }
})

export type AppDispatch = typeof store.dispatch
export default store