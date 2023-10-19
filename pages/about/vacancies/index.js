import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { NavBottomPage, MenuOnPage, MetaData } from "components";
import { metaInfo } from "constants/metaInfo";
import api from "utils/ApiPrincipals";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const Vacancies = ({ data }) => {
  const router = useRouter();
  return (
    <section className={styles.vacancies}>
      <MetaData
        {...metaInfo.find((el) => el.page === "vacancies")}
        locale={router.locale}
      />
      <MenuOnPage place="vacancies" locale={router.locale} />
      <ul className={styles.vacancies__list}>
        {data.map((item) => (
          <li key={item.id} className={styles.vacancies__item}>
            {/* <h4>{item.attributes.source}</h4> */}
            {/* <span></span> */}
            <p className={styles.vacancies__vacancy}>
              {item.attributes.vacancy}
            </p>
            <div>
              <ReactMarkdown>{item.attributes.content}</ReactMarkdown>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.vacancies__contact}>
        {router.locale === "ru"
          ? "Резюме по всем вакансиям присылать на адрес "
          : "Please send your resume for vacancies to "}
        <Link
          href="mailto:kadry@eifmanballet.com"
          className={styles.vacancies__contactEmail}
        >
          {" kadry@eifmanballet.com"}
        </Link>
      </p>
      <NavBottomPage locale={router.locale} />
    </section>
  );
};

export default Vacancies;

export async function getServerSideProps(context) {
  const { locale } = context;
  const res = await api.getVacancies(locale);
  return { props: { data: res.data } };
}
