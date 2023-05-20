import styles from "./styles.module.scss";
import Image from "next/image";

const MemberItem = ({ member }) => {
  const {
    attributes: {
      avatar: {
        data: {
          attributes: { url, width, height },
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
        alt="#"
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
