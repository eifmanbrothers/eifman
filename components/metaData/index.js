import Head from "next/head";

const MetaData = ({
  title,
  //   linkFavicon = "https://eifman.com/favicon.ico",
  description,
  keywords,
  locale,
}) => {
  // console.log(keywords);
  return (
    <Head>
      {/* <link rel="icon" href={linkFavicon} type="image/x-icon" /> */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <title>{title?.[locale] || title}</title>
      <meta name="keywords" content={keywords?.[locale] || keywords}></meta>
      <meta
        name="description"
        content={description?.[locale] || description}
      ></meta>
      <meta name="author" content="dr"></meta>
      <meta 
        name="proculture-verification" 
        content="d0b899c1548f5fab3b4c4de341e964e0"
      ></meta>
    </Head>
  );
};

export default MetaData;
