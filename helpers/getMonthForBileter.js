import moment from "moment";
export default (countMonth) => {
  const dateBileter = moment(new Date());
  const dateLocal = moment(new Date());
  // console.log(123, countMounth);
  return {
    bileter: countMonth
      ? dateBileter.add(countMonth, "month").format("YYYY-MM")
      : dateBileter.format("YYYY-MM"),

    local: countMonth
      ? dateLocal.add(countMonth, "month").format("MM.YYYY")
      : dateLocal.format("MM.YYYY"),
  };
};
// 17-09-2023
// export default () => {
//   const date = new Date();
//   return (
//     date.getFullYear() +
//     "-" +
//     (date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1)
//   );
// };

// return {
//   bileter:
//     date.getFullYear() +
//     "-" +
//     (date.getMonth() < 10
//       ? "0" + (date.getMonth() + 1)
//       : date.getMonth() + 1),
//   local:
//     date.getMonth() < 10
//       ? "0" + (date.getMonth() + 1)
//       : date.getMonth() + 1 + "." + date.getFullYear(),
// };
