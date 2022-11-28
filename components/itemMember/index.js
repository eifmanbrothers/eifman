import styles from './styles.module.scss'
import { Member } from 'components'

const ItemMember = ({ member, position }) => {
  // console.log(position === "Soloists")
  return (
    <li className={styles.member}>
      {
        position === "Солисты" || position === "Soloists" ?
          <Member.MemberLink member={member} /> :
          <Member.MemberItem member={member} />
      }
    </li>
  )
}

export default ItemMember