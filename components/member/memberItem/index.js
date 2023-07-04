import styles from "./styles.module.scss";
import Image from "next/image";
import getAltMemberPhoto from "helpers/getAltMemberPhoto";

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
        src={`http://127.0.0.1:1332` + url}
        alt={getAltMemberPhoto(alternativeText, locale) || "alt text need here"}
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
