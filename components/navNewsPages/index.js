import styles from "./styles.module.scss";
import Link from "next/link";
import cn from "classnames";
import { useState, useEffect } from "react";
const COUNT_RANGE_NEWS = 7;

const NavNewsPages = ({ allPages, currentPath }) => {
  const [currentList, setCurrentList] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(COUNT_RANGE_NEWS);
  const arrNumbersPage = [];

  for (let i = 1; i <= allPages; i = i + 1) {
    arrNumbersPage.push(i);
  }

  useEffect(() => {
    setCurrentList(arrNumbersPage.slice(start, end));
  }, [start, end]);

  const handlePlus = () => {
    setStart(start + COUNT_RANGE_NEWS);
    setEnd(end + COUNT_RANGE_NEWS);
  };

  const handleMinus = () => {
    setStart(start - COUNT_RANGE_NEWS);
    setEnd(end - COUNT_RANGE_NEWS);
  };

  const isStartRange = start === 0;
  const isEndRange =
    arrNumbersPage.length === end || arrNumbersPage.length < end;

  return (
    <div className={styles.navNewsContainer}>
      <button
        disabled={isStartRange}
        className={cn(styles.navNews__btn, {
          [styles.navNews__btn_disabled]: isStartRange,
        })}
        onClick={handleMinus}
      ></button>
      <nav className={styles.navNews}>
        {currentList.map((el) => {
          return (
            <li key={el} className={styles.navNews__item}>
              <Link
                href={`/news?page=${el}`}
                className={cn(styles.navNews__link, {
                  [styles.navNews__link_active]:
                    `/news?page=${el}` === currentPath,
                })}
              >
                {el}
              </Link>
            </li>
          );
        })}
      </nav>
      <button
        disabled={isEndRange}
        onClick={handlePlus}
        className={cn(styles.navNews__btn, styles.navNews__btn_right, {
          [styles.navNews__btn_disabled]: isEndRange,
        })}
      ></button>
    </div>
  );
};

export default NavNewsPages;
