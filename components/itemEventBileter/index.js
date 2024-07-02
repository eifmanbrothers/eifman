import styles from "./styles.module.scss";
import moment from "moment";
import "moment/locale/ru";
import useTranslation from "next-translate/useTranslation";
import { DateEventBileter, infoEvent, btn } from "components";

const ItemEventBileter = (props) => {
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
    <li className={styles.itemEventBileter}>
      <DateEventBileter date={date} locale={locale} time={time} />
      <infoEvent.TicketsPage
        pushkinCard={PushkinCard}
        name={Name}
        buildingName={BuildingName}
        address={Address}
      />
      <btn.BuyTicket
        isTicket={HasTickets}
        btnName={HasTickets ? t("tickets:buyTicket") : t("tickets:noTicket")}
        // btnName={
        //   HasTickets
        //     ? t("tickets:buyTicket")
        //     : locale === "ru"
        //     ? "нет билетов"
        //     : "no tickets"
        // }
        id={IdPerformance}
      />
    </li>
  );
};

export default ItemEventBileter;
