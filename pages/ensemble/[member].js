import styles from './styles.module.scss'
import api from 'utils/ApiEnsemble'

const Member = ({ data }) => {
  // console.log(data)
  return (
    <section className={styles.member}>
      <p>{`page member ${data.attributes.secondName}`}</p>
    </section>
  )
}

export async function getServerSideProps(context) {
  const { params: { member }, locale } = context
  // console.log(locale)
  const res = await api.getMember(member, locale)
  return { props: { data: res.data } }
}

export default Member