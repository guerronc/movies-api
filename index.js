const express = require('express');
const cors = require('cors');

const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth');
const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');


const {
  logErrors,
  errorHandler,
  wrapErrors
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

const debug = require('debug')('app:server');

//Body parser
app.use(cors());
app.use(express.json());

//Routes
authApi(app);
moviesApi(app);
userMoviesApi(app);


//Catch 404
app.use(notFoundHandler);

//Error Middleware
app.use(errorHandler);
app.use(logErrors);
app.use(wrapErrors);

app.listen(config.port, function() {
  debug(`Listening http://localhost:${config.port}`);
});
