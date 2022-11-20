import styles from './styles.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

const SwitcherLang = () => {
  const router = useRouter()

  return (
    <ul className={styles.switcher}>
      {router.locales.map((el) =>
        <li key={el}>
          <Link
            href={router.asPath}
            locale={el}>
            <a className={cn(styles.switcher__link, {
              [styles.switcher__link_active]: router.locale === el
            })}>
              {el === 'ru' ? "Русский" : "English"}
            </a>
          </Link>
        </li>)
      }
    </ul >
  )
}

export default SwitcherLang