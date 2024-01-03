import React from "react";
import {useSelector} from "react-redux";
import {selectUser} from "./features/loggedUserSlice";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
    let loggedUser = useSelector(selectUser)

    return (<div>
        {loggedUser.loggedUser ? <Home/> : <Login/>}
    </div>);
};

export default App;