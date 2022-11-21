import styles from './styles.module.scss'
import api from 'utils/ApiEnsemble'
import useTranslation from "next-translate/useTranslation"
import Link from 'next/link'

const Ensemble = ({ data }) => {
  const { t } = useTranslation()
  // console.log(data)
  return (
    <section className={styles.ensemble}>
      <h3>{t('ensemble:pageName')}</h3>
      {
        data.map((el) =>
          <Link key={el.attributes.firstName}
            // href={`/ensemble/${el.id}`}
            href={{
              pathname: `/ensemble/[member]`,
              query: { member: el.id },
            }}
          >
            {el.attributes.secondName}
          </Link>)
      }
    </section>
  )
}

export async function getServerSideProps({ locale }) {
  const res = await api.getEnsembles(locale)
  return { props: { data: res.data } }
}

export default Ensemble