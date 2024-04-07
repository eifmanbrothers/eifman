import styles from "./styles.module.scss";
import { useState } from "react";
import cn from "classnames";

const MobileMenu = ({ handler, isOpen }) => {
  return (
    <div className={styles.menuMobile}>
      <input
        id="menu__toggle"
        type="checkbox"
        className={cn(styles.menu__toggle)}
        onClick={handler}
        checked={isOpen}
        readOnly
      />
      <label className={cn(styles.menu__btn)} htmlFor="menu__toggle">
        <span className={styles.span}></span>
      </label>
    </div>
  );
};

export default MobileMenu;
