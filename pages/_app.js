import "../styles/globals.css";
import Script from "next/script";
import { useRouter } from "next/router";
import { srcScript, srcScriptEn, srcScriptYaMap } from "configs/bileter";
import { Layout, errors } from "components";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isTicketsPage =
    router.pathname.includes("/tickets") ||
    router.pathname.includes("/schedule");

  return (
    <Layout>
      {/* <errors.SiteDev locale={router.locale} /> */}
      <Script src="/index.js" type="text/javascript" />
      <Script async 
        src="https://culturaltracking.ru/static/js/spxl.js?pixelId=38627" 
        strategy="afterInteractive"
        data-pixel-id="38627"
      />
      <Component {...pageProps} />
      {isTicketsPage && (
        <Script
          strategy="beforeInteractive"
          src={router.locale === "ru" ? srcScript : srcScriptEn}
        />
      )}
    </Layout>
  );
}

export default MyApp;
