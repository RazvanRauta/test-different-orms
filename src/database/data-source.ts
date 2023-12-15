import { DataSource } from 'typeorm'
import { User } from './entity'

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'strapi',
	password: 'strapi',
	database: 'test1',
	entities: [
		User, //etc...
	],
	synchronize: true,
	logging: false,
})
