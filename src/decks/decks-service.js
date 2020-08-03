const UserDecksService = {
  getAllDecks(db, deck_owner) {
    return db.select('*').from('user_decks').where('deck_owner', deck_owner);
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

  getById(db, id) {
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
