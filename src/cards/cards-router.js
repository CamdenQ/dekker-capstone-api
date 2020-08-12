const express = require('express');
const CardsService = require('./cards-service');

const cardsRouter = express.Router();

cardsRouter.get('/', (_, res, next) => {
  CardsService.getAllCards()
    .then((cards) => {
      res.status(200).json(cards);
    })
    .catch(next);
});

module.exports = cardsRouter;
