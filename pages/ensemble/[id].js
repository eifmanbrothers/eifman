import styles from './styles.module.scss'
import api from 'utils/ApiEnsemble'
import useTranslation from 'next-translate/useTranslation'

const Member = ({ data }) => {

  const { t } = useTranslation()
  const { reqLocation } = data
  const firstData = data.attributes
  const secondData = data.attributes.localizations.data[0].attributes
  const cuurentData = reqLocation === firstData.locale ? firstData : secondData

  return (
    <section className={styles.member}>
      <p>{t('common:namePageMember') + " " + cuurentData.secondName}</p>
    </section>
  )
}

export async function getServerSideProps(context) {
  const { params: { id }, locale } = context
  const res = await api.getMember(id)
  res.data.reqLocation = locale
  return { props: { data: res.data } }
}

export default Member
