const express = require('express')
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')

const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(() => console.log('DB Connected...'))

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err}`)
})
//import routes
const postRoutes = require('./routes/post')


//middleware
app.use(morgan("dev"))
// const customMiddleware = (req, res, next) => {
//   console.log("middleware applied")
//   next()
// }
// app.use(customMiddleWare)

app.use('/', postRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Node API listening on port ${process.env.PORT}`)
})