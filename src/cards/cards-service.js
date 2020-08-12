'use strict';
const knex = require('../../db/knex');

const CardsService = {
  getAllCards() {
    return knex.select('*').from('cards');
  },
};

module.exports = CardsService;
