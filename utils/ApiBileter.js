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
      // `${API_URL}/api/events?populate[hall][populate][0]=country,city,address,theatre,stage&populate[images]=data&populate=performance${
      //   locale ? `&locale=${locale}` : ""
      // }`,
      {
        method: "GET",
        headers: this.headers,
      }
    ).then(handlerResponse);
  }

  getDataBileter(period) {
    return fetch(
      `${this.address}/42d9de71f65cd840b11c96e24de087a5/afisha?json=1${
        period && `&to=${period}`
      }`,
      // `${this.address}/42d9de71f65cd840b11c96e24de087a5/afisha?json=1&to=2023-12-31`,
      {
        method: "GET",
        headers: this.headers,
      }
    ).then(handlerResponse);
  }
  getDataBileterMonth(period) {
    return fetch(
      `${this.address}/42d9de71f65cd840b11c96e24de087a5/afisha?json=1${
        period && `&month=${period}`
      }`,
      // `${this.address}/42d9de71f65cd840b11c96e24de087a5/afisha?json=1&to=2023-12-31`,
      {
        method: "GET",
        headers: this.headers,
      }
    ).then(handlerResponse);
  }
  // getDataBileter(period) {
  //   return fetch(
  //     `${this.address}/42d9de71f65cd840b11c96e24de087a5/afisha?json=1${
  //       period ? period : ""
  //     }`,
  //     {
  //       method: "GET",
  //       headers: this.headers,
  //     }
  //   ).then(handlerResponse);
  // }

  getTickets(locale, period) {
    // console.log(222, period);
    return Promise.all([
      this.getDataBileterMonth(period.bileter),
      // this.getDataLocal(locale),
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
// &month=2022-01
// &to=2023-12-31
