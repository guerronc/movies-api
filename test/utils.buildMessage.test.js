const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe('Utils - buildMessage', function () {

    describe('When receives an entity and an action', function () {
        it('Should return then respective message', function () {
            const result = buildMessage('movie', 'create');
            const expect = 'movie created';
            assert.strictEqual(result, expect, 'Los resultados no son iguales');
        })
    });

    describe('When reveives an entity and an action and is a list', function () {
        it('Should return the respective message', function () {
            const result = buildMessage('movie', 'list');
            const expect = 'movies listed';
            assert.strictEqual(result, expect, 'Los resultados no son iguales');
        })
    });

})