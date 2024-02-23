import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import getAltMemberPhoto from "helpers/getAltMemberPhoto";
import { API_URL } from "configs/variables";

const MemberLink = ({ member, locale }) => {
  // console.log(member)
  const {
    attributes: {
      firstName,
      secondName,
      avatar: {
        data: {
          attributes: { url, width, height, alternativeText },
        },
      },
    },
  } = member;

  return (
    <Link
      href={`/ensemble/${member.id}`}
      passHref
      className={styles.memberLink}
    >
      <figure className={styles.memberLink__container}>
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
        <figcaption>{firstName + " " + secondName}</figcaption>
      </figure>
    </Link>
  );
};

export default MemberLink;
