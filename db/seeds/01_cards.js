const cards = require('../../utils/cards-dev');

exports.seed = function (knex) {
  return knex('cards')
    .del()
    .then(function () {
      return knex('cards').insert(cards);
    });
};
