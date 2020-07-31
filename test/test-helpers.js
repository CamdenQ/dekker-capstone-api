const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function makeUsersArray() {
  return [
    {
      id: 1,
      username: 'test-user1',
      password: 'testPassword1',
      nickname: 'TU1',
      date_created: new Date('2020-05-22T16:28:32.615Z'),
    },
    {
      id: 2,
      username: 'test-user2',
      password: 'testPassword2',
      nickname: 'TU2',
      date_created: new Date('2020-05-24T16:28:32.615Z'),
    },
    {
      id: 3,
      username: 'test-user3',
      password: 'testPassword3',
      nickname: 'TU3',
      date_created: new Date('2020-05-30T16:28:32.615Z'),
    },
  ];
}

function makeDecksArray() {
  return [
    {
      id: 1,
      title: 'Test Deck 1',
      contents: '1,2,3,4',
      deck_owner: 1,
      date_created: new Date('2020-05-22T16:28:32.615Z'),
    },
    {
      id: 2,
      title: 'Test Deck 2',
      contents: '1,2,3,4',
      deck_owner: 1,
      date_created: new Date('2020-05-23T16:28:32.615Z'),
    },
    {
      id: 3,
      title: 'Test Deck 3',
      contents: '1,2,3,4',
      deck_owner: 2,
      date_created: new Date('2020-05-24T16:28:32.615Z'),
    },
    {
      id: 4,
      title: 'Test Deck 4',
      contents: '1,2,3,4',
      deck_owner: 1,
      date_created: new Date('2020-05-27T16:28:32.615Z'),
    },
    {
      id: 5,
      title: 'Test Deck 5',
      contents: '1,2,3,4',
      deck_owner: 2,
      date_created: new Date('2020-05-28T16:28:32.615Z'),
    },
    {
      id: 6,
      title: 'Test Deck 6',
      contents: '1,2,3,4',
      deck_owner: 3,
      date_created: new Date('2020-05-30T16:28:32.615Z'),
    },
  ];
}

function makeNewDeck() {
  return {
    deck_owner: 3,
    title: 'Test New Deck',
    contents: '[1, 2, 3, 4]',
    date_created: new Date('2020-06-02T16:28:32.615Z'),
  };
}

function makeNewUser() {
  return {
    username: 'newTester',
    password: 'newPassword',
    nickname: 'newTester',
    date_created: new Date('2020-05-22T16:28:32.615Z'),
  };
}

function makeFixtures() {
  const testUsers = makeUsersArray();
  const testDecks = makeDecksArray();

  return { testUsers, testDecks };
}

function makeExpectedDeck(deck) {
  return {
    id: 1,
    deck_owner: deck.deck_owner,
    title: deck.title,
    contents: deck.contents,
    date_created: deck.date_created,
  };
}

function makeExpectedUser(user) {
  return {
    id: 1,
    username: user.username,
    password: user.password,
    nickname: user.nickname,
    date_created: user.date_created,
  };
}

function cleanTables(db) {
  return db.raw(
    `TRUNCATE
      dekker_users,
      user_decks
      restart identity cascade`
  );
}

function cleanUsers(db) {
  return db.raw(
    `TRUNCATE
      dekker_users
      restart identity cascade`
  );
}

function cleanDecks(db) {
  return db.raw(
    `TRUNCATE
      user_decks
      restart identity cascade`
  );
}

function seedUsersTable(db, users) {
  const preppedUsers = users.map((user) => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1),
  }));
  return db
    .into('dekker_users')
    .insert(preppedUsers)
    .then(() =>
      db.raw(`SELECT setval('dekker_users_id_seq', ?)`, [
        users[users.length - 1].id,
      ])
    );
}

function seedDecksTable(db, users, decks) {
  return db.transaction(async (trx) => {
    await seedUsersTable(trx, users);
    await trx.into('user_decks').insert(decks);
  });
}

function seedMaliciousSpiirt(db, users, spirit) {
  return seedUsersTable(db, users).then(() =>
    db.into('spirits').insert(spirit)
  );
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.username,
    algorithm: 'HS256',
  });
  return `bearer ${token}`;
}

module.exports = {
  makeUsersArray,
  makeDecksArray,
  makeNewDeck,
  makeNewUser,
  makeAuthHeader,
  makeFixtures,
  makeExpectedUser,
  makeExpectedDeck,

  cleanTables,
  cleanUsers,
  cleanDecks,

  seedUsersTable,
  seedDecksTable,
  seedMaliciousSpiirt,
};
