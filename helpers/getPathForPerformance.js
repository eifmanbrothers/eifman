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
    case "Анна Каренина/Anna Karenina":
      {
        path = locale === "ru" ? "2" : "1";
      }
      break;
    case "Русский Гамлет/Russian Hamlet":
      {
        path = locale === "ru" ? "8" : "7";
      }
      break;
    case "250 лет Московской государственной академии хореографии: Балеты Бориса Эйфмана «Мусагет» и «Мой Иерусалим»":
      {
        path = locale === "ru" ? "22" : "21";
      }
      break;
    case "Преступление и наказание":
      {
        path = locale === "ru" ? "36" : "35";
      }
      break;
    case "Красная Жизель/Red Giselle":
      {
        path = locale === "ru" ? "6" : "5";
      }
      break;

    default:
      path = "set-current-name-for-path-helpers-get-path";
      break;
  }
  return path;
};
