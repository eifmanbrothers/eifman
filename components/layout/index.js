import { Header, Nav, Footer, Gallery, Loader } from "components";
import { useRouter } from "next/router";
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
      <Header />
      {/* {router.asPath === '/' && <Gallery />} */}
      {router.asPath !== "/performances" && <Nav />}
      <main>{children}</main>
      {/* {router.asPath === '/performances' && <Nav />} */}
      <Footer locale={router.locale} />
    </div>
  );
}
