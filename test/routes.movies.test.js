const assert = require('assert');
const proxyquire = require('proxyquire');

const { MoviesServiceMocks, moviesMock } = require('../utils/mocks/movies')

const testServer = require('../utils/testServer');

describe('routes - movies', function () {
    const route = proxyquire('../routes/movies', {
        '../services/movies': MoviesServiceMocks
    })
    const request = testServer(route);

    describe('GET /movies', function () {
        it('Should respond with status 200', function (done) {
            request.get('/api/movies').expect(200, done);
        });

        it('Should respond with the list of movies', function (done) {
            request.get('/api/movies').end((err,res)=>{
                assert.deepEqual(res.body, {
                    data: moviesMock,
                    message: 'Movies listed'
                });
                done();
            })
        })
    })
})
