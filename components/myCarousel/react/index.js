import styles from "./styles.module.scss";
import cn from "classnames";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const React = ({ arrImg, place }) => {
  // console.log(arrImg)

  return (
    <Carousel
      autoPlay={false}
      showStatus={false}
      showThumbs={false}
      dynamicHeight={false}
      infiniteLoop={true}
      className={styles.carousel}
      // onClickThumb={onClickThumb}
    >
      {arrImg.map((img, index) => (
        <div
          key={index}
          className={cn(styles.carousel__imgCont, { [styles[place]]: place })}
        >
          <Image
            src={
              img.attributes
                ? `http://127.0.0.1:1332${img.attributes?.url}`
                : img
            }
            alt={img.attributes?.alternativeText || "alt text should be here"}
            fill
            priority
            sizes="(max-width: 2000px) 100%,"
            // width={img.attributes.width}
            // height={img.attributes.height}
            className={styles.carousel__img}
            // width={img.attributes.width}
            // height={img.attributes.height}
          />
          {/* <p className="legend">Legend 2</p> */}
        </div>
      ))}
    </Carousel>
  );
};

export default React;
