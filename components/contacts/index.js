import styles from "./styles.module.scss";
import data from "configs/contacts";

const Contacts = ({ locale }) => {
  return (
    <div className={styles.contacts}>
      <p className={styles.contacts__org}>{data[0][locale]}</p>
      <p className={styles.contacts__phone}>{data[1][locale]}</p>
      <a href={"tel:" + data[1]["value"]}>{data[1]["value"]}</a>
      <p className={styles.contacts__mail}>{data[2][locale]}</p>
      <a className={styles.contacts__link} href={"mailto:" + data[2]["value"]}>
        {data[2]["value"]}
      </a>
      <p className={styles.contacts__mail}>{data[3][locale]}</p>
      <a className={styles.contacts__link} href={"mailto:" + data[3]["value"]}>
        {data[3]["value"]}
      </a>
      <p className={styles.contacts__mail}>{data[4][locale]}</p>
      <a className={styles.contacts__link} href={"mailto:" + data[4]["value"]}>
        {data[4]["value"]}
      </a>
      <p className={styles.contacts__mail}>{data[5][locale]}</p>
      <a className={styles.contacts__link} href={"mailto:" + data[5]["value"]}>
        {data[5]["value"]}
      </a>
    </div>
  );
};

export default Contacts;
