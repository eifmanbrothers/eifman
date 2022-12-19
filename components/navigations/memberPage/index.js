import styles from './styles.module.scss'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const MemberPage = ({ nameMember }) => {
  const { t } = useTranslation()

  return (
    <nav className={styles.nav}>
      <Link href="/ensemble"
        className={styles.nav__link}
      >{t('common:nameLinkMemberPage') + " " + "/"}</Link>
      <span className={styles.nav__span}>{nameMember}</span>
    </nav>
  )
}

export default MemberPage