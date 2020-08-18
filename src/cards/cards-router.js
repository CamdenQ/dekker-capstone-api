'use strict';

const express = require('express');
const CardsService = require('./cards-service');

const cardsRouter = express.Router();

cardsRouter.get('/', async (req, res, next) => {
  const { page } = req.query;
  try {
    const cards = await CardsService.getAllCards(page);

    if (!cards)
      return next({
        status: 404,
        message: `No cards found`,
      });

    return res.status(200).json(cards.data);
  } catch (error) {
    return next({ status: 500, message: error.message });
  }
});

module.exports = cardsRouter;
