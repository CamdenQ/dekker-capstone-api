'use strict';

const knex = require('../db/knex');
const app = require('../src/app');
const { cards } = require('./fixtures');

before(() => {
  return knex.migrate.latest().then(() => knex.seed.run());
});

describe('Cards router', () => {
  it('Gets all the cards', () => {
    return request(app)
      .get('/api/cards')
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.a('array');
        expect(res.body).to.deep.equal(cards);
      });
  });
});
