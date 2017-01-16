var express = require('express')
var app = express()
//test
app.get('/', function (req, res) {
  res.send('Welcome to ALLY! ')
})

app.listen(3000, function () {
  console.log('ALLY app listening on port 3000!')
})