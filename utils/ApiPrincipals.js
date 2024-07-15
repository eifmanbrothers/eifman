import handlerResponse from "./handlerRes";
import { API_URL } from "configs/variables";

class Api {
  constructor({ address, headers }) {
    this.address = address;
    this.headres = headers;
  }

  getPrincipal(locale) {
    return fetch(`${this.address}/api/principal?locale=${locale}`, {
      method: "GET",
      headers: this.headres,
    }).then(handlerResponse);
  }

  getPresenter(locale) {
    return fetch(`${this.address}/api/presenter?locale=${locale}`, {
      method: "GET",
      headers: this.headres,
    }).then(handlerResponse);
  }

  getPartners(locale) {
    return fetch(
      `${this.address}/api/partners?locale=${locale}&populate=logo`,
      {
        method: "GET",
        headers: this.headres,
      }
    ).then(handlerResponse);
  }

  getOfficial(locale) {
    return fetch(`${this.address}/api/official?locale=${locale}`, {
      method: "GET",
      headers: this.headres,
    }).then(handlerResponse);
  }

  getVacancies(locale) {
    return fetch(`${this.address}/api/vacancies?locale=${locale}`, {
      method: "GET",
      headers: this.headres,
    }).then(handlerResponse);
  }

  getDance(locale) {
    return fetch(
      `${this.address}/api/dance-academy-theatre?locale=${locale}&populate=images`,
      {
        method: "GET",
        headers: this.headres,
      }
    ).then(handlerResponse);
  }

  getPalace(locale) {
    return fetch(
      `${this.address}/api/dance-palace?locale=${locale}&populate=image`,
      {
        method: "GET",
        headers: this.headres,
      }
    ).then(handlerResponse);
  }

  getWorkshops(locale) {
    return fetch(
      `${this.address}/api/workshop?locale=${locale}&populate=images`,
      {
        method: "GET",
        headers: this.headres,
      }
    ).then(handlerResponse);
  }

  getAcademy(locale) {
    return fetch(
      `${this.address}/api/academy?locale=${locale}&populate=images`,
      {
        method: "GET",
        headers: this.headres,
      }
    ).then(handlerResponse);
  }
}

const api = new Api({
  address: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
