const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World from Node js')
})

const port = 3000
app.listen(port, () => {
  console.log(`Node API listening on port ${port}`)
})