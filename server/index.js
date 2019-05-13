const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
//need to serve up the static files
app.use(express.static(__dirname + '/../client/dist'))

app.use(bodyParser.json());


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var Key = '4c58a66379a6f4b9fc29656650894eb7';