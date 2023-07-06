import styles from "./styles.module.scss";
import { members } from "components";

const ItemMember = ({ member, position, locale }) => {
  // console.log(position === "Soloists")
  return (
    <li className={styles.member}>
      {position === "Солисты" || position === "Soloists" ? (
        <members.MemberLink member={member} locale={locale} />
      ) : (
        <members.MemberItem member={member} locale={locale} />
      )}
    </li>
  );
};

export default ItemMember;
