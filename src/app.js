'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const PORT = process.env.PORT || 8000;

const cardsRouter = require('./cards/cards-router');
const decksRouter = require('./decks/decks-router');

const app = express();

const morganOption = process.env.NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(express.json());

const allowedOrigins = ['http://localhost:3000'];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use('/api/cards', cardsRouter);
app.use('/api/decks', decksRouter);

app.use(errorHandler);

function errorHandler(error, _req, res, _next) {
  const code = error.status || 500;

  if (process.env.NODE_ENV === 'production') {
    error.message = code === 500 ? 'internal server error' : error.message;
  } else {
    console.error(error);
  }

  res.status(code).json({ message: error.message });
}

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));

module.exports = app;
