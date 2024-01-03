import {configureStore} from "@reduxjs/toolkit";
import loggedUserReducer from "../features/loggedUserSlice";


const store = configureStore({
    reducer:{

        loggedUser: loggedUserReducer,
    }
})


export type AppDispatch = typeof store.dispatch
export default store