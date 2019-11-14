const express = require('express');
const app = express();

const { config } = require('./config/index');

const moviesApi = require('./routes/movies');

const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

//Body parser
app.use(express.json());

moviesApi(app);

app.use(errorHandler);
app.use(logErrors);

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
});