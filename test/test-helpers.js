const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function makeUsersArray() {
  return [
    {
      id: 1,
      user_name: 'test-user1',
      password: 'testPassword1',
      nickname: 'TU1',
      date_created: new Date('2020-05-22T16:28:32.615Z'),
    },
    {
      id: 2,
      user_name: 'test-user2',
      password: 'testPassword2',
      nickname: 'TU2',
      date_created: new Date('2020-05-24T16:28:32.615Z'),
    },
    {
      id: 3,
      user_name: 'test-user3',
      password: 'testPassword3',
      nickname: 'TU3',
      date_created: new Date('2020-05-30T16:28:32.615Z'),
    },
  ];
}

function makeDecksArray() {
  return [
    {
      id: 1,
      title: 'Test Deck 1',
      contents: '1,2,3,4',
      deck_owner: 1,
      date_created: new Date('2020-05-22T16:28:32.615Z'),
    },
    {
      id: 2,
      title: 'Test Deck 2',
      contents: '1,2,3,4',
      deck_owner: 1,
      date_created: new Date('2020-05-23T16:28:32.615Z'),
    },
    {
      id: 3,
      title: 'Test Deck 3',
      contents: '1,2,3,4',
      deck_owner: 2,
      date_created: new Date('2020-05-24T16:28:32.615Z'),
    },
    {
      id: 4,
      title: 'Test Deck 4',
      contents: '1,2,3,4',
      deck_owner: 1,
      date_created: new Date('2020-05-27T16:28:32.615Z'),
    },
    {
      id: 5,
      title: 'Test Deck 5',
      contents: '1,2,3,4',
      deck_owner: 2,
      date_created: new Date('2020-05-28T16:28:32.615Z'),
    },
    {
      id: 6,
      title: 'Test Deck 6',
      contents: '1,2,3,4',
      deck_owner: 3,
      date_created: new Date('2020-05-30T16:28:32.615Z'),
    },
  ];
}

function makeFixtures() {
  const testUsers = makeUsersArray();
  const testDecks = makeDecksArray();

  return { testUsers, testDecks };
}

function makeExpectedRecipes(spirit_type, recipes) {
  const spirit_cat = spirit_type.find((type) => type.id === recipes.spirit_id);

  return {
    id: recipes.id,
    recipe_name: recipes.recipe_name,
    recipe_img: recipes.recipe_img,
    recipe_ingredients: recipes.recipe_ingredients,
    recipe_prep: recipes.recipe_prep,
    spirit_cat: spirit_cat.spirit_cat,
  };
}

function makeExpectedSpirits(spirit, spirit_type) {
  const spirit_cat = spirit_type.find((type) => type.id === spirit.spirit_id);

  return {
    id: spirit.id,
    spirit_name: spirit.spirit_name,
    spirit_cat: spirit_cat.spirit_cat,
    user_id: spirit.user_id,
    spirit_id: spirit.spirit_id,
  };
}

function makeExpectedFavorites(favorite, recipes) {
  const recipe = recipes.find((r) => r.id === favorite.recipe_id);
  const recipeName = recipe.recipe_name;
  const spirit_id = recipe.spirit_id;
  return {
    favorite_id: favorite.id,
    id: favorite.recipe_id,
    user_id: favorite.user_id,
    recipe_name: recipeName,
    spirit_id,
  };
}

function cleanTables(db) {
  return db.raw(
    `TRUNCATE
      dekker_users,
      user_decks
      restart identity cascade`
  );
}

function seedUsersTable(db, users) {
  const preppedUsers = users.map((user) => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1),
  }));
  return db
    .into('dekker_users')
    .insert(preppedUsers)
    .then(() =>
      db.raw(`SELECT setval('dekker_users_id_seq', ?)`, [
        users[users.length - 1].id,
      ])
    );
}

function seedOtherTables(db, recipes, spirits, spiritType, users, favorites) {
  return db.transaction(async (trx) => {
    await seedUsersTable(trx, users);
    await trx.into('spirit_type').insert(spiritType);
    await trx.raw(`SELECT setval('spirit_type_id_seq', ?)`, [
      spiritType[spiritType.length - 1].id,
    ]);
    await trx.into('spirits').insert(spirits);
    await trx.raw(`SELECT setval('spirits_id_seq', ?)`, [
      spirits[spirits.length - 1].id,
    ]);
    await trx.into('recipes').insert(recipes);
    await trx.raw(`SELECT setval('recipes_id_seq', ?)`, [
      recipes[recipes.length - 1].id,
    ]);
    await trx.into('favorites').insert(favorites);
    await trx.raw(`SELECT setval('favorites_id_seq', ?)`, [
      favorites[favorites.length - 1].id,
    ]);
  });
}

function seedMaliciousSpiirt(db, users, spirit) {
  return seedUsersTable(db, users).then(() =>
    db.into('spirits').insert(spirit)
  );
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.user_name,
    algorithm: 'HS256',
  });
  return `bearer ${token}`;
}

module.exports = {
  makeUsersArray,
  makeDecksArray,
  makeAuthHeader,
  makeFixtures,
  makeExpectedRecipes,
  makeExpectedSpirits,
  makeExpectedFavorites,

  cleanTables,
  seedUsersTable,
  seedOtherTables,
  seedMaliciousSpiirt,
};
