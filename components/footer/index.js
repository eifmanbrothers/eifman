import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";
import { Copyright, Contacts } from "components";

const Footer = ({ locale }) => {
  const { t } = useTranslation();

  // console.log(router.asPath)
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__content}>
        <Copyright />
        <Contacts locale={locale} />
      </section>
    </footer>
  );
};

export default Footer;
