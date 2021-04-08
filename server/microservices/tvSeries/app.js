const express = require('express')
const app = express()
const PORT = 4002

const router = require('./routes')
const {run} = require('./config/mongodb')
const err = require('./middlewares/errorHandler')

run(cb => {
  if(cb) {
    console.log('success connect mongo db')
  }else {
    console.log('fail connect mongo')
  }
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)
app.use(err)

app.listen(PORT, () => {
  console.log("App listening in port: " + PORT)
})