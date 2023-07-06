export default (altText, locale) => {
  const index = altText?.indexOf("/");
  return locale === "ru"
    ? altText?.slice(0, index)
    : altText?.slice(index + 1, altText.length);
};
