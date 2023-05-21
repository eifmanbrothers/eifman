import moment from "moment";
const TO_MONTHS = 3;

module.exports = () => {
  const date = new Date();
  const currentDate = moment(date);
  const lastDayCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  );
  const threeMonth = moment(lastDayCurrentMonth).add(TO_MONTHS, "M");
  return `&from=${currentDate.format("YYYY-MM-DD")}&to=${threeMonth.format(
    "YYYY-MM-DD"
  )}`;
};
