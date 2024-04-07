import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import {
  Logo,
  BuyBilet,
  SocialLinks,
  SwitcherLang,
  btn,
  NavMobile,
} from "/components";
import { FadeLoader } from "react-spinners";
import Link from "next/link";
import image from "images/kkLogo.svg";
import Image from "next/image";
import cn from "classnames";

const Header = ({ router }) => {
  const [isLoading, setLoading] = useState(false);
  const [isOpenMobMenu, setIsOpenMobMenu] = useState(false);

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
    <header
      className={cn(styles.header, {
        [styles.header_mobMenuOpened]: isOpenMobMenu,
      })}
    >
      <Logo />
      <BuyBilet />
      <Link
        href="https://www.spbculture.ru/"
        className={styles.header__logoKk}
        target="_blank"
      >
        <Image
          src={image}
          alt="Комитет по культуре"
          className={styles.header__logoKkImg}
        />
      </Link>
      <btn.MobileMenu
        handler={() => setIsOpenMobMenu(!isOpenMobMenu)}
        isOpen={isOpenMobMenu}
      />
      <SocialLinks />
      <SwitcherLang />
      {isLoading && (
        <div className={styles.header__spinner}>
          <FadeLoader color="#fff" />
        </div>
      )}
      {/* <Icon.ExclamationMark /> */}
      {/* <Icon.ExclamationMark /> */}
      <NavMobile
        isOpen={isOpenMobMenu}
        router={router}
        handler={() => setIsOpenMobMenu(!isOpenMobMenu)}
      />
    </header>
  );
};

export default Header;
