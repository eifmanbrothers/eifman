import styles from "./styles.module.scss";
import { items } from "constants/itemsGallery";
import { EventImagineMob } from "components";

const GalleryMob = ({ router }) => {
  return (
    <div className={styles.galleryMob}>
      <ul className={styles.galleryMob__list}>
        {items.map((el) => (
          <EventImagineMob
            key={el.id[router.locale]}
            router={router}
            id={el.id}
            image={el.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default GalleryMob;
