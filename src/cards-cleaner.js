const fs = require('fs');
const cards = require('./cards');

const cleaned = cards.map((card) => ({
  name: card.name,
  colors: [...card.colors],
  types: [...card.types],
  image_url: card.imageUrl,
}));

const jsonContent = JSON.stringify(cleaned);

fs.writeFile('src/output.js', jsonContent, 'utf8', function (err) {
  if (err) {
    console.log('An error occured while writing JSON Object to File.');
    return console.log(err);
  }

  console.log('JSON file has been saved.');
});
