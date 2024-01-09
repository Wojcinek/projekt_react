import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import store from "./app/store";
import "./style/style.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./app/Routes";
import { fetchUsers } from "./features/UsersSlice";

store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={routes} />
        </Provider>
    </React.StrictMode>
);