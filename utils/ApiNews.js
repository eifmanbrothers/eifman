import handlerResponse from './handlerRes'
import { API_URL } from 'constants/variables'

class Api {
  constructor({ address, headers }) {
    this.address = address;
    this.headres = headers;
  }

  getNewsPart(locale) {
    // console.log(locale)
    return fetch(`${this.address}/api/news?locale=${locale}&pagination[start]=0&pagination[limit]=3`, {
      method: "GET",
      headers: this.headres,
    })
      .then(handlerResponse)
  }

  getNews(locale) {
    // console.log(locale)
    return fetch(`${this.address}/api/news?locale=${locale}&populate=image`, {
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