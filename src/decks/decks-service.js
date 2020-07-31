const UserDecksService = {
  getAllDecks(knex) {
    return knex.select('*').from('user_decks');
  },

  insertDeck(knex, newDeck) {
    return knex
      .insert(newDeck)
      .into('user_decks')
      .returning('*')
      .then((rows) => {
        return rows[0];
      });
  },

  getById(knex, id) {
    return knex.select('*').from('user_decks').where('id', id).first();
  },

  deleteDeck(knex, id) {
    return knex('user_decks').delete().where({ id });
  },

  updateDeck(knex, id, newDeckFields) {
    return knex('user_decks').update(newDeckFields).where({ id });
  },
};

module.exports = UserDecksService;
