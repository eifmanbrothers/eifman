import styles from "./styles.module.scss";

const ItemEvent = (props) => {
  const {
    IdPerformance,
    HasTickets,
    BuildingName,
    Address,
    Name,
    PerfDate,
    PushkinCard,
  } = props;

  return (
    <li>
      <p>{PerfDate}</p>
      <div>
        <p
          className="with_buy bileter_afisha_showhall"
          id={`perf${IdPerformance}`}
        >
          {IdPerformance}
        </p>
        <div>{BuildingName}</div>
        <div>{Name}</div>
      </div>
    </li>
  );
};

export default ItemEvent;
