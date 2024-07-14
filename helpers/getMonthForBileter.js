import moment from "moment";
export default (countMonth) => {
  const dateBileter = moment(new Date());
  const dateLocal = moment(new Date());

  return {
    bileter: countMonth
      ? dateBileter.add(countMonth, "month").format("YYYY-MM")
      : dateBileter.format("YYYY-MM"),

    local: countMonth
      ? dateLocal.add(countMonth, "month").format("MM.YYYY")
      : dateLocal.format("MM.YYYY"),
  };
};
