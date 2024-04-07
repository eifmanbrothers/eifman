import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import image from "images/kkLogo.svg";

const BuyBilet = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.buyBilet}>
      <div className={styles.buyBilet__bileterInfo}>
        <Link className={styles.buyBilet__btn} href="/schedule">
          {t("common:nameButtonBuy").toUpperCase()}
        </Link>
        <p className={styles.buyBilet__span}>{t("common:spanButtonBuy")}</p>
      </div>
    </div>
  );
};

export default BuyBilet;
