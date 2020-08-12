exports.up = function (knex) {
  return knex.schema.createTable('decks', (table) => {
    table.increments();
    table.text('title');
    table.specificType('contents', 'int ARRAY');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('decks');
};
