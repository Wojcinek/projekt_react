import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { logout, selectUser } from "../features/loggedUserSlice";
import { AppDispatch } from "../app/store";
import { fetchPosts, selectPosts } from "../features/PostsSlice";

const Home = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch<AppDispatch>()

    const posts = useSelector(selectPosts)

    useEffect(() => {
        dispatch(fetchPosts());}, [dispatch]);

    const handleLogout = () => {
        dispatch(logout())
    }

    return(
        <div>
            <h1>Welcome <span>{user.loggedUser?.name}</span></h1>
            <button onClick={handleLogout}>Logout</button>
            <div>
                <span>posts</span>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home