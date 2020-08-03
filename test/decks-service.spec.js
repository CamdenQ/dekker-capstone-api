const knex = require('knex');

const DecksService = require('../src/decks/decks-service'),
  helpers = require('./test-helpers');
const testHelpers = require('./test-helpers');

/**
 * GENERAL NOTE:
 * Be VERY mindful of the use of _implicit returns_ with arrow functions.
 * Pay careful attention to whether the function utilizes curly braces or
 * not:
 *
 * () => {
 *   return db().select();
 * }
 *   vs
 * () =>
 *  db().select()
 *
 * If you receive a strange error, especially errors concerning hooks,
 * you have probably NOT returned an async function from one or more
 * of your tests.
 *
 */

describe('User decks service object', () => {
  let db;

  // We'll use this array as an example of mock data that represents
  // valid contents for our database
  const { testUsers, testDecks } = helpers.makeFixtures();

  // Prepare the database connection using the `db` variable available
  // in the scope of the primary `describe` block. This means `db`
  // will be available in all of our tests.
  before('setup db', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
  });

  // Before all tests run empty the dekker_users table
  before('clean users db', () => helpers.cleanTables(db));

  // Before all tests run insert test users into dekker_users table
  before('insert test users', () => helpers.seedUsersTable(db, testUsers));

  // After each individual test empty the user_decks table
  afterEach('clean decks db', () => helpers.cleanDecks(db));

  //After all tests run empty the dekker_users table
  after('clean users db', () => helpers.cleanTables(db));

  // After all tests run, let go of the db connection
  after('destroy db connection', () => db.destroy());

  describe('getAllDecks()', () => {
    context('with no data present', () => {
      it('returns an empty array', () => {
        return DecksService.getAllDecks(db, 1).then((decks) =>
          expect(decks).to.eql([])
        );
      });
    });
    // Whenever we set a context with data present, we should always include
    // a beforeEach() hook within the context that takes care of adding the
    // appropriate data to our table
    context('with data present', () => {
      beforeEach('insert test decks', () => db('user_decks').insert(testDecks));
      it('returns all test decks for given test user', () => {
        let expectedDecks = testHelpers.makeExpectedDecksForUser(testDecks, 1);
        return DecksService.getAllDecks(db, 1).then((decks) =>
          expect(decks).to.eql(expectedDecks)
        );
      });
    });
  });

  describe('insertDeck()', () => {
    it('inserts record in db and returns deck with new id', () => {
      // New deck to use as subject of our test
      const newDeck = helpers.makeNewDeck();

      return DecksService.insertDeck(db, newDeck).then((actual) => {
        expect(actual).to.eql(helpers.makeExpectedDeck(newDeck));
      });
    });

    it('throws not-null constraint error if title not provided', () => {
      // Subject for the test does not contain a `title` field, so we
      // expect the database to prevent the record to be added
      const newDeck = helpers.makeNewDeck();

      delete newDeck.title;

      // The .then() method on a promise can optionally take a second argument:
      // The first callback occurs if the promise is resolved, which we've been
      // using for all our promise chains. The second occurs if promise is
      // rejected. In the following test, we EXPECT the promise to be rejected
      // as the database should throw an error due to the NOT NULL constraint
      return DecksService.insertDeck(db, newDeck).then(
        () => expect.fail('db should throw error'),
        (err) => expect(err.message).to.include('not-null')
      );
    });
  });

  describe('getById()', () => {
    it('should return undefined', () => {
      return DecksService.getById(db, 999).then(
        (deck) => expect(deck).to.be.undefined
      );
    });

    context('with data present', () => {
      before('insert decks', () => db('user_decks').insert(testDecks));

      it('should return existing deck', () => {
        const expectedDeckId = 3;
        const expectedDeck = testDecks.find((a) => a.id === expectedDeckId);
        return DecksService.getById(db, expectedDeckId).then((actual) =>
          expect(actual).to.eql(expectedDeck)
        );
      });
    });
  });

  describe('deleteDeck()', () => {
    it('should return 0 rows affected', () => {
      return DecksService.deleteDeck(db, 999).then((rowsAffected) =>
        expect(rowsAffected).to.eq(0)
      );
    });

    context('with data present', () => {
      before('insert decks', () => db('user_decks').insert(testDecks));

      it('should return 1 row affected and record is removed from db', () => {
        const deletedDeckId = 1;

        return DecksService.deleteDeck(db, deletedDeckId)
          .then((rowsAffected) => {
            expect(rowsAffected).to.eq(1);
            return db('user_decks').select('*');
          })
          .then((actual) => {
            // copy testDecks array with id 1 filtered out
            const expected = testDecks.filter((a) => a.id !== deletedDeckId);
            expect(actual).to.eql(expected);
          });
      });
    });
  });

  describe('updateDeck()', () => {
    it('should return 0 rows affected', () => {
      return DecksService.updateDeck(db, 999, {
        title: 'new title!',
      }).then((rowsAffected) => expect(rowsAffected).to.eq(0));
    });

    context('with data present', () => {
      before('insert decks', () => db('user_decks').insert(testDecks));

      it('should successfully update an deck', () => {
        const updatedDeckId = 1;
        const testDeck = testDecks.find((a) => a.id === updatedDeckId);
        // make copy of testDeck in db, overwriting with newly updated field value
        const updatedDeck = { ...testDeck, title: 'New title!' };

        return DecksService.updateDeck(db, updatedDeckId, updatedDeck)
          .then((rowsAffected) => {
            expect(rowsAffected).to.eq(1);
            return db('user_decks')
              .select('*')
              .where({ id: updatedDeckId })
              .first();
          })
          .then((deck) => {
            expect(deck).to.eql(updatedDeck);
          });
      });
    });
  });
});
