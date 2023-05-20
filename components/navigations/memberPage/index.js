import styles from "./styles.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const MemberPage = ({ nameMember }) => {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <Link href="/ensemble" className={styles.nav__link}>
        {t("common:nameLinkMemberPage") + " " + "/"}
      </Link>
      <h4 className={styles.nav__memberName}>{nameMember}</h4>
    </nav>
  );
};

export default MemberPage;
