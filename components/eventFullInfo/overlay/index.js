import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { CoverCard, addressEvent, eventTime } from "components";
import moment from "moment";
import cn from "classnames";
import getNameEventBileter from "helpers/getNameEventBileter";
import getEventInfoBileter from "helpers/getEventInfoBileter";
import namesSpb from "configs/namesSpb";
import areasSpb from "configs/areasSpb";

const Overlay = (props) => {
  const {
    IdPerformance,
    HasTickets,
    BuildingName,
    Address: address,
    Name: name,
    PerfDate,
    PushkinCard,
    locale,
    images,
    attributes,
  } = props;
  const { t } = useTranslation();

  console.log(props);
  const currentTheatre = getEventInfoBileter(address, areasSpb, locale);
  const currentName =
    getNameEventBileter(name, namesSpb, locale) ||
    attributes?.performance?.data?.attributes?.name ||
    attributes?.Name;
  // console.log(id);
  const isLocalData = typeof currentTheatre === "string";
  // console.log(props);
  return (
    <div
      className={cn(styles.overlay, {
        // props have one key, if there is not currentEvent (buyEvent) three
        [styles.overlay_active]: Object.keys(props).length > 2,
      })}
      onClick={(evt) =>
        evt.currentTarget === evt.target && props.closeHandler()
      }
    >
      <div className={styles.overlay__imgWrapper}>
        <CoverCard images={images || attributes?.images?.data} />
      </div>
      <div className={styles.overlay__content}>
        <h4 className={styles.overlay__title}>{currentName}</h4>
        <eventTime.CardTicketsPage
          data={PerfDate || attributes?.PerfDate}
          locale={locale}
        />
        <addressEvent.Card
          country={
            isLocalData
              ? attributes?.hall?.country?.data?.attributes?.name
              : currentTheatre?.country
          }
          city={
            isLocalData
              ? attributes?.hall?.city?.data?.attributes?.name
              : currentTheatre?.city
          }
          theatre={
            isLocalData
              ? attributes?.hall?.theatre?.data?.attributes?.name
              : currentTheatre?.theatre
          }
          locale={locale}
        />
        <p className={styles.overlay__about}>
          {t("tickets:nameBtnAboutPerformance")}
        </p>
        {attributes?.link ? (
          <Link
            href={attributes?.link}
            target="_blank"
            className={styles.overlay__link}
          >
            {t("tickets:nameBtnBuyTicket")}
          </Link>
        ) : (
          <button
            disabled={!HasTickets}
            id={`perf${IdPerformance}`}
            className={cn(
              styles.overlay__btn,
              "with_buy bileter_afisha_showhall",
              {
                [styles.overlay__btn_blocked]: !HasTickets,
              }
            )}
          >
            {HasTickets
              ? t("tickets:nameBtnBuyTicket")
              : t("tickets:nameBtnWithoutTickets")}
          </button>
        )}
      </div>
    </div>
  );
};

export default Overlay;
