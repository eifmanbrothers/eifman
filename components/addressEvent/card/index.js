import styles from "./styles.module.scss";
import cn from "classnames";

const Card = ({ country, city, theatre, locale }) => {
  // console.log(locale);
  return (
    <div className={cn(styles.card, { [styles.card_isOverlay]: locale })}>
      <p className={styles.card__city}>{country + ", " + city}</p>
      <p className={styles.card__theatre}>{theatre}</p>
    </div>
  );
};

export default Card;
