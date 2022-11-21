const handlerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Извините, ошибка: ${res.status}`);
};

export default handlerResponse;
