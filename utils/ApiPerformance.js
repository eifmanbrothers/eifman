import handlerResponse from './handlerRes'
import { API_URL } from 'configs/variables'

class Api {
  constructor({ address, headers }) {
    this.address = address;
    this.headres = headers;
  }
  // getRepertoires(locale) {
  //   // console.log(locale)
  //   return fetch(`${this.address}/api/performances?locale=${locale}`, {
  //     // return fetch(`${this.address}/api/news?locale=${locale}&pagination[start]=0&pagination[limit]=3`, {
  //     method: "GET",
  //     headers: this.headres,
  //   })
  //     .then(handlerResponse)
  // }
  getPerformance(id) {
    return fetch(`${this.address}/api/performances/${id}?populate=*`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }
}

const apiPerformance = new Api({
  address: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiPerformance