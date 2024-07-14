export default (data) => {
  const [dataBileter, dataLocal, dataCovers] = data;
  const { data: covers } = dataCovers;
  const { data: eventsLocal } = dataLocal;

  const arrAllEvents = dataBileter.concat(eventsLocal);

  return arrAllEvents;
};
