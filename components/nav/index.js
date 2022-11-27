import styles from './styles.module.scss'
import { navList } from 'constants/nav'
import { NavItem } from 'components'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {
          navList.map((el) => <NavItem key={el.path} {...el}
            locale={router.locale}
          />)
        }
      </ul>

    </nav>
  )
}

export default Nav