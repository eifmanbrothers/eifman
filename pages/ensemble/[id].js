import styles from './styles.module.scss'
import api from 'utils/ApiEnsemble'
import useTranslation from 'next-translate/useTranslation'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { MenuMemberPage, MyCarousel } from 'components'

const Member = ({ data }) => {

  const { attributes: { images: { data: arrImg } } } = data
  const { t } = useTranslation()

  const firstData = data.attributes
  const secondData = data.attributes.localizations.data[0].attributes
  const currentData = data.reqLocation === firstData.locale ? firstData : secondData

  const fullName = currentData.secondName + " " + currentData.firstName

  return (
    <section className={styles.member}>
      <MenuMemberPage nameMember={fullName} />
      <div className={styles.member__content}>
        <Image
          priority
          src={`http://localhost:1337${firstData.avatar.data.attributes.url}`}
          alt={`${t('common:photoMember')} ${fullName}`}
          width={firstData.avatar.data.attributes.width}
          height={firstData.avatar.data.attributes.height}
          className={styles.member__avatar}
        />
        <div className={styles.member__description}>
          <ReactMarkdown>{currentData.description}</ReactMarkdown>
        </div>
      </div>
      <MyCarousel arrImg={arrImg} />
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
