const express = require('express');



const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger() {
  return ( req, res, next ) => {
    console.log(req.type, req.url, req.timestamp);
    next();
  }
};

server.use(logger());

module.exports = server;
