function makeDecksArray() {
  return [
    {
      id: 1,
      title: 'Test Deck 1',
      contents: '1,2,3,4',
      date_created: new Date('2020-05-22T16:28:32.615Z'),
    },
    {
      id: 2,
      title: 'Test Deck 2',
      contents: '1,2,3,4',
      date_created: new Date('2020-05-23T16:28:32.615Z'),
    },
    {
      id: 3,
      title: 'Test Deck 3',
      contents: '1,2,3,4',
      date_created: new Date('2020-05-24T16:28:32.615Z'),
    },
    {
      id: 4,
      title: 'Test Deck 4',
      contents: '1,2,3,4',
      date_created: new Date('2020-05-27T16:28:32.615Z'),
    },
    {
      id: 5,
      title: 'Test Deck 5',
      contents: '1,2,3,4',
      date_created: new Date('2020-05-28T16:28:32.615Z'),
    },
    {
      id: 6,
      title: 'Test Deck 6',
      contents: '1,2,3,4',
      date_created: new Date('2020-05-30T16:28:32.615Z'),
    },
  ];
}

function makeNewDeck() {
  return {
    id: 7,
    title: 'Test New Deck',
    contents: '[1, 2, 3, 4]',
    date_created: new Date('2020-06-02T16:28:32.615Z'),
  };
}

function makeExpectedDeck(deck) {
  return {
    id: deck.id,
    title: deck.title,
    contents: deck.contents,
    date_created: deck.date_created,
  };
}

function cleanDecks(db) {
  return db.raw(
    `TRUNCATE
      user_decks
      restart identity cascade`
  );
}

function seedDecksTable(db, decks) {
  return db
    .into('user_decks')
    .insert(decks)
    .then(() =>
      db.raw(`SELECT setval('user_decks_id_seq', ?)`, [
        decks[decks.length - 1].id,
      ])
    );
}

module.exports = {
  makeDecksArray,
  makeNewDeck,
  makeExpectedDeck,

  cleanDecks,

  seedDecksTable,
};
