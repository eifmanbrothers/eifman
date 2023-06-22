import { Header, Nav, Footer, Gallery } from "components";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="root">
      <Header />
      {/* {router.asPath === '/' && <Gallery />} */}
      {router.asPath !== "/performances" && <Nav />}
      <main>{children}</main>
      {/* {router.asPath === '/performances' && <Nav />} */}
      <Footer />
    </div>
  );
}
