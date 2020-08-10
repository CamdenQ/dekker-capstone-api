require('dotenv').config();
const express = require('express'),
  morgan = require('morgan'),
  cors = require('cors'),
  helmet = require('helmet');

const { NODE_ENV } = require('./config'),
  DecksRouter = require('./decks/decks-router');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

// prettier-ignore
app
  .use(morgan(morganOption))
  .use(helmet())
  .use(cors())
  .use(express.json())
  .use('/api/decks', DecksRouter)
  .use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
      response = { error: { message: 'server error'}}
    } else {
      console.error(error)
      response = { message: error.message, error}
    }
    res.status(500).json(response)
  })

app.get('/api/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = app;
