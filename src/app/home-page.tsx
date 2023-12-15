import Image from 'next/image'
import styles from './page.module.css'

export const HomePage = ({ users }: any) => {
	return (
		<main className={styles.main}>
			<div className={styles.description}>{JSON.stringify(users)}</div>
		</main>
	)
}
