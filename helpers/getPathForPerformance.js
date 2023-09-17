export default (name, locale) => {
  let path;
  switch (name) {
    case "Чайка. Балетная история":
      {
        path = locale === "ru" ? "24" : "23";
      }
      break;
    case "Роден, ее вечный идол/Rodin, her eternal idol":
      {
        path = locale === "ru" ? "12" : "11";
      }
      break;
    case "Эффект Пигмалиона/The Pygmalion Effect":
      {
        path = locale === "ru" ? "4" : "3";
      }
      break;

    default:
      "set-current-name-for-path";
      break;
  }
  return path;
};
