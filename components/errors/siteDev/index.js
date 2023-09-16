import styles from "./styles.module.scss";
import { useState } from "react";
import Link from "next/link";
import data from "configs/errorDev";

const SiteDev = ({ locale }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div
      className={styles.siteDev}
      style={{ display: visible ? "flex" : "none" }}
    >
      <div className={styles.siteDev__content}>
        <p className={styles.siteDev__text}>{data.text[locale]}</p>
        <div className={styles.siteDev__choose}>
          <div className={styles.siteDev__linkWrapper}>
            <Link
              href="https://eifmanballet.com"
              className={styles.siteDev__link}
            >
              {data.link[locale]}
            </Link>
          </div>
          <button
            className={styles.siteDev__btn}
            onClick={(_) => setVisible(false)}
          >
            {data.btn[locale]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SiteDev;
