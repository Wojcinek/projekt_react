import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { logout, selectUser } from "../features/loggedUserSlice";
import { AppDispatch } from "../app/store";
import { fetchPosts, selectPosts } from "../features/PostsSlice";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const posts = useSelector(selectPosts)

    useEffect(() => {
        dispatch(fetchPosts());}, [dispatch]);



    return(
        <div>
            <NavBar/>
            <main>
                <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
            </main>
        </div>
    )
}

export default Home