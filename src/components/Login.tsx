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
        let user = users.find(user => user.email === email)
        if(user!== undefined) {
            dispatch(login(user))
            return
        }
        console.log("User not found")
    }

    return (
        
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-300 dark:border-gray-500'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in
        </h2>
        </div>
        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={event => handleLogin(event)}>
            <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-center">
                Email address
            </label>
            <div className="mt-2">
                <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(i) => setEmail(i.target.value)}
                className="block w-full justify-center px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 rounded-lg bg-gray-100"
                />
            </div>
            </div>

            <div>
            <button
                type="submit"
                className="flex w-full justify-center bg-lime-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 mb-5 rounded-lg"
            >
                Log in
            </button>
            </div>
        </form>
        </div>
    </div>
    </div>
    )};

export default Login;