import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store'
import './style/style.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './app/Routes'
import { fetchUsers } from './features/UsersSlice'
import { fetchPosts } from './features/PostsSlice'
import { fetchComments } from './features/CommentsSlice'
import { fetchAlbums } from './features/AlbumsSlice'
import { fetchPhotos } from './features/PhotosSlice'
import { fetchTodos } from './features/TodosSlice'

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())
store.dispatch(fetchComments())
store.dispatch(fetchAlbums())
store.dispatch(fetchPhotos())
store.dispatch(fetchTodos())

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	</React.StrictMode>
)
