import { useDispatch, useSelector } from 'react-redux'
import { deleteComment, fetchComments, selectComments } from '../features/CommentsSlice'
import { TrashIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { AppDispatch } from '../app/store'
import { useEffect, useState } from 'react'
import { selectUser } from '../features/loggedUserSlice'
import { useNavigate } from 'react-router-dom'
import { addComment } from '../features/CommentsSlice'

interface CommentsProps {
	postId: number
}

const CommentsComponent: React.FC<CommentsProps> = ({ postId }) => {
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const user = useSelector(selectUser).loggedUser

	const [title, setTitle] = useState('')
	const [comment, setComment] = useState('')
	const [addCommentError, setAddCommentError] = useState(false)

	useEffect(() => {
		if (!user) {
			navigate('/')
		}
	})

	const handleAddComment = (event: React.FormEvent) => {
		event.preventDefault()
		if (title == '' || comment == '') {
			return
		}
		try {
			dispatch(addComment({ postId, title, email: user?.email, comment }))
		} catch (e) {
			setAddCommentError(true)
			setTimeout(() => {
				navigate('/')
			}, 5000)
		}
	}

	const handleDeleteComment = (id: number) => {
		dispatch(deleteComment(id))
	}

	const isLoggedUserAutor = (email: string) => {
		return email === user?.email
	}

	const comments = useSelector(selectComments).filter((comment) => comment.postId === postId)

	return (
		<div>
			<ul role='list' className='divide-y divide-gray-100'>
				{comments.map((comment) => (
					<li key={comment.email} className='flex justify-between gap-x-6 py-5'>
						<div className='flex min-w-0 gap-x-4'>
							<div className='min-w-0 flex-auto overflow-clip'>
								<p className='mt-1 truncate text-xs leading-5 text-gray-500'>{comment.email}</p>
								<p className='mt-1 font-semibold leading-6 text-gray-900'>{comment.name}</p>
								<p className='text-sm text-gray-600'>{comment.body}</p>
							</div>
						</div>
						{isLoggedUserAutor(comment.email) ? (
							<button
								className='relative flex items-center gap-x-4 text-sm leading-6 font-semibold text-gray-400 hover:text-red-500'
								onClick={() => handleDeleteComment(comment.id)}>
								Delete
							</button>
						) : (
							''
						)}
					</li>
				))}
			</ul>
			<form onSubmit={(event) => handleAddComment(event)}>
				<div className='ring-1 ring-inset ring-gray-300 rounded-lg w-full'>
					<div className='flex w-full'>
						<div className='w-full p-1'>
							<input
								type='text'
								className='w-full border-b border-gray-300'
								placeholder='Title'
								onChange={(i) => setTitle(i.target.value)}
							/>
							<textarea className='w-full h-20' placeholder='Text' onChange={(i) => setComment(i.target.value)} />
						</div>
					</div>
				</div>
				<div className='max-w-sm mx-auto items-center justify-centerb bg-gray-300 rounded hover:bg-gray-600 mt-3 hover:text-white'>
					<button type='submit' className='w-full h-full text-sm font-semibold'>
						Add
					</button>
				</div>
			</form>
		</div>
	)
}

export default CommentsComponent
