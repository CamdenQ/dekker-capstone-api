'use strict';
const knex = require('../../db/knex');

const DecksService = {
  getAllDecks() {
    return knex('decks');
  },
  getOne(id) {
    return knex('decks').where('id', id).first();
  },
  create(deck) {
    return knex('decks').insert(deck, '*');
  },
  update(id, deck) {
    return knex('decks').where('id', id).update(deck, '*');
  },
  remove(id) {
    return knex('decks').where('id', id).del();
  },
};

module.exports = DecksService;
