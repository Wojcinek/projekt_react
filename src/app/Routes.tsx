import { createBrowserRouter } from 'react-router-dom'
import NotFound from '../components/NotFound'
import Login from '../components/Login'
import Home from '../components/Home'
import Albums from '../components/AlbumsPage'
import Todos from '../components/TodosPage'
import Register from '../components/Register'

export const routes = createBrowserRouter([
	{
		path: '*',
		element: <NotFound />,
	},
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/albums',
		element: <Albums />,
	},
	{
		path: '/todos',
		element: <Todos />,
	},
	{
		path: '/register',
		element: <Register />,
	},
])
