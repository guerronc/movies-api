const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

const ApiKeysService = require('../services/apiKeys');
const UsersService = require('../services/users');
const validationHandler = require('../utils/middleware/validationHandler');

const { config } = require('../config');
const {
  createUserSchema,
  createProviderUserSchema
} = require('../utils/schemas/users');

require('../utils/auth/strategies/basic');

const authApi = app => {
  const router = express.Router();
  app.use('/api/auth', router);

  const apiKeyService = new ApiKeysService();
  const userService = new UsersService();

  router.post('/sign-in', async (req, res, next) => {
    const { apiKeyToken } = req.body;
    if (!apiKeyToken) {
      next(boom.unauthorized('Api key token is required'));
    }
    passport.authenticate('basic', (error, user) => {
      try {
        if (error || !user) {
          next(boom.unauthorized());
        }
        req.login(user, { session: false }, async error => {
          if (error) {
            next(error);
          }
          const apiKey = await apiKeyService.getApiKey({ token: apiKeyToken });
          if (!apiKey) {
            next(boom.unauthorized());
          }

          const { _id: id, name, email } = user;
          const payload = {
            sub: id,
            name,
            email,
            scopes: apiKey.scopes
          };
          const token = jwt.sign(payload, config.authJwtSecret, {
            expiresIn: '15m'
          });
          return res.status(200).json({
            token,
            user: { id, name, email }
          });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  });

  router.post(
    '/sign-up',
    validationHandler(createUserSchema),
    async (req, res, next) => {
      const { body: user } = req;

      try {
        const createUserId = await userService.createUser({ user });
        res.status(201).json({
          data: createUserId,
          message: 'User created'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/sign-provider',
    validationHandler(createProviderUserSchema),
    async (req, res, next) => {
      const { body } = req;
      const { apiKeyToken, ...user } = body;
      if (!apiKeyToken) {
        next(boom.unauthorized('apiKeyToken is required'));
      }

      try {
        const queriedUser = await userService.getOrCreateUser({ user });
        const apiKey = await apiKeyService.getApiKey({ token: apiKeyToken });

        if (!apiKey) {
          next(boom.unauthorized());
        }

        const { _id: id, name, email } = queriedUser;
        const payload = {
          sub: id,
          name,
          email,
          scopes: apiKey.scopes
        };

        const token = jwt.sign(payload, config.authJwtSecret, {
          expiresIn: '15m'
        });

        return res.status(200).json({ token, user: { id, name, email } });
      } catch (error) {
        next(error);
      }
    }
  );
};

module.exports = authApi;
