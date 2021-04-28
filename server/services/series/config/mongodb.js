const { MongoClient } = require('mongodb')

// const uri = "mongodb://localhost:27017"
const uri = process.env.URI

const client = MongoClient(uri, {
  useNewUrlParser : true,
  useUnifiedTopology : true
})
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
