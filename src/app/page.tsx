import { getDataSource } from '~/database'
import { HomePage } from './home-page'
import { User } from '~/database/entity'

async function getUsers() {
	const AppDataSource = await getDataSource()
	return AppDataSource.getRepository(User).findOneBy({ firstName: 'Test' })
}

export default async function Home() {
	const users = await getUsers()

	console.log({ users })

	return <HomePage />
}
