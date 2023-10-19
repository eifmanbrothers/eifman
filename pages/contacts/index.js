import styles from "./styles.module.scss";
import data from "constants/contacts";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import Link from "next/link";

const Contacts = () => {
  const { addressFirst, addressSecond } = data;
  const router = useRouter();
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__block}>
        <div className={styles.contacts__imgWrapper}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A80d7c0eb1eb0eedcade85d7c465ec1c1f0d2051af9d3a6423735538844806379&amp;source=constructor"
            width="460"
            height="240"
            style={{ border: 0 }}
          ></iframe>
        </div>
        <div className={styles.contacts__content}>
          <ReactMarkdown>{addressFirst[router.locale]}</ReactMarkdown>
          <p className={styles.contacts__contact}>
            {router.locale === "ru" ? "Для резюме:" : "For vacancies:"}
            <Link
              href="mailto:kadry@eifmanballet.com"
              className={styles.vacancies__contactEmail}
            >
              {" kadry@eifmanballet.com"}
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.contacts__block}>
        <div className={styles.contacts__imgWrapper}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4cf62a79992c9012fdf50e1ca865b1a49cf19e4f54950e427604b71b58319822&amp;source=constructor"
            width="460"
            height="240"
            style={{ border: 0 }}
          ></iframe>
        </div>
        <div className={styles.contacts__content}>
          <ReactMarkdown>{addressSecond[router.locale]}</ReactMarkdown>
          <p className={styles.contacts__contact}>
            {router.locale === "ru" ? "Общие вопросы:" : "General enquiries:"}
            <Link
              href="mailto:info@eifmanballet.com "
              className={styles.vacancies__contactEmail}
            >
              {" info@eifmanballet.com "}
            </Link>
          </p>
          <p className={styles.contacts__contact}>
            {router.locale === "ru" ? "Пресс-служба:" : "Press office:"}
            <Link
              href="mailto:pr@eifmanballet.com"
              className={styles.vacancies__contactEmail}
            >
              {" pr@eifmanballet.com "}
            </Link>
          </p>
          <p className={styles.contacts__contact}>
            {router.locale === "ru"
              ? "Просмотр артистов балета:"
              : "Dancer audition:"}
            <Link
              href="mailto:maiya@eifmanballet.com"
              className={styles.vacancies__contactEmail}
            >
              {" maiya@eifmanballet.com "}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
