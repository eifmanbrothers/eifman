import handlerResponse from "./handlerRes";
import { API_URL } from "configs/variables";

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
}

const api = new Api({
  address: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
