import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../features/loggedUserSlice'
import NavBar from './NavBar'
import { AppDispatch } from '../app/store'
import { selectTodos } from '../features/TodosSlice'
import TodoComponent from './TodosComponents'

const TodosPage = () => {
	const user = useSelector(selectUser).loggedUser
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	useEffect(() => {
		if (!user) {
			navigate('/')
		}
	})

	const todos = useSelector(selectTodos)

	return (
		<div className='min-h-full'>
			<NavBar />
			<main>
				<div className='mx-auto max-w-5xl py-6 sm:px-6 lg:px-8'>
					{todos.map((todo) => (
						<article
							key={todo.id}
							className='my-10 px-5 py-3 flex-col items-start justify-between shadow-lg ring-1 ring-inset ring-gray-300 p-6 max-w-xll bg-gray-100 drop-shadow-xl rounded-lg border-2 border-gray-400 mx-5 mb-3'>
							<TodoComponent todo={todo} />
						</article>
					))}
				</div>
			</main>
		</div>
	)
}

export default TodosPage
