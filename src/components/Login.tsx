import React, {useState} from "react";
import {login} from "../features/loggedUserSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../app/store";
import { selectUsers } from "../features/UsersSlice";

const Login = () => {
    const [email, setEmail] = useState("")
    const users = useSelector(selectUsers)

    const dispatch = useDispatch<AppDispatch>()
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault()
        if(users.find(user => user.email === email) !== undefined) {
            dispatch(login(email))
            return
        }
        console.log("User not found")
    }

    return (<div className="login">
        <form className="login-form" onSubmit={event => handleLogin(event)}>
            <h1>Login</h1>
            <input
                placeholder={"Name"}
                value={email}
                onChange={(i) => setEmail(i.target.value)}
            />
            <button className={"login-submit"}>Login</button>
        </form>
    </div>);
};

export default Login;