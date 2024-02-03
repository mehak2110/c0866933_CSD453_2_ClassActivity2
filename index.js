const express = require('express')
const app = express()
const SERVER_PORT = process.env.PORT || 3000;

// http://localhost:3000/
app.get('/', function (req, res) {
  res.send('<h1>Hello -Mehak Bajaj - Your Student ID is: c0866933</h1>')
})

// http://localhost:3000/hello
app.get('/hello', function (req, res) {
    res.send('<h1>Hello DevOps</h1>')
  })

app.listen(SERVER_PORT ,() => {
	console.log('Server Running at http://localhost:${SERVER_PORT}/')	
}) 
