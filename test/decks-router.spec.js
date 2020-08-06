const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe.only('Decks Endpoints', () => {
  let db;

  const testDecks = helpers.makeDecksArray();

  console.log('testDecks: ');
  console.table(testDecks);

  const testDeck = testDecks[0];

  console.log('testDeck: ');
  console.table(testDeck);

  before('make Knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });
  after('disconnect from db', () => db.destroy());
  before('cleanup table', () => helpers.cleanDecks(db));
  afterEach('cleanup table', () => helpers.cleanDecks(db));

  describe('GET /decks/:id', () => {
    beforeEach('Insert data', () => helpers.seedDecksTable(db, testDecks));
    it('Responds 200 with deck matching the id', () => {
      const id = 1;
      const expectedDeck = helpers.makeExpectedDeck(testDeck);
      console.log('expectedDeck: ');
      console.table(expectedDeck);

      return supertest(app).get(`/decks/${id}`).expect(200, expectedDeck);
    });
  });
  describe('POST /decks', () => {
    beforeEach('Insert data', () => helpers.seedDecksTable(db, testDecks));
    it('Responds 201 with deck added', () => {
      const newDeck = {
        title: 'New Deck',
        contents: 'New Contents',
      };

      return supertest(app)
        .post('/decks')
        .send(newDeck)
        .expect(201)
        .expect((res) => {
          expect(res.body).to.have.property('id');
          expect(res.body.id).to.eql(newDeck.id);
        });
    });
  });
  describe('DELETE /decks', () => {
    beforeEach('Insert data', () => helpers.seedDecksTable(db, testDecks));
    it('Responds 204', () => {
      const id = 1;
      const expectedDecksList = testDecks.filter((deck) => deck.id === id);

      const deckToRemove = { id };
      return supertest(app)
        .delete('/decks')
        .send(deckToRemove)
        .expect(204)
        .then((res) => {
          supertest(app).get('/decks').expect(expectedDecksList);
        });
    });
  });
});
