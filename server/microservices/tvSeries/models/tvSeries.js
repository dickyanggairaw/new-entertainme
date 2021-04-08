const { ObjectId } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

const nameCollection = 'tvSeries'

class TvSerie {
  static findAll () {
    const tvSeries = getDatabase().collection(nameCollection)
    return tvSeries.find().toArray()
  }
  static findOne (data) {
    const tvSeries = getDatabase().collection(nameCollection)
    return tvSeries.findOne({
      _id: ObjectId(data)
    })
  }
  static create (data) {
    const tvSeries = getDatabase().collection(nameCollection)
    return tvSeries.insertOne(data)
  }

  static destroy (data) {
    const tvSeries = getDatabase().collection(nameCollection)
    return tvSeries.deleteOne({
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
    const tvSeries = getDatabase().collection(nameCollection)
    return tvSeries.updateOne(query, update)
  }
}

module.exports = TvSerie