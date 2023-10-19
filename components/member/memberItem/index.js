import styles from "./styles.module.scss";
import Image from "next/image";
import getAltMemberPhoto from "helpers/getAltMemberPhoto";
import { API_URL } from "configs/variables";

const MemberItem = ({ member, locale }) => {
  const {
    attributes: {
      avatar: {
        data: {
          attributes: { url, width, height, alternativeText },
        },
      },
    },
  } = member;
  const {
    attributes: { firstName, secondName, patronymic },
  } = member;
  return (
    <figure className={styles.memberItem}>
      <Image
        src={API_URL + url}
        alt={
          getAltMemberPhoto(alternativeText, locale) || "alt text needs here"
        }
        width={width}
        height={height}
        className={styles.memberLink__image}
      />
      <figcaption>
        {firstName + " " + secondName + " " + (patronymic || "")}
      </figcaption>
    </figure>
  );
};

export default MemberItem;
