import handlerResponse from "./handlerRes";
import { API_URL } from "configs/variables";

class Api {
  constructor({ address, headers }) {
    this.address = address;
    this.headres = headers;
  }

  getPrincipal(locale) {
    // console.log(locale)
    return fetch(`${this.address}/api/principal?locale=${locale}`, {
      method: "GET",
      headers: this.headres,
    }).then(handlerResponse);
  }
}

const api = new Api({
  address: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
