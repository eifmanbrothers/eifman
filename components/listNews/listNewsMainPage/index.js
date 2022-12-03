import styles from './styles.module.scss'
import { itemNews } from 'components'
import Link from 'next/link'

const ListNewsMainPage = ({ listNews }) => {

  return (
    <>
      <ul className={styles.listNews}>
        {
          listNews.map((item) =>
            <itemNews.ItemNewsMain
              key={item.id}
              id={item.id}
              data={item.attributes} />)
        }
      </ul>
      <Link href='/news'>all news</Link>
    </>

  )
}

export default ListNewsMainPage