import styles from "./styles.module.scss";
import { Header, Nav, Footer, Gallery, Loader, GalleryMob } from "components";
import { useRouter } from "next/router";
import cn from "classnames";
// import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const router = useRouter();
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     setLoading(true);
  //   };

  //   const handleRouteChangeComplete = () => {
  //     setLoading(false);
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);
  //   router.events.on("routeChangeComplete", handleRouteChangeComplete);

  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //     router.events.off("routeChangeComplete", handleRouteChangeComplete);
  //   };
  // }, [router.events]);
  return (
    <div className="root">
      <Header router={router} />
      {router.asPath === "/" && <Gallery />}
      {router.asPath === "/" && <GalleryMob router={router} />}
      {router.asPath !== "/performances" && <Nav />}
      <main
        className={cn({ [styles.main]: router.asPath === "/about/eifman" })}
      >
        {children}
      </main>
      {/* {router.asPath === '/performances' && <Nav />} */}
      <Footer locale={router.locale} />
    </div>
  );
}
