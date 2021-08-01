import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import slash from 'express-slash';
import swaggerUi from 'swagger-ui-express';

import config from './config/index.js';
import moviesApi from './routes/movies.js';
import {
  errorHandler,
  logErrors,
  wrapErrors,
} from './utils/middlewares/errorHandlers.js';
import notFoundHandler from './utils/middlewares/notFoundHandler.js';
import swaggerDocument from './swagger.json';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());

// Body parser
app.use(express.json());

// Routes
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
moviesApi(app);
app.use(slash());

// Catch 404
app.use(notFoundHandler);

// Errors middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
