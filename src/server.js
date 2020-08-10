require('dotenv');
const cards = require('./cards');

const app = require('./app');
const knex = require('knex');
const { PORT, DATABASE_URL } = require('./config');

const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
});

app.set('db', db);

function seedCards() {
  return db
    .insert(cards)
    .into('cards')
    .then(() => {
      console.log('Cards table seeded successfully!');
    })
    .catch((e) => console.log(`Error seeding cards table: ${e}`));
}

seedCards();

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}...`);
});
