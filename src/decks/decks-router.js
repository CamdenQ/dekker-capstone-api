'use strict';

const express = require('express');

const DecksService = require('./decks-service');
const { isValidDeck } = require('../../utils/isValidDeck');

const decksRouter = express.Router();

decksRouter.get('/', async (_, res, next) => {
  try {
    const decks = await DecksService.getAllDecks();

    if (!decks)
      return next({
        status: 404,
        message: `No decks found`,
      });

    return res.status(200).json(decks);
  } catch (error) {
    return next({ status: 500, message: error.message });
  }
});

decksRouter.post('/', async (req, res, next) => {
  const { title, contents } = req.body;
  const newDeck = { title, contents };

  if (!isValidDeck(newDeck))
    return next({
      status: 400,
      message: `A deck should include a title and selected cards`,
    });

  try {
    const deck = await DecksService.create(newDeck);
    return res.status(201).json(deck);
  } catch (error) {
    return next({ status: 500, message: error.message });
  }
});

decksRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const deck = await DecksService.getOne(id);

    if (!deck)
      return next({
        status: 404,
        message: `Unable to find deck with id ${id}`,
      });

    return res.status(200).json(deck);
  } catch (error) {
    return next({ status: 500, message: error.message });
  }
});

decksRouter.patch('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const deck = await DecksService.update(id, req.body);
    console.log(deck);

    if (!deck)
      return next({
        status: 404,
        message: `Unable to update deck with id ${id}`,
      });

    return res.status(200).json(deck);
  } catch (error) {
    return next({ status: 500, message: error.message });
  }
});

decksRouter.delete('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const deck = await DecksService.remove(id);

    if (!deck)
      return next({
        status: 404,
        message: `Unable to find deck with id ${id}`,
      });

    return res.status(200).json(id);
  } catch (error) {
    return next({ status: 500, message: error.message });
  }
});

module.exports = decksRouter;
