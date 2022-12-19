import styles from './styles.module.scss'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const PerformancePage = ({ name = "test" }) => {
  const { t } = useTranslation()

  return (
    <nav className={styles.nav}>
      <Link href="/performances"
        className={styles.nav__link}
      >{t('common:nameLinkPerformancePage') + " " + "/"}</Link>
      <span className={styles.nav__span}>{name}</span>
    </nav>
  )
}

export default PerformancePage