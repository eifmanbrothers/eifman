import styles from "./styles.module.scss";
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
    case "synopsis": {
      currentComponent = perfInfoList ? (
        <perfInfoList.Synopsis data={data.synopsis} />
      ) : null;
      break;
    }
    case "press": {
      currentComponent = perfInfoList ? (
        <perfInfoList.Press data={data.press} />
      ) : null;
      break;
    }
    case "video": {
      currentComponent = perfInfoList ? (
        <perfInfoList.Video data={data.videoLink} />
      ) : null;
      break;
    }
    case "gallery": {
      currentComponent = perfInfoList ? (
        <perfInfoList.Gallery data={data} />
      ) : null;
      break;
    }
    case "upcoming shows": {
      currentComponent = perfInfoList ? (
        <perfInfoList.Shows data={data} />
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
