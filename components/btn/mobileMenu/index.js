import cn from "classnames";
import styles from "./styles.module.scss";

const MobileMenu = ({ handler, isOpen }) => {
  return (
    <div className={styles.menuMobile}>
      <input
        id="menu__toggle"
        type="checkbox"
        className={cn(styles.menu__toggle)}
        onClick={handler}
        checked={isOpen}
        onChange={() => null}
        // readOnly
      />
      <label className={cn(styles.menu__btn)} htmlFor="menu__toggle">
        <span className={styles.span}></span>
      </label>
    </div>
  );
};

export default MobileMenu;
