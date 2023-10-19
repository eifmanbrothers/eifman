import styles from "./styles.module.scss";
import moment from "moment";

const CardTicketsPage = ({ data, locale }) => {
  const regex = /\./g;
  const date =
    data?.length < 20
      ? moment(data?.replace(regex, "-"), "DD-MM-YYYY hh:mm:ss")
      : moment(data);
  const time = date.format("HH:mm");
  // console.log(data);
  return (
    <div className={styles.cardTicketsPage}>
      <div>
        <time
          dateTime={moment(date).locale(locale).format("LT")}
          className={styles.cardTicketsPage__month}
        >
          {moment(date).locale(locale).format("DD MMMM,")}
        </time>
        <p className={styles.cardTicketsPage__day}>
          {moment(date).locale(locale).format("dddd")}
        </p>
      </div>
      <time dateTime={date.format()} className={styles.cardTicketsPage__time}>
        {time}
      </time>
    </div>
  );
};

export default CardTicketsPage;
