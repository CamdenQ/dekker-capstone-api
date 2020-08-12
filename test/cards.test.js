const request = require('supertest');
const expect = require('chai').expect;

const knex = require('../db/knex');
const app = require('../src/app');
const cards = require('./fixtures/cards');

describe('Cards router', () => {
  before(() => {
    return knex.migrate.latest().then(() => knex.seed.run());
  });

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
