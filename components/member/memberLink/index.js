import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import getAltMemberPhoto from "helpers/getAltMemberPhoto";

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
          src={`http://127.0.0.1:1332` + url}
          alt={getAltMemberPhoto(alternativeText, locale)}
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
