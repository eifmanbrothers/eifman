import styles from "./styles.module.scss";
import moment from "moment";
import "moment/locale/ru";
import useTranslation from "next-translate/useTranslation";
import { DateEvent, infoEvent, btn } from "components";

const ItemEvent = (props) => {
  const { t } = useTranslation();
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

  return (
    <li className={styles.itemEvent}>
      <DateEvent date={date} locale={locale} />
      <infoEvent.TicketsPage
        pushkinCard={PushkinCard}
        name={Name}
        buildingName={BuildingName}
        address={Address}
      />
      <div className={styles.itemEvent__time}>
        <p className={styles.itemEvent__timeAt}>{t("tickets:startEvent")}</p>
        <p className={styles.itemEvent__timeAt}>{time}</p>
      </div>
      <btn.BuyTicket
        isTicket={HasTickets}
        btnName={HasTickets ? t("tickets:buyTicket") : t("tickets:noTicket")}
        id={IdPerformance}
      />
    </li>
  );
};

export default ItemEvent;
