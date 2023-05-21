import styles from "./styles.module.scss";
import moment from "moment";
import "moment/locale/ru";
import { useRouter } from "next/router";

const TicketsPage = ({ months, changeMonth }) => {
  const router = useRouter();
  return (
    <nav className={styles.ticketsPage}>
      <ul className={styles.ticketsPage__list}>
        {months.map((el) => {
          const month = moment(el);
          const str = month.locale(router.locale).format("MMMM");

          return (
            <li
              key={el}
              className={styles.ticketsPage__item}
              onClick={() => changeMonth(el)}
            >
              {str.replace(str[0], str[0].toUpperCase())}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TicketsPage;
