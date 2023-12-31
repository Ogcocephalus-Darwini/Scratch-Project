// Imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
require('express-async-errors');
const cors = require('cors');
const apiRouter = require('./routes');
const errorHandler = require('./middlewares/error-handler');
const NotFoundError = require('./errors/not-found-error');

// Instantiate App
const app = express();

// Global Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true,
  }),
);

// Static Files
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, `../client/index.html`));
});

// HOOKUP THE BIG ROUTER - /routes/index.js
app.use('/api', apiRouter);

// Not Found Route Handler
app.use('*', (req, res) => {
  throw new NotFoundError();
});

// GLOBAL ERROR HANDLING MIDDLEWARE (defined in /middlewares folder)
// CUSTOM ERROR TYPES DEFINED IN THE /errors FOLDER
app.use(errorHandler);

module.exports = app;
