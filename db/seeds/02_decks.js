const decks = require('../../utils/decks');

exports.seed = function (knex) {
  return knex('decks')
    .del()
    .then(function () {
      return knex('decks').insert(decks);
    });
};
