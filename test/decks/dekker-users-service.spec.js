const knex = require('knex');
const DekkerUsersService = require('../../src/dekker-users-service');

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

describe.only('Dekker users service object', () => {
  let db;

  // We'll use this array as an example of mock data that represents
  // valid contents for our database
  const testUsers = [
    {
      username: 'tester1',
      password: 'password',
      nickname: 'tester1',
      date_created: new Date('2020-05-22T16:28:32.615Z'),
    },
    {
      username: 'tester2',
      password: 'password',
      nickname: 'tester2',
      date_created: new Date('2020-05-22T16:28:32.615Z'),
    },
    {
      username: 'tester3',
      password: 'password',
      nickname: 'tester3',
      date_created: new Date('2020-05-22T16:28:32.615Z'),
    },
  ];

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
  before('clean db', () => db('dekker_users').truncate());
  afterEach('clean db', () => db('dekker_users').truncate());

  // After all tests run, let go of the db connection
  after('destroy db connection', () => db.destroy());

  describe('getAllUsers()', () => {
    it('returns an empty array', () => {
      return DekkerUsersService.getAllUsers(db).then((users) =>
        expect(users).to.eql([])
      );
    });

    // Whenever we set a context with data present, we should always include
    // a beforeEach() hook within the context that takes care of adding the
    // appropriate data to our table
    context('with data present', () => {
      beforeEach('insert test users', () =>
        db('dekker_users').insert(testUsers)
      );

      it('returns all test users', () => {
        return DekkerUsersService.getAllUsers(db).then((users) =>
          expect(users).to.eql(testUsers)
        );
      });
    });
  });

  describe('insertUser()', () => {
    it('inserts record in db and returns deck with new id', () => {
      // New deck to use as subject of our test
      const newUser = {
        username: 'newTester',
        password: 'newPassword',
        nickname: 'newTester',
        date_created: new Date('2020-05-22T16:28:32.615Z'),
      };

      return DekkerUsersService.insertUser(db, newUser).then((actual) => {
        expect(actual).to.eql({
          id: 1,
          username: newUser.username,
          password: newUser.password,
          nickname: newUser.nickname,
          date_created: newUser.date_created,
        });
      });
    });

    it('throws not-null constraint error if username not provided', () => {
      // Subject for the test does not contain a `usernam` field, so we
      // expect the database to prevent the record to be added
      const newUser = {
        password: 'newPassword',
        nickname: 'newTester',
        date_created: new Date('2020-05-22T16:28:32.615Z'),
      };

      // The .then() method on a promise can optionally take a second argument:
      // The first callback occurs if the promise is resolved, which we've been
      // using for all our promise chains. The second occurs if promise is
      // rejected. In the following test, we EXPECT the promise to be rejected
      // as the database should throw an error due to the NOT NULL constraint
      return DekkerUsersService.insertUser(db, newUser).then(
        () => expect.fail('db should throw error'),
        (err) => expect(err.message).to.include('not-null')
      );
    });
  });

  describe('getById()', () => {
    it('should return undefined', () => {
      return DekkerUsersService.getById(db, 999).then(
        (deck) => expect(deck).to.be.undefined
      );
    });

    context('with data present', () => {
      before('insert users', () => db('dekker_users').insert(testUsers));

      it('should return existing user', () => {
        const expectedUserId = 3;
        const expectedUser = testUsers.find((a) => a.id === expectedUserId);
        return DekkerUsersService.getById(db, expectedUserId).then((actual) =>
          expect(actual).to.eql(expectedUser)
        );
      });
    });
  });

  describe('deleteUser()', () => {
    it('should return 0 rows affected', () => {
      return DekkerUsersService.deleteUser(db, 999).then((rowsAffected) =>
        expect(rowsAffected).to.eq(0)
      );
    });

    context('with data present', () => {
      before('insert users', () => db('dekker_users').insert(testUsers));

      it('should return 1 row affected and record is removed from db', () => {
        const deletedDeckId = 1;

        return DekkerUsersService.deleteUser(db, deletedDeckId)
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
      return DekkerUsersService.updateUser(db, 999, {
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

        return DekkerUsersService.updateUser(db, updatedUserId, updatedUser)
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
