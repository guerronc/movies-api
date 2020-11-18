//set DEBUG=express:*,app:* && node scripts/mongo/seedApiKeys.js

const chalk = require('chalk');
const debug = require('debug')('app:scripts:apis');
const crypto = require('crypto');
const MongoLib = require('../../lib/mongo');

const adminScopes = [
  'signin:auth',
  'signup:auth',
  'read:movies',
  'create:movies',
  'update:movies',
  'delete:movies',
  'read:user-movies',
  'create:user-movies',
  'delete:user-movies'
];

const publicScopes = [
  'signin:auth',
  'signup:auth',
  'read:movies',
  'read:user-movies',
  'create:user-movies',
  'delete:user-movies'
];

const generarRamdomToke = () => {
  const buffer = crypto.randomBytes(32);
  return buffer.toString('hex');
};

const apiKeys = [
  {
    token: generarRamdomToke(),
    scopes: adminScopes
  },
  {
    token: generarRamdomToke(),
    scopes: publicScopes
  }
];

const seedApiKeys = async () => {
  try {
    const mongoDB = new MongoLib();
    const promises = apiKeys.map(async apiKey => {
      await mongoDB.create('api-keys', apiKey);
    });
    await Promise.all(promises);
    debug(chalk.green(`${promises.length} api keys have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
};

seedApiKeys();
