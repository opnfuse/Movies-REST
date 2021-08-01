import boom from '@hapi/boom';

import config from '../../config/index.js';

const withErrorStack = (err, stack) => {
  if (config.dev) {
    return { err, stack };
  }

  return err;
};

export const logErrors = (err, req, res, next) => {
  console.log(err);

  next(err);
};

export const wrapErrors = (err, req, res, next) => {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }

  next(err);
};

export const errorHandler = (err, req, res, next) => { //eslint-disable-line
  res.status(err.output.statusCode || 500);
  res.json(withErrorStack(err.message, err.stack));
};
