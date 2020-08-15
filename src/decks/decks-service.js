'use strict';

const knex = require('../../db/knex');

const DecksService = {
  getAllDecks() {
    return knex('decks');
  },
  getOne(id) {
    return knex('decks').where({ id }).first('*');
  },
  create(deck) {
    return knex('decks')
      .insert(deck)
      .returning('*')
      .then((rows) => rows[0]);
  },
  update(id, deck) {
    return knex('decks').where({ id }).update(deck);
  },
  remove(id) {
    return knex('decks').where({ id }).delete();
  },
};

module.exports = DecksService;
