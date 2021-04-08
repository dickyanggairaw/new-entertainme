const { ObjectId } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

const nameCollection = 'movies'

class Movie {
  static findAll () {
    const movies = getDatabase().collection(nameCollection)
    return movies.find().toArray()
  }
  static findOne (data) {
    const movies = getDatabase().collection(nameCollection)
    return movies.findOne({
      _id: ObjectId(data)
    })
  }
  static create (data) {
    const movies = getDatabase().collection(nameCollection)
    return movies.insertOne(data)
  }

  static destroy (data) {
    const movies = getDatabase().collection(nameCollection)
    return movies.deleteOne({
      _id: ObjectId(data)
    })
  }

  static update ({id, data}) {
    const query = {
      _id: ObjectId(id)
    }
    const update = {
      "$set": data
    };
    const movies = getDatabase().collection(nameCollection)
    return movies.updateOne(query, update)
  }
}

module.exports = Movie