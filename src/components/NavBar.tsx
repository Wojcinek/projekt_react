import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { logout, selectUser } from "../features/loggedUserSlice";
import { AppDispatch } from "../app/store";
import { useNavigate, useLocation } from "react-router-dom";


const NavBar = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }

    return(
        


<nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="font-semibold text-xl tracking-tight">JSONPlaceholder</span>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
        Posts
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
        Albums
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
        ToDo
      </a>
    </div>
    <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0" onClick={handleLogout}>Logout</a>
    </div>
  </div>
</nav>

    )
}

export default NavBar
