const axios = require('axios')

class TvSerie {
  static findAll () {
    return axios.get('http://localhost:4002/tvseries')
  }
  static findOne (id) {
    return axios.get('http://localhost:4002/tvseries/' + id)
  }
  static create (data) {
    return axios.post('http://localhost:4002/tvseries', data)
  }
  static destroy (id) {
    return axios.delete('http://localhost:4002/tvseries/' + id)
  }
  static update (id, data) {
    return axios.put('http://localhost:4002/tvseries/'+ id , data)
  }
}

module.exports = TvSerie