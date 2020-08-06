const express = require('express');
const DecksService = require('./decks-service');

const decksRouter = express.Router();
bodyParser = express.json();

decksRouter
  .route('/')
  .get(bodyParser, (req, res, next) => {
    DecksService.getAllDecks(req.app.get('db'))
      .then((decks) => {
        res.status(200).json(decks);
      })
      .catch(next);
  })
  .post(bodyParser, (req, res, next) => {
    const { title, contents, date_created } = req.body;
    const newDeck = { title, contents, date_created };

    DecksService.insertDeck(req.app.get('db'), newDeck)
      .then((post) => {
        data = {
          id: post.id,
          title: post.title,
          contents: post.contents,
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

decksRouter.route('/:id').get((req, res, next) => {
  const id = req.params.id;
  DecksService.getDeckById(req.app.get('db'), id)
    .then((deck) => {
      res.status(200).json(deck);
    })
    .catch(next);
});

module.exports = decksRouter;
