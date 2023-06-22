import styles from "./styles.module.scss";
import cn from "classnames";

const BuyTicket = ({ isTicket, btnName, id }) => {
  return (
    <button
      disabled={!isTicket}
      id={`perf${id}`}
      className={cn(styles.buyTicket, "with_buy bileter_afisha_showhall", {
        [styles.buyTicket_blocked]: !isTicket,
      })}
    >
      {btnName}
    </button>
  );
};

export default BuyTicket;
