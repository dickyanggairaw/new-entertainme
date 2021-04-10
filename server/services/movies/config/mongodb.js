const { MongoClient } = require('mongodb')

const uri = "mongodb://localhost:27017"

const client = MongoClient(uri)
let database = null

function run (cb) {
  client.connect()
  .then(_ => {
    database = client.db('entertainMe')
    cb(true)
  })
  .catch(err => {
    cb(false)
    console.log(err)
  })
}

function getDatabase () {
  return database
}

module.exports = {
  run,
  getDatabase
}