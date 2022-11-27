import handlerResponse from './handlerRes'
const { API_URL } = process.env

class Api {
  constructor({ address, headers }) {
    this.address = address;
    this.headres = headers;
  }

  getEnsembles(locale) {
    return fetch(`${this.address}/api/ensembles?populate=position&populate=avatar&locale=${locale}`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  getMember(id) {
    // console.log(locale)
    return fetch(`${this.address}/api/ensembles/${id}?populate=*`, {
      // return fetch(`${this.address}/ensembles/${id}?locale=${locale}`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }
}

//создаем экземпляр
const api = new Api({
  address: API_URL,
  headers: {
    // "Contetnt-Type": "multipart/form-data",
    "Content-Type": "application/json",
  },
});

export default api