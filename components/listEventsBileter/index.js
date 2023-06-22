import styles from "./styles.module.scss";
import { ItemEvent } from "components";

const ListEventsBileter = ({ list = [], locale }) => {
  const arr = list.reduce((obj, el) => {
    const events = el[1];
    events.forEach((element) => {
      obj.push(element);
    });
    return obj;
  }, []);

  return (
    <ul className={styles.listEventsBileter}>
      {arr.map((el) => (
        <ItemEvent key={el.IdPerformance} {...el} locale={locale} />
      ))}
    </ul>
  );
};

export default ListEventsBileter;
