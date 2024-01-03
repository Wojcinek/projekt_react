import React from "react";
import {selectUser} from "../features/loggedUserSlice";
import {useSelector} from "react-redux";
const Home = () => {
    const user = useSelector(selectUser)
    return(
        <div>

            <h1>Welcome <span>{user.loggedUser}</span></h1>
        </div>
    )
}
export default Home