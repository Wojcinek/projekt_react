import { Address } from './Address'
export interface User {
	id: number
	name: string
	username: string | null
	email: string
	address: Address | null
	phone: string | null
	website: string | null
	company: {
		name: string
		catchPhrase: string
		bs: string
	} | null
}
