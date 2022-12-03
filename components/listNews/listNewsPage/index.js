import styles from './styles.module.scss'

import { itemNews } from 'components'

const ListNewsPage = ({ listNews }) => {

  return (
    <ul className={styles.listNews}>
      {
        listNews.map((item) =>
          <itemNews.ItemNewsPage
            key={item.id}
            id={item.id}
            data={item.attributes} />)
      }
    </ul>
  )
}

export default ListNewsPage