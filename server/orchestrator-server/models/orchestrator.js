const axios = require('axios')

class Ochestrator {
  static findAll() {
    // const movies = axios.get('http://localhost:4001/movies')
    // const tvSeries = axios.get('http://localhost:4002/tvseries')
    return Promise.all([axios.get('http://localhost:4001/movies'), axios.get('http://localhost:4002/tvseries')])
  }
}

module.exports = Ochestrator