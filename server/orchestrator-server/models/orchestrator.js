const axios = require('axios')

class Ochestrator {
  static findAll() {
    const movies = axios.get('http://localhost:4001/movies')
    const tvSeries = axios.get('http://localhost:4002/tvseries')
    return Promise.all([movies, tvSeries])
  }
}

module.exports = Ochestrator