import handlerResponse from './handlerRes'
import { API_BILETER } from 'configs/variables'

class Api {
  constructor({ address, headers }) {
    this.address = address
    this.headers = headers
  }

  getData() {
    return fetch(`${this.address}/42d9de71f65cd840b11c96e24de087a5/afisha?json=1&to=2023-12-31`, {
      method: 'GET',
      headers: this.headers
    })
      .then(handlerResponse)
  }
}

const api = new Api({
  address: API_BILETER,
  headers: {
    "Content-Type": "multipart/form-data",
  }
})

export default api
// &month=2022-01