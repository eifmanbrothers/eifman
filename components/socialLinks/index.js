import styles from "./styles.module.scss";
import SocialLink from "/components/socialLink";
import { links } from "/constants/socialLinks";
import cn from "classnames";

const SocialLinks = ({ place }) => {
  return (
    <ul className={cn(styles.socialLinks, styles[place])}>
      {links.map((el) => (
        <li key={el.href} className={styles.socialLinks__item}>
          <SocialLink {...el} />
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
