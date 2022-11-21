import styles from './styles.module.scss'
import Link from 'next/link'

const NavItem = ({ name, path, locale }) => {
  return (
    <li className={styles.navItem}>
      <Link href={path}>
        {name[locale]}
      </Link>
    </li>
  )
}

export default NavItem