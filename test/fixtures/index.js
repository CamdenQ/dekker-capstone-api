const decks = [
  {
    id: 1,
    title: 'Zombehs',
    contents: [1, 3, 5, 10, 15],
  },
  {
    id: 2,
    title: 'Mana Burn',
    contents: [1, 10, 12, 13, 15, 12],
  },
  {
    id: 3,
    title: 'Artifacts Galore',
    contents: [1, 30, 15, 12, 25],
  },
  {
    id: 4,
    title: 'Ninjuhs',
    contents: [2, 13, 51, 12, 13],
  },
  {
    id: 5,
    title: 'Power of Science',
    contents: [3, 5, 12, 11, 21, 35],
  },
  {
    id: 6,
    title: 'Goblin Rush',
    contents: [5, 15, 23, 12, 31],
  },
];

const deck = { title: 'Inserted', contents: [1, 2, 3] };

const cards = [
  {
    id: 1,
    name: 'Affectionate Indrik',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452871&type=card',
  },
  {
    id: 2,
    name: 'Arboretum Elemental',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452872&type=card',
  },
  {
    id: 3,
    name: 'Arclight Phoenix',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452841&type=card',
  },
  {
    id: 4,
    name: 'Artful Takedown',
    colors: ['Black', 'Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452901&type=card',
  },
  {
    id: 5,
    name: "Assassin's Trophy",
    colors: ['Black', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452902&type=card',
  },
  {
    id: 6,
    name: 'Assemble',
    colors: ['White', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452971&type=card',
  },
  {
    id: 7,
    name: 'Assure',
    colors: ['White', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452971&type=card',
  },
  {
    id: 8,
    name: 'Attendant of Vraska',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455611&type=card',
  },
  {
    id: 9,
    name: 'Aurelia, Exemplar of Justice',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452903&type=card',
  },
  {
    id: 10,
    name: 'Barging Sergeant',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452842&type=card',
  },
];

module.exports = {
  cards,
  decks,
  deck,
};
