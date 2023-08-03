import styles from "./styles.module.scss";
import cn from "classnames";
import { NavItem } from "components";

const NavBottom = ({ submenu = [], locale, column }) => {
  // const isColoumnNeedStyle = submenu[0]
  //   ? submenu[0]["path"]?.contains("performances")
  //   : false;
  // const addStyle = () => {
  //   if (submenu) {
  //     const firstObj = submenu[0];
  //     const str = firstObj?.path;
  //     console.log(str);
  //     // console.log(str.contains("performance"));
  //   }
  // };
  // addStyle();
  // console.log(submenu);
  return (
    <ul
      className={cn(styles.navBottom, {
        [styles.navBottom_column]: column,
      })}
    >
      {submenu.map((el) => (
        <NavItem key={el.path} {...el} locale={locale} place="submenu" />
      ))}
    </ul>
  );
};

export default NavBottom;
