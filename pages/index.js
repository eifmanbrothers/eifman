import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Главная страница</h1>
      <nav>
        <Link href="/users">
          <a>страница пользователей</a>
        </Link>
        <Link href="/">
          <a>Главная</a>
        </Link>
      </nav>
    </div>
  )
}
