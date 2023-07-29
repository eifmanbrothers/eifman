import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";
import { Copyright, Contacts, NavFooter, SocialLinks, Owner } from "components";

const Footer = ({ locale }) => {
  const { t } = useTranslation();

  // console.log(router.asPath)
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__content}>
        <Copyright />
        <Contacts locale={locale} />
        <NavFooter />
        <div className={styles.footer__links}>
          <SocialLinks place="footer" />
          <Owner />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
