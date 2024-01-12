import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/loggedUserSlice'
import { AppDispatch } from '../app/store'
import { deletePost, fetchPosts, selectPosts } from '../features/PostsSlice'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { addPost } from '../features/PostsSlice'
import UserPortfolio from './UserPortfolio'
import { selectUsers } from '../features/UsersSlice'
import CommentsComponent from './CommentsComponents'

const Home = () => {
	const user = useSelector(selectUser).loggedUser
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const posts = useSelector(selectPosts)
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')

	const handleAddPost = (event: React.FormEvent) => {
		event.preventDefault()
		try {
			dispatch(addPost({ userId: user?.id, title, body: text }))
		} catch (e) {
			console.log('test')
		}
	}

	useEffect(() => {
		if (!user) {
			navigate('/')
		}
	})

	const users = useSelector(selectUsers)

	const getUser = (id: number) => {
		let user = users.find((user) => user.id === id)
		if (user !== undefined) return user
		throw new Error('User not found')
	}

	const handleDeletePost = (postId: number) => {
		dispatch(deletePost(postId))
	}

	return (
		<div>
			<NavBar />
			<main>
				<div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
					<form onSubmit={(event) => handleAddPost(event)}>
						<div className='ring-1 ring-inset ring-gray-300 rounded-lg w-full'>
							<div className='flex w-full'>
								<div className='w-full p-1'>
									<input
										type='text'
										className='w-full border-b border-gray-300'
										placeholder='Title'
										onChange={(i) => setTitle(i.target.value)}
									/>
									<textarea className='w-full h-20' placeholder='Text' onChange={(i) => setText(i.target.value)} />
								</div>
							</div>
						</div>
						<div className='max-w-sm mx-auto items-center justify-centerb bg-gray-300 rounded-r-lg hover:bg-gray-600 mt-3'>
							<button type='submit' className='w-full h-full'>
								Add
							</button>
						</div>
					</form>
				</div>
				<div>
					{posts.map((post) => (
						<div
							className='p-6 max-w-xll bg-gray-100 drop-shadow-xl rounded-lg border-2 border-gray-400 mx-5 mb-3'
							key={post.id}>
							<div className='flex w-full'>
								<UserPortfolio user={getUser(post.userId)} />
							</div>
							<div>
								<button onClick={() => handleDeletePost(post.id)}>Delete</button>
							</div>
							<div className='p-1 bg-stone-300 rounded-lg text-center text-xl'>
								<h3>{post.title}</h3>
							</div>
							<div className='p-4 text-center text-sm '>
								<p>{post.body}</p>
								<div className='w-fit ease-in-out mt-5 px-1 py-1 rounded-lg hover:bg-gray-600 hover:text-white'></div>
							</div>
							<div className='' id={'post' + post.id + 'Comments'} data-te-collapse-item>
								<CommentsComponent postId={post.id} />
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	)
}

export default Home
