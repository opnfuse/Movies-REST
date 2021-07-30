import express from 'express';

import config from './config/index.js';
import moviesApi from './routes/movies.js';

const app = express();

moviesApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
