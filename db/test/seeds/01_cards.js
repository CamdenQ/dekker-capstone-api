const cards = require('../../../utils/cards-test');

exports.seed = function (knex) {
  return knex('cards')
    .del()
    .then(function () {
      return knex('cards').insert(cards);
    });
};
