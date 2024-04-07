import styles from "./styles.module.scss";
import Image from "next/image";
import getAltMemberPhoto from "helpers/getAltMemberPhoto";
import { API_URL } from "configs/variables";

const MemberItem = ({ member, locale }) => {
  const {
    attributes: {
      firstName,
      secondName,
      patronymic,
      avatar: {
        data: {
          attributes: { url, width, height, alternativeText },
        },
      },
    },
  } = member;

  return (
    <figure className={styles.memberItem}>
      <Image
        src={API_URL + url}
        alt={
          getAltMemberPhoto(alternativeText, locale) ||
          "member ensemble text needs here"
        }
        quality={100}
        width={width}
        height={height}
        className={styles.memberLink__image}
      />
      <figcaption suppressHydrationWarning>
        {firstName + " " + secondName + " " + (patronymic || "")}
      </figcaption>
    </figure>
  );
};

export default MemberItem;
