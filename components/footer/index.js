import styles from './style.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Footer = () => {

  const router = useRouter()
  // console.log(router.asPath)
  return (
    <footer className={styles.footer}>
      this is footer
      {router.locales.map((el) =>
        <li key={el}>
          <Link href={router.asPath} locale={el}>
            <a>
              {el}
            </a>
          </Link>
        </li>)}
    </footer>
  )
}

export default Footer