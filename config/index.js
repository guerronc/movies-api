require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV.trim() !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost1: process.env.DB_HOST1,
    dbHost2: process.env.DB_HOST2,
    dbHost3: process.env.DB_HOST3,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT
}

module.exports = { config }