'use strict';

const knex = require('../../db/knex');

const CardsService = {
  getAllCards(page) {
    return knex('cards').select('*').paginate({
      perPage: 20,
      currentPage: page,
    });
  },

  getCardsByColor(color) {
    console.log(`COLOR = ${color}`);
    console.log('Color variable type = ' + typeof color);
    const colorSQL = `'{"${color}"}`;
    return knex.raw(`SELECT * FROM cards WHERE colors @> (??)`, colorSQL);
    // .paginate({
    //   perPage: 20,
    //   currentPage: page,
    // });
  },
};

module.exports = CardsService;
