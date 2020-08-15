'use strict';

const app = require('../src/app');
const { decks, deck } = require('./fixtures');

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
      .expect(204)
      .then((res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).to.deep.equal({});
      });
  });

  it('Deletes a single deck', () => {
    return request(app)
      .delete('/api/decks/7')
      .expect(204)
      .then((res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).to.deep.equal({});
      });
  });
});
