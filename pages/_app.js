import "../styles/globals.css";
import Script from "next/script";
import { srcScript, srcStyle, srcStyleTheatre } from "configs/bileter";
import { Layout } from "components";

function MyApp({ Component, pageProps }) {
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
      <Script src={srcScript} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
