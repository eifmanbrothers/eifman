import styles from "./styles.module.scss";
import { ItemEvent } from "components";

const ListEventsBileter = ({ list = [] }) => {
  // console.log(1, list);
  const arr = list.reduce((obj, el) => {
    // console.log(2, el);
    const events = el[1];
    events.forEach((element) => {
      obj.push(element);
    });
    // console.log(33, events);
    return obj;
  }, []);
  console.log(3, arr);
  // console.log(1, list[0][1][0]);
  return (
    <ul>
      {arr.map((el) => (
        <ItemEvent key={el.IdPermormance} {...el} />
      ))}
    </ul>
  );
};

export default ListEventsBileter;
