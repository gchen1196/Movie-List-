const express = require('express')
const app = express()
const port = 3000

//need to serve up the static files
app.use(express.static(__dirname + '/../client/dist'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))