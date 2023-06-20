// import getCoversForEvent from "./getCoversForEvent";

export default (data) => {
  const [dataBileter, dataLocal, dataCovers] = data;
  const { data: covers } = dataCovers;
  // console.log(1, covers);
  const { data: eventsLocal } = dataLocal;
  const monthsBileter = Object.keys(dataBileter);
  const arrAllEventsBileter = monthsBileter.reduce((obj, el) => {
    const eventsMonth = Object.entries(dataBileter[el]);
    eventsMonth.forEach((element) => {
      const eventsDay = element[1];
      eventsDay.forEach((item) => obj.push(item));
    });
    return obj;
  }, []);
  const arrAllEvents = arrAllEventsBileter.concat(eventsLocal);

  return arrAllEvents;
};
