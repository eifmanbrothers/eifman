import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import image from "images/kkLogo.svg";

const BuyBilet = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className={styles.buyBilet}>
      <div className={styles.buyBilet__bileterInfo}>
        <Link className={styles.buyBilet__btn} href="/schedule">
          {t("common:nameButtonBuy").toUpperCase()}
        </Link>
        <p className={styles.buyBilet__span}>{t("common:spanButtonBuy")}</p>
      </div>
      <Link
        href="https://www.spbculture.ru/"
        className={styles.buyBilet__logoKk}
        target="_blank"
      >
        <Image src={image} alt="Комитет по культуре" />
      </Link>
    </div>
  );
};

export default BuyBilet;
