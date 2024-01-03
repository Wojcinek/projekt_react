import React, {useState} from "react";
import {login} from "../features/loggedUserSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../app/store";

const Login = () => {
    const [email, setEmail] = useState("")

    const dispatch = useDispatch<AppDispatch>()
    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault()

        dispatch(login(email))
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