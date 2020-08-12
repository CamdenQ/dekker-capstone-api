const express = require('express');
const DecksService = require('./decks-service');

const decksRouter = express.Router();

decksRouter.get('/', (_, res, next) => {
  DecksService.getAllDecks()
    .then((decks) => {
      res.status(200).json(decks);
    })
    .catch(next);
});

decksRouter.post('/', (req, res, next) => {
  DecksService.create(req.body)
    .then((decks) => {
      res.status(201).json(decks[0]);
    })
    .catch(next);
});

decksRouter.get('/:id', (req, res, next) => {
  DecksService.getOne(req.params.id)
    .then((deck) => {
      res.status(200).json(deck);
    })
    .catch(next);
});

decksRouter.patch('/:id', (req, res, next) => {
  DecksService.update(req.params.id, req.body)
    .then((decks) => {
      res.status(200).json(decks[0]);
    })
    .catch(next);
});

decksRouter.delete('/:id', (req, res, next) => {
  DecksService.remove(req.params.id)
    .then(() => {
      res.status(200).json({ deleted: true });
    })
    .catch(next);
});

module.exports = decksRouter;
