import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const EventImagineMob = ({ router, id, image }) => {
  return (
    <li className={styles.eventImagineMob}>
      <Link
        href={`/performances/${id[router.locale]}`}
        className={styles.eventImagineMob__link}
      >
        <Image
          alt="#"
          src={image}
          className={styles.eventImagineMob__img}
        ></Image>
        {id[router.locale]}
      </Link>
    </li>
  );
};

export default EventImagineMob;
