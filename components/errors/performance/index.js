import styles from "./styles.module.scss";
import Link from "next/link";

const Performance = () => {
  return (
    <>
      <h4 className={styles.performance}>there is not performance</h4>
      <Link className={styles.performance__link} href="/">
        to main Page
      </Link>
    </>
  );
};

export default Performance;
