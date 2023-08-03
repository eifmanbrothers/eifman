import { MenuOnPage, NavBottomPage } from "components";
import { useRouter } from "next/router";

const Eifman = () => {
  const router = useRouter();
  return (
    <>
      <MenuOnPage place="eifman" locale={router.locale} />
      <NavBottomPage locale={router.locale} />
      {/* <h3>Page Eifman</h3> */}
    </>
  );
};

export default Eifman;
