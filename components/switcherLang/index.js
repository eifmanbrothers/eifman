import styles from './styles.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'

const SwitcherLang = () => {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  )

  return (
    <ul className={styles.switcher}>
      {otherLocales.map((el) => {
        const { pathname, query, asPath } = router
        return (
          <li key={el}>
            <Link
              href={{ pathname, query }}
              legacyBehavior
              as={asPath}
              locale={el}
              className={cn(styles.switcher__link, {
                [styles.switcher__link_active]: router.locale === el
              })}
            >
              {el === 'ru' ? "Русский" : "English"}
            </Link>
          </li>)
      }
      )
      }
    </ul >
  )
}

export default SwitcherLang