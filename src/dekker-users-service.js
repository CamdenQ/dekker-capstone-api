const DekkerUsersService = {
  getAllUsers(knex) {
    return knex.select('*').from('dekker_users');
  },

  insertUser(knex, newUser) {
    return knex
      .insert(newUser)
      .into('dekker_users')
      .returning('*')
      .then((rows) => {
        return rows[0];
      });
  },

  getById(knex, id) {
    return knex.select('*').from('dekker_users').where('id', id).first();
  },

  deleteUser(knex, id) {
    return knex('dekker_users').delete().where({ id });
  },

  updateUser(knex, id, newUserFields) {
    return knex('dekker_users').update(newUserFields).where({ id });
  },
};

module.exports = DekkerUsersService;
