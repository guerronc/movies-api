const assert = require('assert');
const proxyquire = require('proxyquire');

const {MoviesServiceMocks,moviesMock} = require('../utils/mocks/movies')

const testServer = require('../utils/testServer');

describe('routes-movies', function () {
    const route = proxyquire('../routes/movies.js',{
        '../services/movies.js': MoviesServiceMocks
    })
})

const request = testServer(route);

describe('GET /movies', function () {
    if()
})