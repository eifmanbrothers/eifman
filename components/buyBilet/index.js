import styles from './styles.module.css'
import useTranslation from 'next-translate/useTranslation'

const BuyBilet = () => {

  const { t } = useTranslation()

  return (
    <div className={styles.buyBilet}>
      <button
        type="button"
        className={styles.buyBilet__btn}>
        {t('common:nameButtonBuy').toUpperCase()}
      </button>
      <p
        className={styles.buyBilet__span}>
        {t('common:spanButtonBuy')}
      </p>
    </div>
  )
}

export default BuyBilet