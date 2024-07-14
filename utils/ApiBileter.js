import handlerResponse from "./handlerRes";
import { API_BILETER, API_URL } from "configs/variables";

class Api {
  constructor({ address, headers }) {
    this.address = address;
    this.headers = headers;
  }

  getCovers(locale) {
    return fetch(`${API_URL}/api/covers?populate=images`, {
      method: "GET",
      headers: this.headers,
    }).then(handlerResponse);
  }

  getDataLocal(locale, period) {
    return fetch(
      `${API_URL}/api/events?populate[hall][populate][0]=country,city,address,theatre,stage&populate[images]=data&populate=performance${
        locale
          ? `&locale=${locale}&filters[PerfDate][$contains]=${period}&sort=PerfDate:asc`
          : `&filters[PerfDate][$contains]=${period}&sort=PerfDate:asc`
      }`,
      {
        method: "GET",
        headers: this.headers,
      }
    ).then(handlerResponse);
  }

  getDataBileter(period) {
    return fetch(
      `${this.address}/42d9de71f65cd840b11c96e24de087a5/afisha/get-afisha?json=1${period}`,
      {
        method: "GET",
        headers: this.headers,
      }
    ).then(handlerResponse);
  }
  getDataBileterMonth(period) {
    // console.log(
    //   `${
    //     this.address
    //   }/42d9de71f65cd840b11c96e24de087a5/afisha/get-afisha?json=1${
    //     period && `&month=${period}`
    //   }`
    // );
    //  &date_from=2024-07-02&date_to=2025-03-31
    return fetch(
      // `${this.address}/42d9de71f65cd840b11c96e24de087a5/afisha/get-afisha?json=1&date_from=2024-08`,
      `${
        this.address
      }/42d9de71f65cd840b11c96e24de087a5/afisha/get-afisha?json=1${
        period && `&date_from=${period}`
      }`,
      {
        method: "GET",
        headers: this.headers,
      }
    ).then(handlerResponse);
  }

  getTickets(locale, period) {
    return Promise.all([
      this.getDataBileterMonth(period.bileter),
      this.getDataLocal(locale, period.local),
      this.getCovers(locale),
    ]);
  }
}

const api = new Api({
  address: API_BILETER,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default api;
