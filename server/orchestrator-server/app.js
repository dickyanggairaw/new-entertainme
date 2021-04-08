const express = require('express')
const app = express()
const PORT = 4000

const errorHandler = require('./middlewares/errorHandler')
const router = require('./routes')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)
app.use(errorHandler)


app.listen(PORT, () => {
  console.log('app listening at port: ' + PORT)
})