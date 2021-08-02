const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const slash = require('express-slash');
const swaggerUi = require('swagger-ui-express');

const config = require('./config/index.js');
const moviesApi = require('./routes/movies.js');
const {
  errorHandler,
  logErrors,
  wrapErrors,
} = require('./utils/middlewares/errorHandlers.js');
const notFoundHandler = require('./utils/middlewares/notFoundHandler.js');
const swaggerDocument = require('./swagger.json');

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());

// Body parser
app.use(express.json());

// Routes
moviesApi(app);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', async (req, res, next) => {
  try {
    res.send('Welcome, go to /docs');
  } catch (error) {
    next(error);
  }
});

// Catch 404
app.use(notFoundHandler);

app.use(slash());

// Errors middlewares
app.use(wrapErrors);
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
