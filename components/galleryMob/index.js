import styles from "./styles.module.scss";
import { items } from "constants/itemsGallery";
import { EventImagineMob } from "components";
import cn from "classnames";

const GalleryMob = ({ router }) => {
  // console.log(items);
  const isPerformancesPage = router.asPath === "/performances";
  // console.log(isPerformancesPage);
  return (
    <div className={styles.galleryMob}>
      <ul className={cn(styles.galleryMob__list, {[styles.galleryMob__list_perfPage]: isPerformancesPage})}>
        {items.map((el) => (
          <EventImagineMob
            key={el.id[router.locale]}
            router={router}
            id={el.id}
            image={el.image}
            name={el.name}
            place={el.place}
          />
        ))}
      </ul>
    </div>
  );
};

export default GalleryMob;
