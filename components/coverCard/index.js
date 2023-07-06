import styles from "./styles.module.scss";
import Image from "next/image";
import { API_URL } from "configs/variables";

const CoverCard = ({ images = [], alt }) => {
  const numberImage = Math.floor(Math.random() * images.length);
  const srcImage =
    API_URL +
    // for fix when there is not link (is undefined from images[numberImage]?.attributes.url)
    (images[numberImage]?.attributes.url ||
      "/uploads/eugene_onegin_photo_by_vladimir_zenzinov_jpg_620x460_q85_subsampling_2_ceaa9eb2fd.jpg");
  // console.log(srcImage);
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
