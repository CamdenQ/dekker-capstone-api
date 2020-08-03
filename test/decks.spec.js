const knex = require('knex');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Decks Endpoints', () => {
  let db;

  const { testUsers, testDecks } = helpers.makeFixtures();
  const testUser = testUsers[0];
  const testDeck = testDecks[0];

  before('make Knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });
  after('disconnect from db', () => db.destroy());
  before('cleanup tables', () => helpers.cleanTables(db));
  afterEach('cleanup tables', () => helpers.cleanTables(db));

  describe('GET /decks/:id', () => {
    beforeEach('Insert data', () =>
      helpers.seedOtherTables(db, testUsers, testDecks)
    );
    it('Responds 200 with array of decks', () => {
      const user_id = testUser.id;
      const Favorites = testDecks.map((f) =>
        helpers.makeExpectedDecks(f, testRecipes)
      );
      const expectedFavorites = Favorites.filter((f) => f.user_id === user_id);

      return supertest(app)
        .get(`/decks/${user_id}`)
        .set('Authorization', helpers.makeAuthHeader(testUser))
        .expect(200, expectedFavorites);
    });
  });
  describe.only('POST /decks', () => {
    beforeEach('Insert data', () =>
      helpers.seedDecksTable(db, testUsers, testDecks)
    );
    it('Responds 201 with favorite card added', () => {
      const user_id = testUser.id;
      const newDeck = {
        deck_owner: user_id,
        title: 'New Deck',
        contents: 'New Contents',
        date_created: new Date('2020-05-24T16:28:32.615Z'),
      };

      return (
        supertest(app)
          .post('/decks')
          // .set('Authorization', helpers.makeAuthHeader(testUser))
          .send(newDeck)
          .expect(201)
          .expect((res) => {
            expect(res.body).to.have.property('id');
            expect(res.body.user_id).to.eql(newfave.deck_owner);
          })
      );
    });
  });
  describe('DELETE /decks', () => {
    beforeEach('Insert data', () =>
      helpers.seedOtherTables(
        db,
        testRecipes,
        testSpirits,
        testSpiritType,
        testUsers,
        testFavorites
      )
    );
    it('Responds 204', () => {
      const user_id = testUser.id;
      const recipe_id = testRecipes[0].id;
      const expectedFavoritesList = testFavorites.filter(
        (fave) => fave.id === recipe_id
      );

      const favoriteToRemove = { user_id, recipe_id };
      return supertest(app)
        .delete('/decks')
        .set('Authorization', helpers.makeAuthHeader(testUser))
        .send(favoriteToRemove)
        .expect(204)
        .then((res) => {
          supertest(app)
            .get('/decks')
            .set('Authorization', helpers.makeAuthHeader(testUser))
            .expect(expectedFavoritesList);
        });
    });
  });
});
