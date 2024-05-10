import styles from "./styles.module.scss";
import cn from "classnames";

const TicketsPage = ({ name, buildingName, address, pushkinCard }) => {
  return (
    <div
      className={cn(styles.iTicketsPage, {
        [styles.iTicketsPage_hasPushkinCard]: 0,
        // [styles.iTicketsPage_hasPushkinCard]: parseInt(pushkinCard),
      })}
    >
      <p className={styles.iTicketsPage__name}>{name}</p>
      <p className={styles.iTicketsPage__building}>{buildingName}.</p>
      <p className={styles.iTicketsPage__address}>{address}</p>
    </div>
  );
};

export default TicketsPage;
