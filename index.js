const express = require('express')
const app = express()

app.get('/trang-chu', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)