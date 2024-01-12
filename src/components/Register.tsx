import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import { registerUser } from '../features/UsersSlice'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [emailError, setEmailError] = useState(false)

	const navigate = useNavigate()

	const dispatch = useDispatch<AppDispatch>()
	function handleRegister(event: React.FormEvent) {
		event.preventDefault()
		try {
			dispatch(registerUser({ email, name, phoneNumber }))
		} catch (e) {
			setEmailError(true)
			return
		}
		navigate('/')
	}

	return (
		<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
			<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-500 dark:border-gray-700'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<h2 className='mt-10 text-center text-2xl font-bold leading-6 tracking-tight text-white'>Register</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='space-y-6' onSubmit={(event) => handleRegister(event)}>
						<div>
							<label htmlFor='email' className='block text-sm font-medium leading-3 text-white text-center'>
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
								<div className='text-red-600 leading-3 mt-1 text-center'>{emailError && 'Email is taken!'}</div>
							</div>
						</div>
						<div>
							<label htmlFor='name' className='block text-sm font-medium leading-3 text-white text-center'>
								Name
							</label>
							<div className='mt-2'>
								<input
									id='name'
									name='name'
									type='text'
									autoComplete='name'
									onChange={(i) => setName(i.target.value)}
									className='block w-full justify-center px-3 py-1.5 text-gray-900 shadow-sm ring-3 ring-inset ring-gray-700 placeholder:text-gray-400 rounded-lg bg-gray-300 outline-none'
								/>
							</div>
						</div>
						<div>
							<label htmlFor='phoneNumber' className='block text-sm font-medium leading-3 text-white text-center'>
								Phone Number
							</label>
							<div className='mt-2'>
								<input
									id='phoneNumber'
									name='phoneNumber'
									type='text'
									autoComplete='phoneNumber'
									onChange={(i) => setPhoneNumber(i.target.value)}
									className='block w-full justify-center px-3 py-1.5 text-gray-900 shadow-sm ring-3 ring-inset ring-gray-700 placeholder:text-gray-400 rounded-lg bg-gray-300 outline-none'
								/>
							</div>
						</div>
						<div className='flex flex-col'>
							<button
								type='submit'
								className='grow w-full justify-center mb-5 bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0'>
								Register
							</button>
							<button
								onClick={() => navigate('/')}
								className='grow-0 items-center w-sm justify-center mb-5 bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0'>
								Back
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default RegisterPage
