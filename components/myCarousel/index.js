import styles from './styles.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

const MyCarousel = ({ arrImg, place }) => {
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
      {
        arrImg.map((img, index) => <div key={index} className={styles.carousel__imgCont}>
          <Image src={`http://localhost:1332${img.attributes.url}`} alt="#"
            fill
            priority
            sizes='(max-width: 2000px) 100%,'
            // width={img.attributes.width}
            // height={img.attributes.height}
            className={styles.carousel__img}
          // width={img.attributes.width}
          // height={img.attributes.height}
          />
          {/* <p className="legend">Legend 2</p> */}
        </div>)
      }
    </Carousel >
  )
}

export default MyCarousel