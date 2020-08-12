const request = require('supertest');
const expect = require('chai').expect;

// const knex = require('../db/knex');
const app = require('../src/app');
const decks = require('./fixtures/decks');
const deck = require('./fixtures/deck');

describe('Decks router', () => {
  it('Gets all the decks', () => {
    return request(app)
      .get('/api/decks')
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.a('array');
        expect(res.body).to.deep.equal(decks);
      });
  });

  it('Gets a single deck', () => {
    return request(app)
      .get('/api/decks/1')
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).to.deep.equal(decks[0]);
      });
  });

  it('Creates a single deck', () => {
    return request(app)
      .post('/api/decks')
      .send(deck)
      .expect(201)
      .then((res) => {
        expect(res.body).to.be.a('object');
        deck.id = res.body.id;
        expect(res.body).to.deep.equal(deck);
      });
  });

  it('Updates a single deck', () => {
    deck.title = 'Changed';
    return request(app)
      .patch('/api/decks/7')
      .send(deck)
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).to.deep.equal(deck);
      });
  });

  it('Deletes a single deck', () => {
    return request(app)
      .delete('/api/decks/7')
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).to.deep.equal({ deleted: true });
      });
  });
});
