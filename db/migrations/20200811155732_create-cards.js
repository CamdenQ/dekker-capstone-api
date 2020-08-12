exports.up = function (knex) {
  return knex.schema.createTable('cards', (table) => {
    table.increments();
    table.text('name');
    table.specificType('colors', 'text ARRAY');
    table.specificType('types', 'text ARRAY');
    table.text('image_url');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('cards');
};
