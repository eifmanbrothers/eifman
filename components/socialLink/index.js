import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

const SocialLink = ({ href, title, image, place }) => {
  return (
    <Link target="_blank" href={href} passHref className={styles.socialLink}>
      <Image src={image} alt={title} className={styles.image} />
    </Link>
  );
};

export default SocialLink;
