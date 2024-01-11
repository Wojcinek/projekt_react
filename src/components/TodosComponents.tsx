import { useSelector } from 'react-redux'
import Todo from '../model/Todo'
import UserPortfolio from './UserPortfolio'
import { selectUsers } from '../features/UsersSlice'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'

interface TodoProps {
	todo: Todo
}

const TodoComponent: React.FC<TodoProps> = ({ todo }) => {
	const user = useSelector(selectUsers)

	return (
		<div>
			<UserPortfolio user={user.find((user) => user.id === todo.userId)!} />
			<div className='group relative'>
				<h3 className='flex items-center p-1 justify-center rounded-lg text-center text-xl bg-stone-300'>
					<a>
						<span className='absolute' />
						{todo.title}
					</a>
				</h3>
				<p className='flex p-1 justify-end text-gray-600 text-1xl'>
					{todo.completed ? <h2 className='text-green-500'>Done</h2> : <h2 className=' text-red-500'>Not done</h2>}
				</p>
			</div>
		</div>
	)
}

export default TodoComponent
