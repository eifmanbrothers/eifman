import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

const EventImagineMob = ({ router, id, image, name, place }) => {
  const isPerformancesPage = router.asPath === "/performances";
  // console.log(isPerformancesPage);
  return (
    <li className={styles.eventImagineMob}>
      <Link
        href={`/performances/${id[router.locale]}`}
        className={styles.eventImagineMob__link}
      >
        <figure
          className={cn(styles.eventImagineMob__imgWrapper, styles[place])}
        >
          <Image
            fill
            alt="#"
            src={image}
            className={styles.eventImagineMob__img}
          ></Image>
          <figcaption className={styles.eventImagineMob__caption}>
            {name[router.locale]}
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default EventImagineMob;
