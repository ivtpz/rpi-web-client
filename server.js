var express = require('express');
var path = require('path')
var app = express();


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

app.use(express.static('client'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('index.html'));
})

app.listen(3033, function() {
  console.log('listening on 3033');
});
