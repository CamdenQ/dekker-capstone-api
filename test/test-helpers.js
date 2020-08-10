function makeDecksArray() {
  return [
    {
      id: 1,
      title: 'Test Deck 1',
      contents: '1,2,3,4',
    },
    {
      id: 2,
      title: 'Test Deck 2',
      contents: '1,2,3,4',
    },
    {
      id: 3,
      title: 'Test Deck 3',
      contents: '1,2,3,4',
    },
    {
      id: 4,
      title: 'Test Deck 4',
      contents: '1,2,3,4',
    },
    {
      id: 5,
      title: 'Test Deck 5',
      contents: '1,2,3,4',
    },
    {
      id: 6,
      title: 'Test Deck 6',
      contents: '1,2,3,4',
    },
  ];
}

function makeNewDeck() {
  return {
    id: 7,
    title: 'Test New Deck',
    contents: '[1, 2, 3, 4]',
  };
}

function makeExpectedDeck(deck) {
  return {
    id: deck.id,
    title: deck.title,
    contents: deck.contents,
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
