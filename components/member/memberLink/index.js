import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
// const { API_URL } = process.env

const MemberLink = ({ member }) => {
  console.log(member)
  const { attributes: { avatar: { data: { attributes: { url, width, height } } } } } = member
  const { attributes: { firstName, secondName, patronomic } } = member
  return (
    <Link href={`/ensemble/${member.id}`} passHref className={styles.memberLink}>
      <figure className={styles.memberLink__container}>
        <Image
          src={`http://localhost:1337` + url}
          alt="#"
          width={width}
          height={height}
          className={styles.memberLink__image} />
        <figcaption>{firstName + " " + secondName}</figcaption>
      </figure>
    </Link>
  )
}

export default MemberLink