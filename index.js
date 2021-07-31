import express from 'express';

import config from './config/index.js';
import moviesApi from './routes/movies.js';

const app = express();

app.use(express.json());

moviesApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
