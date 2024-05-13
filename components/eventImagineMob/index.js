import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

const EventImagineMob = ({ router, id, image, name, place }) => {
  const isPerformancesPage = router.asPath === "/performances";

  return (
    <li className={styles.eventImagineMob}>
      <Link
        href={`/performances/${id[router.locale]}`}
        className={styles.eventImagineMob__link}
      >
        <figure
          className={cn(styles.eventImagineMob__imgWrapper, styles[place], {
            [styles.eventImagineMob__imgWrapper_perfPage]: isPerformancesPage,
          })}
        >
          <Image
            fill
            alt="photo"
            src={image}
            className={styles.eventImagineMob__img}
            sizes="(max-width: 1920px) 100vw, (max-width: 820px) 25vw, (max-width: 699px): 30vw, (max-width: 534px): 50vw, (max-width: 369px): 100vw"
          />
          <figcaption
            className={cn(styles.eventImagineMob__caption, {
              [styles.eventImagineMob__caption_perfPage]: isPerformancesPage,
            })}
          >
            {name[router.locale]}
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default EventImagineMob;
