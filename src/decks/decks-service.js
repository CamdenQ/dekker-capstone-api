const UserDecksService = {
  getAllDecks(db) {
    return db.select('*').from('user_decks');
  },

  insertDeck(db, newDeck) {
    return db
      .insert(newDeck)
      .into('user_decks')
      .returning('*')
      .then((rows) => {
        return rows[0];
      });
  },

  getDeckById(db, id) {
    return db.select('*').from('user_decks').where('id', id).first();
  },

  deleteDeck(db, id) {
    return db('user_decks').delete().where({ id });
  },

  updateDeck(db, id, newDeckFields) {
    return db('user_decks').update(newDeckFields).where({ id });
  },
};

module.exports = UserDecksService;
