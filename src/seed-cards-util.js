// copy the following code into server.js if table needs to be seeded again

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
