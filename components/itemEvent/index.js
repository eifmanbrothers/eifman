import styles from "./styles.module.scss";
import moment from "moment";
import "moment/locale/ru";
import cn from "classnames";
import { DateEvent, infoEvent } from "components";

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
  const time = date.format("HH:mm");
  //   console.log(date);
  return (
    <li className={styles.itemEvent}>
      <DateEvent date={date} locale={locale} />
      <infoEvent.TicketsPage name={Name} buildingName={BuildingName} />
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
        ) : null}
      </div>
    </li>
  );
};

export default ItemEvent;
