import styles from "./styles.module.scss";
import { CoverCard, eventFullInfo } from "components";

const TicketsPageLocal = (props) => {
  const { attributes: { images: { data: images } = {} } = {} } = props;
  return (
    <li className={styles.cardLocal} onClick={props.clickHandler}>
      <CoverCard images={images} />
      <eventFullInfo.Card {...props?.attributes} />
    </li>
  );
};

export default TicketsPageLocal;
