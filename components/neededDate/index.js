import styles from "./styles.module.scss";
import moment from "moment";
import "moment/locale/ru";
import cn from "classnames";

const NeededDate = ({ date, locale, time, format = "ll", place }) => {
  const neededDate = moment(date).locale(locale).format(format);

  return (
    <time
      dateTime={time}
      // dateTime={moment(time).locale(locale).format('LT')}
      className={cn(styles.neededDate, styles[place])}
    >
      {neededDate}
    </time>
  );
};

export default NeededDate;
