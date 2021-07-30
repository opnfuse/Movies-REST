import express from 'express';

import moviesMock from '../utils/mocks/movies.js';

const moviesApi = (app) => {
  const router = express.Router();
  app.use('/movies', router);

  router.get('/', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMock);

      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (error) {
      next(error);
    }
  });
};

export default moviesApi;
