import styles from './styles.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { listNews } from 'components'


const Main = ({ listNewsArr }) => {
  const { t } = useTranslation()
  // console.log(listNews)
  // console.log(1, listNews)
  return (
    <main>
      <h3 className={styles.main__newsTitle}>{t('news:titlePage')}</h3>
      <listNews.ListNewsMainPage listNews={listNewsArr} />
    </main>
  )
}

export default Main