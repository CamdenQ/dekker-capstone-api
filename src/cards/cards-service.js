'use strict';

const knex = require('../../db/knex');

const CardsService = {
  getAllCards(page) {
    return knex('cards').paginate({
      perPage: 20,
      currentPage: page,
    });
  },
};

module.exports = CardsService;
