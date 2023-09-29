import styles from "./styles.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import items from "constants/navPerfPage";
import cn from "classnames";
import { perfInfoList } from "components";

const PerfInfo = ({ data }) => {
  const router = useRouter();
  const [activeComponent, setActiveComponent] = useState("resume");
  // console.log(data);
  let currentComponent;
  switch (activeComponent) {
    case "resume": {
      currentComponent = perfInfoList ? (
        <perfInfoList.Resume data={data.resume} />
      ) : null;
      break;
    }
    case "introduction": {
      currentComponent = perfInfoList ? (
        <perfInfoList.Introduction data={data.introduction} />
      ) : null;
      break;
    }
  }
  //   console.log(data);
  return (
    <div>
      <nav className={styles.perfInfo__nav}>
        {items.map((el) => (
          <li
            key={el.type}
            className={cn(styles.perfInfo__item, {
              [styles.perfInfo__item_active]: activeComponent === el.type,
            })}
          >
            <button
              className={styles.perfInfo__btn}
              onClick={() => setActiveComponent(el.type)}
            >
              {el.name[router.locale]}
            </button>
          </li>
        ))}
      </nav>
      {currentComponent}
    </div>
  );
};

export default PerfInfo;
