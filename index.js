var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Herro, its Andy!');
});

app.listen(3000);
