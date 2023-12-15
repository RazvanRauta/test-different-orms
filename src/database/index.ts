import 'reflect-metadata'
import { AppDataSource } from './data-source'
import { DataSource } from 'typeorm'

AppDataSource.initialize()
	.then(async () => {
		console.log('Connection initialized with database...')
	})
	.catch((error) => console.log(error))

export const getDataSource = (delay = 3000): Promise<DataSource> => {
	if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource)

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (AppDataSource.isInitialized) resolve(AppDataSource)
			else reject('Failed to create connection with database')
		}, delay)
	})
}
