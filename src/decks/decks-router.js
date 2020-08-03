const express = require('express');
const DecksService = require('./decks-service');
const { requireAuth } = require('../middleware/jwt-auth');

const decksRouter = express.Router();
bodyParser = express.json();

decksRouter
  .route('/')
  // .all(requireAuth)
  .post(bodyParser, (req, res, next) => {
    const { title, contents, deck_owner, date_created } = req.body;
    const newDeck = { title, contents, deck_owner, date_created };

    DecksService.insertDeck(req.app.get('db'), newDeck)
      .then((post) => {
        data = {
          id: post.id,
          title: post.title,
          contents: post.contents,
          deck_owner: post.deck_owner,
          date_created: post.date_created,
        };
        res.status(201).json(data);
      })
      .catch(next);
  })
  .delete(bodyParser, (req, res, next) => {
    const { id } = req.body;

    DecksService.deleteDeck(req.app.get('db'), id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  });

decksRouter
  .route('/:id')
  // .all(requireAuth)
  .get((req, res, next) => {
    const user_id = req.params.id;
    DecksService.getAllDecks(req.app.get('db'), user_id)
      .then((favs) => {
        res.status(200).json(favs);
      })
      .catch(next);
  });

module.exports = decksRouter;
