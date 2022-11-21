// import { Header } from '../components'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {

  const { t } = useTranslation()

  // let router = useRouter()
  //console.log(router.locale)
  // const hello = router.locale === 'en' ? 'Main Page' : 'Главная страница'
  return (
    <div className={styles.container}>

      <h1>{t('common:namePage')}</h1>
      <nav className={styles.nav}>
        <Link href="/ensemble">
          Труппа
        </Link>
      </nav>
    </div>
  )
}
