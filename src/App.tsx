import { useDispatch, useSelector} from "react-redux";
import Home from "./components/Home";
import Login from "./components/Login";
import { selectUser } from "./features/loggedUserSlice";
import { useEffect } from "react";
import { fetchUsers } from "./features/UsersSlice";
import { AppDispatch } from "./app/store";

const App = () => {
    let loggedUser = useSelector(selectUser)

    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(fetchUsers());}, [dispatch]);

    return (<div>
        {loggedUser.loggedUser ? <Home/> : <Login/>}
    </div>);
};

export default App;