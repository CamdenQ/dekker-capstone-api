const { CARDS_DB } = require('./cards');

const BASE_URL = 'https://api.magicthegathering.io/v1/cards';

function getCards() {
  // for (let i = 1; i < 205; i++) {
  //   fetch(BASE_URL);
  // }
  let testData = fetch(BASE_URL);

  console.table(testData);
}

getCards();
