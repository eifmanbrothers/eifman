import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import { Logo, BuyBilet, SocialLinks, SwitcherLang } from "/components";
import { FadeLoader } from "react-spinners";

const Header = ({ router }) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      // console.log(url);
      if (url.includes("schedule")) setLoading(true);
      if (url.includes("tickets")) setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);
  return (
    <header className={styles.header}>
      <Logo />
      <BuyBilet />
      <SocialLinks />
      <SwitcherLang />
      {isLoading && (
        <div className={styles.header__spinner}>
          <FadeLoader color="#fff" />
        </div>
      )}
      {/* <Icon.ExclamationMark /> */}
      {/* <Icon.ExclamationMark /> */}
    </header>
  );
};

export default Header;
