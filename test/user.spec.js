const knex = require('knex');

const UsersService = require('../src/user/user-service'),
  helpers = require('./test-helpers');

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

describe('Dekker users service object', () => {
  let db;

  // We'll use this array as an example of mock data that represents
  // valid contents for our database
  const testUsers = helpers.makeUsersArray();

  // Prepare the database connection using the `db` variable available
  // in the scope of the primary `describe` block. This means `db`
  // will be available in all of our tests.
  before('setup db', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
  });

  // Before all tests run and after each individual test, empty the
  // dekker_users table
  before('clean db', () => helpers.cleanUsers(db));
  afterEach('clean db', () => helpers.cleanUsers(db));

  // After all tests run, let go of the db connection
  after('destroy db connection', () => db.destroy());

  describe('getAllUsers()', () => {
    context('with no data present', () => {
      it('returns an empty array', () => {
        return UsersService.getAllUsers(db).then((users) =>
          expect(users).to.eql([])
        );
      });
    });
    // Whenever we set a context with data present, we should always include
    // a beforeEach() hook within the context that takes care of adding the
    // appropriate data to our table
    context('with data present', () => {
      beforeEach('insert test users', () =>
        db('dekker_users').insert(testUsers)
      );

      it('returns all test users', () => {
        return UsersService.getAllUsers(db).then((users) =>
          expect(users).to.eql(testUsers)
        );
      });
    });
  });

  describe('insertUser()', () => {
    it('inserts record in db and returns user with new id', () => {
      // New deck to use as subject of our test
      const newUser = helpers.makeNewUser();

      return UsersService.insertUser(db, newUser).then((actual) => {
        expect(actual).to.eql(helpers.makeExpectedUser(newUser));
      });
    });

    it('throws not-null constraint error if username not provided', () => {
      // Subject for the test does not contain a `usernam` field, so we
      // expect the database to prevent the record to be added
      const newUser = helpers.makeNewUser();

      delete newUser.username;

      // The .then() method on a promise can optionally take a second argument:
      // The first callback occurs if the promise is resolved, which we've been
      // using for all our promise chains. The second occurs if promise is
      // rejected. In the following test, we EXPECT the promise to be rejected
      // as the database should throw an error due to the NOT NULL constraint
      return UsersService.insertUser(db, newUser).then(
        () => expect.fail('db should throw error'),
        (err) => expect(err.message).to.include('not-null')
      );
    });
  });

  describe('getById()', () => {
    it('should return undefined', () => {
      return UsersService.getById(db, 999).then(
        (deck) => expect(deck).to.be.undefined
      );
    });

    context('with data present', () => {
      before('insert users', () => db('dekker_users').insert(testUsers));

      it('should return existing user', () => {
        const expectedUserId = 3;
        const expectedUser = testUsers.find((a) => a.id === expectedUserId);
        return UsersService.getById(db, expectedUserId).then((actual) =>
          expect(actual).to.eql(expectedUser)
        );
      });
    });
  });

  describe('deleteUser()', () => {
    it('should return 0 rows affected', () => {
      return UsersService.deleteUser(db, 999).then((rowsAffected) =>
        expect(rowsAffected).to.eq(0)
      );
    });

    context('with data present', () => {
      before('insert users', () => db('dekker_users').insert(testUsers));

      it('should return 1 row affected and record is removed from db', () => {
        const deletedDeckId = 1;

        return UsersService.deleteUser(db, deletedDeckId)
          .then((rowsAffected) => {
            expect(rowsAffected).to.eq(1);
            return db('dekker_users').select('*');
          })
          .then((actual) => {
            // copy testUsers array with id 1 filtered out
            const expected = testUsers.filter((a) => a.id !== deletedDeckId);
            expect(actual).to.eql(expected);
          });
      });
    });
  });

  describe('updateUser()', () => {
    it('should return 0 rows affected', () => {
      return UsersService.updateUser(db, 999, {
        password: 'newPassword',
      }).then((rowsAffected) => expect(rowsAffected).to.eq(0));
    });

    context('with data present', () => {
      before('insert users', () => db('dekker_users').insert(testUsers));

      it('should successfully update an user', () => {
        const updatedUserId = 1;
        const testUser = testUsers.find((a) => a.id === updatedUserId);
        // make copy of testUser in db, overwriting with newly updated field value
        const updatedUser = { ...testUser, password: 'newPassword' };

        return UsersService.updateUser(db, updatedUserId, updatedUser)
          .then((rowsAffected) => {
            expect(rowsAffected).to.eq(1);
            return db('dekker_users')
              .select('*')
              .where({ id: updatedUserId })
              .first();
          })
          .then((user) => {
            expect(user).to.eql(updatedUser);
          });
      });
    });
  });
});
