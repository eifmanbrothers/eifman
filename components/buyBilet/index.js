import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
// import Link from "next/link";

const BuyBilet = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className={styles.buyBilet}>
      <button
        type="button"
        className={styles.buyBilet__btn}
        onClick={() => router.push("/tickets")}
      >
        {t("common:nameButtonBuy").toUpperCase()}
      </button>
      <p className={styles.buyBilet__span}>{t("common:spanButtonBuy")}</p>
    </div>
  );
};

export default BuyBilet;
