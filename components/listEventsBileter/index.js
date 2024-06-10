import styles from "./styles.module.scss";
import { ItemEventBileter } from "components";

const ListEventsBileter = ({ list = [], locale }) => {
  return (
    <ul className={styles.listEventsBileter}>
      {list.map((el) => (
        <ItemEventBileter key={el.IdPerformance} {...el} locale={locale} />
      ))}
    </ul>
  );
};

export default ListEventsBileter;
