import React from "react";
import {useSelector} from "react-redux";
import { selectUser } from "../features/loggedUserSlice";

const Home = () => {
    const user = useSelector(selectUser)
    return(
        <div>
            <h1>Welcome <span>{user.loggedUser}</span></h1>
        </div>
    )
}

export default Home