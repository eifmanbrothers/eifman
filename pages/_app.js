import "../styles/globals.css";
import Script from "next/script";
import { useRouter } from "next/router";
import {
  srcScript,
  srcScriptEn,
  srcStyle,
  srcStyleTheatre,
} from "configs/bileter";
import { Layout } from "components";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isTicketsPage = router.pathname.includes("/tickets");
  return (
    <Layout>
      <link
        href={srcStyle.href}
        rel={srcStyle.rel}
        type={srcStyle.type}
        media={srcStyle.media}
      />
      <link
        href={srcStyleTheatre.href}
        rel={srcStyleTheatre.rel}
        type={srcStyleTheatre.type}
        media={srcStyleTheatre.media}
      />
      <Component {...pageProps} />
      {/* <Script src={srcScript} /> */}
      {isTicketsPage && (
        <Script
          onLoad={() => router.reload()}
          strategy="beforeInteractive"
          src={router.locale === "ru" ? srcScript : srcScriptEn}
        />
      )}
    </Layout>
  );
}

export default MyApp;
