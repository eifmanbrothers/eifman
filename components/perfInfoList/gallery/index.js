import styles from "./styles.module.scss";
import Image from "next/image";
import { API_URL } from "configs/variables";
import { useState } from "react";
import cn from "classnames";

const Gallery = ({ data = [] }) => {
  const [image, setImage] = useState("");
  // console.log(data);
  return (
    <>
      <ul className={styles.gallery}>
        {data?.map((el, index) => (
          <li key={index} className={styles.gallery__imgWrapper}>
            <Image
              className={styles.gallery__image}
              src={API_URL + el.attributes.formats.thumbnail.url}
              fill
              alt={el.attributes?.alternativeText || "alt text should be here"}
              sizes="(max-width: 1968px) 100vw"
              onClick={() => setImage(API_URL + el.attributes.url)}
            />
          </li>
        ))}
      </ul>
      <div
        className={cn(styles.gallery__overlay, {
          [styles.gallery__overlay_visible]: image,
        })}
      >
        {image && (
          <div className={styles.gallery__overlayWrapper}>
            <Image
              alt="photo performance"
              src={image}
              fill
              className={styles.gallery__overlayImage}
              onClick={() => setImage("")}
              onTouchEnd={() => setImage("")}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
