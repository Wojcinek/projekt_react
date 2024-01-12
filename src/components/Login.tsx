import React, { useState } from 'react'
import { login } from '../features/loggedUserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../app/store'
import { selectUsers } from '../features/UsersSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [email, setEmail] = useState('')
	const users = useSelector(selectUsers)
	const navigate = useNavigate()

	const dispatch = useDispatch<AppDispatch>()
	const handleLogin = (event: React.FormEvent) => {
		event.preventDefault()
		let user = users.find((user) => user.email === email)
		if (user !== undefined) {
			dispatch(login(user))
			navigate('/home')
			return
		}
		console.log('User not found')
	}

	return (
		<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
			<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-500 dark:border-gray-700'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>Sign in</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='space-y-6' onSubmit={(event) => handleLogin(event)}>
						<div>
							<label htmlFor='email' className='block text-sm font-medium leading-6 text-white text-center'>
								Email address
							</label>
							<div className='mt-2'>
								<input
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									onChange={(i) => setEmail(i.target.value)}
									className='block w-full justify-center px-3 py-1.5 text-gray-900 shadow-sm ring-3 ring-inset ring-gray-700 placeholder:text-gray-400 rounded-lg bg-gray-300 outline-none'
								/>
							</div>
						</div>

						<div>
							<button
								type='submit'
								className='flex w-full justify-center mb-5 bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0'>
								Log in
							</button>
						</div>
						<div>
							<a
								onClick={() => navigate('/register')}
								className='flex w-full text-sm justify-center cursor-pointer font-semibold text-white hover:drop-Shadow-3xl pb-3'>
								Sign up!
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
