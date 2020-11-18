const express = require('express');
const passport = require('passport');

const MoviesService = require('../services/movies');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time');

const cacheResponse = require('../utils/cacheResponse');

//JWT Strategies
require('../utils/auth/strategies/jwt');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);
  const moviesService = new MoviesService();

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
    async function(request, response, next) {
      cacheResponse(response, FIVE_MINUTES_IN_SECONDS);
      const { tags } = request.query;
      try {
        const movies = await moviesService.getMovies({ tags });
        response.status(200).json({
          data: movies,
          message: 'Movies listed'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.get(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function(request, response, next) {
      cacheResponse(response, SIXTY_MINUTES_IN_SECONDS);
      const { movieId } = request.params;
      try {
        const movie = await moviesService.getMovie({ movieId });
        response.status(200).json({
          data: movie,
          message: 'Movie retrieved'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:movies']),
    validationHandler(createMovieSchema),
    async function(request, response, next) {
      
      const { body: movie } = request;
      try {
        const createMovieId = await moviesService.createMovie({ movie });
        response.status(201).json({
          data: createMovieId,
          message: 'Movie created'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.put(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function(request, response, next) {
      const { body: movie } = request;
      const { movieId } = request.params;
      try {
        const updatedMovieId = await moviesService.updateMovie({
          movieId,
          movie
        });
        response.status(200).json({
          data: updatedMovieId,
          message: 'Movies update'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.patch(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:movies']),
    async function(request, response, next) {
      const { body: movie } = request;
      const { movieId } = request.params;
      try {
        const updatedMovieId = await moviesService.updatePartialMovie({
          movieId,
          movie
        });
        response.status(200).json({
          data: updatedMovieId,
          message: 'Movies update partial movie'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function(request, response, next) {
      const { movieId } = request.params;
      try {
        const deleteMovieId = await moviesService.deleteMovie({ movieId });
        response.status(200).json({
          data: deleteMovieId,
          message: 'Movies deleted'
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = moviesApi;
