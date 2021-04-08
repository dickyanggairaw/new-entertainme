const axios = require('axios')

class Movie {
  static findAll () {
    return axios.get('http://localhost:4001/movies')
  }
  static findOne (id) {
    return axios.get('http://localhost:4001/movies/' + id)
  }
  static create (data) {
    return axios.post('http://localhost:4001/movies', data)
  }
  static destroy (id) {
    return axios.delete('http://localhost:4001/movies/' + id)
  }
  static update (id, data) {
    return axios.put('http://localhost:4001/movies/'+ id , data)
  }
}

module.exports = Movie