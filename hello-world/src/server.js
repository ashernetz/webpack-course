const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();
// app.use('/static', express.static(path.resolve(__dirname, '../dist')));
app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', function(req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
  console.log(pathToHtmlFile);
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.listen(9001, function() {
  console.log('application runnin on port 9001');
});
