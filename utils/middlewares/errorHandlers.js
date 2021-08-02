const boom = require('@hapi/boom');

const config = require('../../config/index.js');

const withErrorStack = (err, stack) => {
  if (config.dev) {
    return { err, stack };
  }

  return err;
};

const logErrors = (err, req, res, next) => {
  console.log(err);

  next(err);
};

const wrapErrors = (err, req, res, next) => {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }

  next(err);
};

/* eslint-disable */
const errorHandler = (err, req, res, next) => {
  res.status(err.output.statusCode || 500);
  res.json(withErrorStack(err.message, err.stack));
};

module.exports = { logErrors, wrapErrors, errorHandler };
