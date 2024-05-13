import styles from "./styles.module.scss";
import Link from "next/link";

const Performance = () => {
  return (
    <>
      <h4 className={styles.performance}>a performance unavailable</h4>
      <Link className={styles.performance__link} href="/">
        Main page
      </Link>
    </>
  );
};

export default Performance;
