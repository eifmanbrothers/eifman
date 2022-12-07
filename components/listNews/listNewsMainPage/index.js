import styles from './styles.module.scss'
import { itemNews } from 'components'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const ListNewsMainPage = ({ listNews }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.listNews}>
      <ul className={styles.listNews__list}>
        {
          listNews.map((item) =>
            <itemNews.ItemNewsMain
              key={item.id}
              id={item.id}
              data={item.attributes} />)
        }
      </ul>
      <Link href='/news?page=1' className={styles.listNews__link}>{t('common:nameLinkToAllNews')}</Link>
    </div>

  )
}

export default ListNewsMainPage