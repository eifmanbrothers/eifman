import styles from "./styles.module.scss";
import text from "constants/welcome";
import Image from "next/image";
import img from "images/eifman/eifman_in_circle.jpg";

const Welcome = ({ locale }) => {
  let blockquote = "";
  if (typeof window !== "undefined") {
    const random = Math.round(Math.random());
    blockquote = text[locale][random];
  }

  return (
    <section className={styles.welcome}>
      <div
        className={styles.welcome__content}
        style={{
          backgroundImage: `url(/eifman-sign-${locale}.jpg)`,
        }}
      >
        <div className={styles.welcome__imgWrapper}>
          <Image src={img} alt="Eifman Boris" priority />
        </div>
        <blockquote className={styles.welcome__text} suppressHydrationWarning>
          {blockquote}
        </blockquote>
      </div>
    </section>
  );
};

export default Welcome;
