import styles from './style.module.css'
import Image from 'next/image'
import logo from '/images/logo-ru.svg'

const Logo = () => {

  return (
    <Image src={logo} alt="Логотип" />
  )
}

export default Logo
