import styles from "./styles.module.scss";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { API_URL } from "configs/variables";

const PerfInfo = ({ images = [] }) => {
  console.log(images);
  return (
    <div className={styles.perfInfo}>
      <Carousel
        className={styles.perfInfo__carusel}
        showThumbs={true}
        showStatus={false}
        autoPlay={true}
      >
        {images.map((image, index) => (
          <div className={styles.perfInfo__imageWrapper} key={index}>
            <Image
              className={styles.perfInfo__image}
              fill
              alt={
                image.attributes?.alternativeText || "alt text should be here"
              }
              src={
                API_URL + image.attributes.url ||
                "https://eifman.com/_next/image?url=https%3A%2F%2Fapi.eifman.com%2Fuploads%2Fanna_karenina_photo_by_souheil_michael_khoury_0e18f30e30.jpg&w=384&q=75"
              }
            />
            {/* <p className="legend">hgorehgibv</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PerfInfo;
