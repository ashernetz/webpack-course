const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', function(req, res, next) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/keyboard.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')));
app.use(function (req, res, next) {
  res.removeHeader("x-powered-by");
  res.removeHeader("set-cookie");
  res.removeHeader("Date");
  res.removeHeader("Connection");
  next();
});

app.listen(9002, function() {
  console.log('application runnin on port 9002');
});
