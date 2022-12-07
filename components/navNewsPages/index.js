import styles from './styles.module.scss'
import Link from 'next/link'
import cn from 'classnames'

const NavNewsPages = ({ allPages, currentPath }) => {
  // console.log(allPages)
  const arrNumbersPage = []

  for (let i = 1; i <= allPages; i = i + 1) {
    arrNumbersPage.push(i);
  }

  // console.log(arrNumbersPage)
  return (
    <nav className={styles.navNews}>
      {
        arrNumbersPage.map((el) => {
          return <li key={el} className={styles.navNews__item}>
            <Link
              href={`/news?page=${el}`}
              className={cn(styles.navNews__link, { [styles.navNews__link_active]: `/news?page=${el}` === currentPath })}
            >
              {el}
            </Link>
          </li>
        }
        )
      }

    </nav>
  )
}

export default NavNewsPages