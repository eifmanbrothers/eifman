export default (data) => {
  const monthsBileter = Object.keys(data);
  const arrAllEventsBileter = monthsBileter.reduce((obj, el) => {
    const eventsMonth = Object.entries(data[el]);
    eventsMonth.forEach((element) => {
      const eventsDay = element[1];
      eventsDay.forEach((item) => obj.push(item));
    });
    return obj;
  }, []);

  return arrAllEventsBileter;
};
