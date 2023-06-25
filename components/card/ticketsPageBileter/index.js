import styles from "./styles.module.scss";
import { CoverCard, eventFullInfo } from "components";

const TicketsPageBileter = (props) => {
  // console.log(images);
  return (
    <li className={styles.cardBileter} onClick={props.clickHandler}>
      <CoverCard images={props.images} />
      <eventFullInfo.Card {...props} />
    </li>
  );
};

export default TicketsPageBileter;
