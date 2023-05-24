import styles from "./styles.module.scss";
import moment from "moment";
import "moment/locale/ru";
import cn from "classnames";

const ItemEvent = (props) => {
  const {
    IdPerformance,
    HasTickets,
    BuildingName,
    Address,
    Name,
    PerfDate,
    PushkinCard,
    locale,
  } = props;

  const regex = /\./g;
  const date = moment(PerfDate.replace(regex, "-"), "DD-MM-YYYY hh:mm:ss");
  const month = date.locale(locale).format("MMMM");
  const day = date.locale(locale).format("dddd");
  const time = date.format("HH:mm");
  //   console.log(date);
  return (
    <li className={styles.itemEvent}>
      <div className={styles.itemEvent__date}>
        <p>{date.date()}</p>
        <p>{month.replace(month[0], month[0].toUpperCase())}</p>
        <p>{day.replace(day[0], day[0].toUpperCase())}</p>
      </div>
      <div className={styles.itemEvent__event}>
        <p className={styles.itemEvent__name}>{Name}</p>
        <p className={styles.itemEvent__building}>{BuildingName}</p>
      </div>
      <div className={styles.itemEvent__time}>
        <p>starts at</p>
        <p>{time}</p>
      </div>
      <div>
        {HasTickets ? (
          <p
            id={`perf${IdPerformance}`}
            className={cn(
              "with_buy bileter_afisha_showhall",
              styles.itemEvent__btn
            )}
          >
            buy ticket
          </p>
        ) : (
          ""
        )}
      </div>
    </li>
  );
};

export default ItemEvent;
