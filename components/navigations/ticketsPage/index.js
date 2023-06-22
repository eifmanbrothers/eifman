import styles from "./styles.module.scss";
import moment from "moment";
import "moment/locale/ru";
import { useRouter } from "next/router";
import cn from "classnames";

const TicketsPage = ({ months, changeMonth, currentMonth }) => {
  const router = useRouter();

  return (
    <div className={styles.ticketsPage}>
      <ul className={styles.ticketsPage__list}>
        {months.map((el) => {
          const month = moment(el);
          const str = month.locale(router.locale).format("MMMM");
          return (
            <li
              key={el}
              className={cn(styles.ticketsPage__item, {
                [styles.ticketsPage__item_active]: currentMonth === el,
              })}
              onClick={() => (currentMonth === el ? null : changeMonth(el))}
            >
              {str.replace(str[0], str[0].toUpperCase())}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TicketsPage;
