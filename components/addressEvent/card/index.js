import styles from "./styles.module.scss";

const Card = ({ country, city, theatre }) => {
  return (
    <div className={styles.card}>
      <p className={styles.card__city}>{country + ", " + city}</p>
      <p className={styles.card__theatre}>{theatre}</p>
    </div>
  );
};

export default Card;
