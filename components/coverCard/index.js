import styles from "./styles.module.scss";
import Image from "next/image";
import { API_URL } from "configs/variables";

const CoverCard = ({ images = [], alt }) => {
  const numberImage = Math.floor(Math.random() * images.length);
  const srcImage =
    API_URL +
    // for fix when there is not link (is undefined from images[numberImage]?.attributes.url)
    (images[numberImage]?.attributes.url ||
      "/uploads/common_Image2_2de1d50903.jpg?updated_at=2023-06-04T13:47:26.919Z");
  // console.log(srcImage);
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
