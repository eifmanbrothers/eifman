import handlerResponse from './handlerRes'
import { API_URL, AMOUNT_NEWS } from 'configs/variables'

class Api {
  constructor({ address, headers }) {
    this.address = address;
    this.headres = headers;
  }

  getNewsPart(locale) {
    // console.log(locale)
    return fetch(`${this.address}/api/news?locale=${locale}&sort=date:desc&pagination[start]=0&pagination[limit]=5`, {
      // return fetch(`${this.address}/api/news?locale=${locale}&pagination[start]=0&pagination[limit]=3`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  getNews(locale, page) {
    // console.log(locale)
    return fetch(`${this.address}/api/news?locale=${locale}&populate=image&pagination[pageSize]=${AMOUNT_NEWS}&sort=date:desc&pagination[page]=${page || "1"}`, {
      // pagination[pageSize]=2&pagination[page]=2
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  getNewsSingle(id) {
    return fetch(`${this.address}/api/news/${id}?populate=*`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }
}

const api = new Api({
  address: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api