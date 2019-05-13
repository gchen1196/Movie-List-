const request = require('request');
const config = require('../config.js');

let getMoviesByTitle = (title, cb) => {
  let options = {
    url: `https://api.themoviedb.org/3/search/movie?api_key={${config.TOKEN}}&query=${title}`,
  }
    request(options, (err, res, body) => {
      if (err) {
        res.status(500);
        res.send(err);
      } else {
        cb(JSON.parse(body));
      }
    })
}

module.exports.getMoviesByTitle = getMoviesByTitle;

