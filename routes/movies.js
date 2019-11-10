const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    router.get('/', async function (request, response, next) {
        try {
            const movies = await Promise.resolve(moviesMock);
            response.status(200).json({
                data: movies,
                message: 'Movies listed'
            })
        } catch (error) {
            next(error);
        }
    })
    router.get('/:movieId', async function (request, response, next) {
        try {
            const movie = await Promise.resolve(moviesMock[0]);
            response.status(200).json({
                data: movie,
                message: 'Movie retrieved'
            })
        } catch (error) {
            next(error);
        }
    })
    router.post('/', async function (request, response, next) {
        try {
            const createMovieId = await Promise.resolve(moviesMock[0].id);
            response.status(201).json({
                data: createMovieId,
                message: 'Movie created'
            })
        } catch (error) {
            next(error);
        }
    })
    router.put('/:movieId', async function (request, response, next) {
        try {
            const updatedMovieId = await Promise.resolve(moviesMock[0].id);
            response.status(200).json({
                data: updatedMovieId,
                message: 'Movies update'
            })
        } catch (error) {
            next(error);
        }
    })
    router.delete('/:movieId', async function (request, response, next) {
        try {
            const deleteMovieId = await Promise.resolve(moviesMock[0].id);
            response.status(200).json({
                data: deleteMovieId,
                message: 'Movies deleted'
            })
        } catch (error) {
            next(error);
        }
    })
}

module.exports = moviesApi;
