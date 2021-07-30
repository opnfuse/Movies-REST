import express from 'express';

import config from './config/index.js';

const app = express();

app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/json', function (req, res) {
  res.json({ hello: 'world' });
});

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
