import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {

  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <h1>{t('common:namePage')}</h1>
    </div>
  )
}
