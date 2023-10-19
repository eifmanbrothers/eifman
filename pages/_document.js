import { Html, Head, Main, NextScript } from "next/document";
import { srcStyle, srcStyleTheatre } from "configs/bileter";

export default function Document() {
  return (
    <Html>
      <Head>
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
        <link
          rel="icon"
          href="https://eifmanballet.com/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
