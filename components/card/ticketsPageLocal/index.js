import styles from "./styles.module.scss";
import { CoverCard, eventFullInfo } from "components";

const TicketsPageLocal = (props) => {
  // console.log(props);
  const {
    attributes: {
      images: { data: images } = {},
      // performance: { data: { attributes: { name } = {} } = {} } = {},
    } = {},
  } = props;
  // console.log(20, props);
  return (
    <li className={styles.cardLocal}>
      <CoverCard images={images} />
      <eventFullInfo.Card {...props?.attributes} />
    </li>
  );
};

export default TicketsPageLocal;
