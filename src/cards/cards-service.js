'use strict';

const knex = require('../../db/knex');

const CardsService = {
  getAllCards(page) {
    return knex('cards').paginate({
      perPage: 10,
      currentPage: page,
    });
  },
};

module.exports = CardsService;
