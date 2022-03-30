import styles from './style.module.css'
import Image from 'next/image'
import logoRu from '/images/logo-ru.svg'
import logoEn from '/images/logo-en.svg'
import { useRouter } from 'next/router'

const Logo = () => {
  const { locale } = useRouter()

  return (
    <div className={styles.logo}>
      {
        locale === "ru" ?
          <Image src={logoRu} alt="Логотип" /> :
          <Image src={logoEn} alt="Logo" />
      }
    </div>
  )
}

export default Logo
