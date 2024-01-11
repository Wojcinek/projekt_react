import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/loggedUserSlice'
import { AppDispatch } from '../app/store'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import path from 'path'

const NavBar = () => {
	const user = useSelector(selectUser)
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const location = useLocation()

	const handleLogout = () => {
		dispatch(logout())
		navigate('/')
	}

	const navigation = [
		{ name: 'Posts', path: '/home', active: '/home' == location.pathname },
		{ name: 'Albums', path: '/albums', active: '/albums' == location.pathname },
		{ name: 'ToDo', path: '/todo', active: '/todo' == location.pathname },
	]

	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(' ')
	}

	return (
		<nav className='flex items-center justify-between flex-wrap bg-gray-500 p-6'>
			<div className='flex items-center flex-shrink-0 text-white mr-6'>
				<span className='font-semibold text-xl tracking-tight'>JSONPlaceholder</span>
			</div>
			<div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
				<div className='text-sm lg:flex-grow'>
					<div className='ml-10 flex items-baseline space-x-4'>
						{navigation.map((item) => (
							<a
								key={item.name}
								className={classNames(
									item.active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
									'rounded-md px-3 py-2 text-sm font-medium'
								)}
								aria-current={item.active ? 'page' : undefined}
								onClick={() => navigate(item.path)}>
								{item.name}
							</a>
						))}
					</div>
				</div>
				<div>
					<span className='block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-3'>
						Welcome {user.loggedUser?.name}!
					</span>
				</div>
				<div>
					<a
						href='#'
						className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0'
						onClick={handleLogout}>
						Logout
					</a>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
