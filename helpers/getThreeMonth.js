import moment from "moment";
const TO_MONTHS = 8;
// give three or four month from today. To end last month
module.exports = () => {
  const date = new Date();
  const currentDate = moment(date);
  const lastDayCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  );
  const threeMonth = moment(lastDayCurrentMonth).add(TO_MONTHS, "M");
  return `&date_from=${currentDate.format(
    "YYYY-MM-DD"
  )}&date_to=${threeMonth.format("YYYY-MM-DD")}`;
};
