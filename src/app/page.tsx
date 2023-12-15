import { HomePage } from './home-page'

async function getUsers() {
	//TODO add request

	return { msg: 'No Users' }
}

export default async function Home() {
	const users = await getUsers()

	return <HomePage users={users} />
}
