import styles from "./styles.module.scss";
import Image from "next/image";
import { API_URL } from "configs/variables";

const CoverCard = ({ images = [], alt }) => {
  const numberImage = Math.floor(Math.random() * images.length);
  const srcImage = API_URL + images[numberImage]?.attributes.url;
  // console.log(srcImage);
  // console.log(images);
  return (
    <div className={styles.coverCard}>
      <Image
        priority={false}
        className={styles.coverCard__image}
        src={srcImage}
        // src="https://127.0.0.1/123"
        fill={true}
        alt="photo"
        sizes="(max-width: 120px) 100%"
      />
    </div>
  );
};

export default CoverCard;
