import styles from './styles.module.scss'
import api from 'utils/ApiEnsemble'

const Member = ({ data }) => {
  // console.log(data)
  return (
    <section className={styles.member}>
      <p>{`page member ${data.attributes?.secondName}`}</p>
    </section>
  )
}

export async function getServerSideProps(context) {
  const { params: { id }, locale } = context
  // console.log(locale)
  const res = await api.getMember(id)

  let translation = undefined

  if (locale === "en") {
    // console.log(1, res.data.attributes.localizations.data[0])
    const data2 = res.data.attributes.localizations.data[0]
    const res2 = await api.getMember(data2.id)
    // console.log(3, res2)
    translation = res2.data
  }

  return { props: { data: translation ? translation : res.data } }
}

export default Member