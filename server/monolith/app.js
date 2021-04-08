const express = require('express')
const app = express()
const PORT = 3000

const router = require('./routes')
const {run} = require('./config/mongodb')
const { urlencoded } = require('express')

run(cb => {
  if(cb) {
    console.log('success connect mongo db')
  }else {
    console.log('fail connect mongo')
  }
})

app.use(express.urlencoded({extended: true}))

app.use(router)



app.listen(PORT, () => {
  console.log("App listening in port: " + PORT)
})