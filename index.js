const express = require('express')
const app = express()
const morgan = require("morgan")

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

const port = 3001
app.listen(port, () => {
  console.log(`Node API listening on port ${port}`)
})