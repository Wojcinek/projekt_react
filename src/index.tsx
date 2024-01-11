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

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())
store.dispatch(fetchComments())
store.dispatch(fetchAlbums())
store.dispatch(fetchPhotos())

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	</React.StrictMode>
)
