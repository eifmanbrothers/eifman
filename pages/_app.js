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
      <Component {...pageProps} />
      {/* <Script src={srcScript} /> */}
      {isTicketsPage && (
        <Script
          // onLoad={() => router.reload()}
          strategy="beforeInteractive"
          src={router.locale === "ru" ? srcScript : srcScriptEn}
        />
      )}
    </Layout>
  );
}

export default MyApp;
