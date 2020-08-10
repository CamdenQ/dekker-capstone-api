const CARDS_DB = [
  {
    name: 'Affectionate Indrik',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452871&type=card',
  },
  {
    name: 'Arboretum Elemental',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452872&type=card',
  },
  {
    name: 'Arclight Phoenix',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452841&type=card',
  },
  {
    name: 'Artful Takedown',
    colors: ['Black', 'Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452901&type=card',
  },
  {
    name: "Assassin's Trophy",
    colors: ['Black', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452902&type=card',
  },
  {
    name: 'Assemble',
    colors: ['White', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452971&type=card',
  },
  {
    name: 'Assure',
    colors: ['White', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452971&type=card',
  },
  {
    name: 'Attendant of Vraska',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455611&type=card',
  },
  {
    name: 'Aurelia, Exemplar of Justice',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452903&type=card',
  },
  {
    name: 'Barging Sergeant',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452842&type=card',
  },
  {
    name: 'Barrier of Bones',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452811&type=card',
  },
  {
    name: 'Bartizan Bats',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452812&type=card',
  },
  {
    name: 'Beacon Bolt',
    colors: ['Red', 'Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452904&type=card',
  },
  {
    name: 'Beamsplitter Mage',
    colors: ['Red', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452905&type=card',
  },
  {
    name: 'Beast Whisperer',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452873&type=card',
  },
  {
    name: 'Blade Instructor',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452751&type=card',
  },
  {
    name: 'Blood Operative',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452813&type=card',
  },
  {
    name: 'Book Devourer',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452843&type=card',
  },
  {
    name: 'Boros Challenger',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452906&type=card',
  },
  {
    name: 'Boros Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452993&type=card',
  },
  {
    name: 'Boros Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452994&type=card',
  },
  {
    name: 'Boros Locket',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452981&type=card',
  },
  {
    name: 'Bounty Agent',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452752&type=card',
  },
  {
    name: 'Bounty of Might',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452874&type=card',
  },
  {
    name: 'Burglar Rat',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452814&type=card',
  },
  {
    name: 'Camaraderie',
    colors: ['Green', 'White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452907&type=card',
  },
  {
    name: 'Candlelight Vigil',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452753&type=card',
  },
  {
    name: 'Capture Sphere',
    colors: ['Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452781&type=card',
  },
  {
    name: 'Centaur Peacemaker',
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452908&type=card',
  },
  {
    name: 'Chamber Sentry',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452982&type=card',
  },
  {
    name: 'Chance for Glory',
    colors: ['Red', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452909&type=card',
  },
  {
    name: 'Charnel Troll',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452910&type=card',
  },
  {
    name: "Chemister's Insight",
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452782&type=card',
  },
  {
    name: 'Child of Night',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452815&type=card',
  },
  {
    name: 'Chromatic Lantern',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452983&type=card',
  },
  {
    name: 'Circuitous Route',
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452875&type=card',
  },
  {
    name: 'Citywatch Sphinx',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452783&type=card',
  },
  {
    name: 'Citywide Bust',
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452754&type=card',
  },
  {
    name: 'Collar the Culprit',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452755&type=card',
  },
  {
    name: 'Command the Storm',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452844&type=card',
  },
  {
    name: 'Conclave Cavalier',
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452911&type=card',
  },
  {
    name: 'Conclave Guildmage',
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452912&type=card',
  },
  {
    name: 'Conclave Tribunal',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452756&type=card',
  },
  {
    name: 'Concoct',
    colors: ['Blue', 'Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452972&type=card',
  },
  {
    name: 'Connive',
    colors: ['Blue', 'Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452972&type=card',
  },
  {
    name: 'Cosmotronic Wave',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452845&type=card',
  },
  {
    name: 'Crackling Drake',
    colors: ['Red', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452913&type=card',
  },
  {
    name: 'Creeping Chill',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452816&type=card',
  },
  {
    name: 'Crush Contraband',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452757&type=card',
  },
  {
    name: 'Crushing Canopy',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452876&type=card',
  },
  {
    name: 'Darkblade Agent',
    colors: ['Black', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452914&type=card',
  },
  {
    name: 'Dawn of Hope',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452758&type=card',
  },
  {
    name: 'Dazzling Lights',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452784&type=card',
  },
  {
    name: 'Dead Weight',
    colors: ['Black'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452817&type=card',
  },
  {
    name: 'Deadly Visit',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452818&type=card',
  },
  {
    name: 'Deafening Clarion',
    colors: ['Red', 'White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452915&type=card',
  },
  {
    name: 'Demotion',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452759&type=card',
  },
  {
    name: 'Devious Cover-Up',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452785&type=card',
  },
  {
    name: 'Devkarin Dissident',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452877&type=card',
  },
  {
    name: 'Dimir Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452995&type=card',
  },
  {
    name: 'Dimir Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452996&type=card',
  },
  {
    name: 'Dimir Informant',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452786&type=card',
  },
  {
    name: 'Dimir Locket',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452984&type=card',
  },
  {
    name: 'Dimir Spybug',
    colors: ['Black', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452916&type=card',
  },
  {
    name: 'Direct Current',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452846&type=card',
  },
  {
    name: 'Dispersal',
    colors: ['Blue', 'Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452973&type=card',
  },
  {
    name: 'Discovery',
    colors: ['Blue', 'Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452973&type=card',
  },
  {
    name: 'Disdainful Stroke',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452787&type=card',
  },
  {
    name: 'Disinformation Campaign',
    colors: ['Black', 'Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452917&type=card',
  },
  {
    name: 'District Guide',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452878&type=card',
  },
  {
    name: 'Divine Visitation',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452760&type=card',
  },
  {
    name: 'Doom Whisperer',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452819&type=card',
  },
  {
    name: 'Douser of Lights',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452820&type=card',
  },
  {
    name: 'Dream Eater',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452788&type=card',
  },
  {
    name: 'Drowned Secrets',
    colors: ['Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452789&type=card',
  },
  {
    name: 'Electrostatic Field',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452847&type=card',
  },
  {
    name: 'Emmara, Soul of the Accord',
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452918&type=card',
  },
  {
    name: 'Enhanced Surveillance',
    colors: ['Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452790&type=card',
  },
  {
    name: 'Erratic Cyclops',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452848&type=card',
  },
  {
    name: 'Erstwhile Trooper',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452919&type=card',
  },
  {
    name: 'Etrata, the Silencer',
    colors: ['Black', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452920&type=card',
  },
  {
    name: 'Explosion',
    colors: ['Blue', 'Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452974&type=card',
  },
  {
    name: 'Expansion',
    colors: ['Blue', 'Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452974&type=card',
  },
  {
    name: 'Experimental Frenzy',
    colors: ['Red'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452849&type=card',
  },
  {
    name: 'Fearless Halberdier',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452850&type=card',
  },
  {
    name: 'Finality',
    colors: ['Black', 'Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452975&type=card',
  },
  {
    name: 'Find',
    colors: ['Black', 'Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452975&type=card',
  },
  {
    name: 'Fire Urchin',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452851&type=card',
  },
  {
    name: "Firemind's Research",
    colors: ['Red', 'Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452921&type=card',
  },
  {
    name: 'Flight of Equenauts',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452761&type=card',
  },
  {
    name: 'Flourish',
    colors: ['White', 'Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452976&type=card',
  },
  {
    name: 'Flower',
    colors: ['White', 'Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452976&type=card',
  },
  {
    name: 'Forest',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455604&type=card',
  },
  {
    name: 'Fresh-Faced Recruit',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452966&type=card',
  },
  {
    name: 'Garrison Sergeant',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452922&type=card',
  },
  {
    name: 'Gatekeeper Gargoyle',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452985&type=card',
  },
  {
    name: 'Gateway Plaza',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452997&type=card',
  },
  {
    name: 'Generous Stray',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452879&type=card',
  },
  {
    name: 'Gird for Battle',
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452762&type=card',
  },
  {
    name: 'Glaive of the Guildpact',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452986&type=card',
  },
  {
    name: 'Glowspore Shaman',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452923&type=card',
  },
  {
    name: 'Goblin Banneret',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452852&type=card',
  },
  {
    name: 'Goblin Cratermaker',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452853&type=card',
  },
  {
    name: 'Goblin Electromancer',
    colors: ['Red', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452924&type=card',
  },
  {
    name: 'Goblin Locksmith',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452854&type=card',
  },
  {
    name: 'Golgari Findbroker',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452925&type=card',
  },
  {
    name: 'Golgari Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452998&type=card',
  },
  {
    name: 'Golgari Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452999&type=card',
  },
  {
    name: 'Golgari Locket',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452987&type=card',
  },
  {
    name: 'Golgari Raiders',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452880&type=card',
  },
  {
    name: 'Grappling Sundew',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452881&type=card',
  },
  {
    name: 'Gravitic Punch',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452855&type=card',
  },
  {
    name: 'Gruesome Menagerie',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452821&type=card',
  },
  {
    name: 'Guild Summit',
    colors: ['Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452791&type=card',
  },
  {
    name: "Guildmages' Forum",
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453000&type=card',
  },
  {
    name: 'Haazda Marshal',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452763&type=card',
  },
  {
    name: 'Hammer Dropper',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452926&type=card',
  },
  {
    name: 'Hatchery Spider',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452882&type=card',
  },
  {
    name: "Healer's Hawk",
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452764&type=card',
  },
  {
    name: 'Hellkite Whelp',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452856&type=card',
  },
  {
    name: 'Hired Poisoner',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452822&type=card',
  },
  {
    name: 'Hitchclaw Recluse',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452883&type=card',
  },
  {
    name: 'House Guildmage',
    colors: ['Black', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452927&type=card',
  },
  {
    name: 'Hunted Witness',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452765&type=card',
  },
  {
    name: 'Hypothesizzle',
    colors: ['Red', 'Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452928&type=card',
  },
  {
    name: 'Impervious Greatwurm',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455613&type=card',
  },
  {
    name: 'Inescapable Blaze',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452857&type=card',
  },
  {
    name: 'Inspiring Unicorn',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452766&type=card',
  },
  {
    name: 'Intervention',
    colors: ['White', 'Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452977&type=card',
  },
  {
    name: 'Integrity',
    colors: ['White', 'Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452977&type=card',
  },
  {
    name: 'Intrusive Packbeast',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452767&type=card',
  },
  {
    name: 'Invent',
    colors: ['Blue', 'Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452978&type=card',
  },
  {
    name: 'Invert',
    colors: ['Blue', 'Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452978&type=card',
  },
  {
    name: 'Ionize',
    colors: ['Red', 'Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452929&type=card',
  },
  {
    name: 'Ironshell Beetle',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452884&type=card',
  },
  {
    name: 'Island',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455601&type=card',
  },
  {
    name: 'Izoni, Thousand-Eyed',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452930&type=card',
  },
  {
    name: 'Izzet Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453001&type=card',
  },
  {
    name: 'Izzet Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453002&type=card',
  },
  {
    name: 'Izzet Locket',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452988&type=card',
  },
  {
    name: 'Join Shields',
    colors: ['Green', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452931&type=card',
  },
  {
    name: 'Justice Strike',
    colors: ['Red', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452932&type=card',
  },
  {
    name: 'Knight of Autumn',
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452933&type=card',
  },
  {
    name: 'Kraul Foragers',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452885&type=card',
  },
  {
    name: 'Kraul Harpooner',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452886&type=card',
  },
  {
    name: 'Kraul Raider',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455610&type=card',
  },
  {
    name: 'Kraul Swarm',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452823&type=card',
  },
  {
    name: 'Lava Coil',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452858&type=card',
  },
  {
    name: 'Lazav, the Multifarious',
    colors: ['Black', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452934&type=card',
  },
  {
    name: 'League Guildmage',
    colors: ['Red', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452935&type=card',
  },
  {
    name: 'Leapfrog',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452792&type=card',
  },
  {
    name: 'Ledev Champion',
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452936&type=card',
  },
  {
    name: 'Ledev Guardian',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452768&type=card',
  },
  {
    name: 'Legion Guildmage',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452937&type=card',
  },
  {
    name: 'Legion Warboss',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452859&type=card',
  },
  {
    name: 'Light of the Legion',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452769&type=card',
  },
  {
    name: 'Lotleth Giant',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452824&type=card',
  },
  {
    name: 'Loxodon Restorer',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452770&type=card',
  },
  {
    name: 'Luminous Bonds',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452771&type=card',
  },
  {
    name: 'Maniacal Rage',
    colors: ['Red'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452860&type=card',
  },
  {
    name: 'March of the Multitudes',
    colors: ['Green', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452938&type=card',
  },
  {
    name: 'Mausoleum Secrets',
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452825&type=card',
  },
  {
    name: 'Maximize Altitude',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452793&type=card',
  },
  {
    name: 'Maximize Velocity',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452861&type=card',
  },
  {
    name: 'Mephitic Vapors',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452826&type=card',
  },
  {
    name: 'Midnight Reaper',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452827&type=card',
  },
  {
    name: 'Might of the Masses',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452887&type=card',
  },
  {
    name: 'Mission Briefing',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452794&type=card',
  },
  {
    name: 'Mnemonic Betrayal',
    colors: ['Black', 'Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452939&type=card',
  },
  {
    name: 'Molderhulk',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452940&type=card',
  },
  {
    name: 'Moodmark Painter',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452828&type=card',
  },
  {
    name: 'Mountain',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455603&type=card',
  },
  {
    name: 'Murmuring Mystic',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452795&type=card',
  },
  {
    name: 'Muse Drake',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452796&type=card',
  },
  {
    name: 'Narcomoeba',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452797&type=card',
  },
  {
    name: 'Necrotic Wound',
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452829&type=card',
  },
  {
    name: 'Never Happened',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452830&type=card',
  },
  {
    name: 'Nightveil Predator',
    colors: ['Black', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452941&type=card',
  },
  {
    name: 'Nightveil Sprite',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452798&type=card',
  },
  {
    name: 'Niv-Mizzet, Parun',
    colors: ['Red', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452942&type=card',
  },
  {
    name: 'Notion Rain',
    colors: ['Black', 'Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452943&type=card',
  },
  {
    name: 'Nullhide Ferox',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452888&type=card',
  },
  {
    name: 'Ochran Assassin',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452944&type=card',
  },
  {
    name: 'Omnispell Adept',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452799&type=card',
  },
  {
    name: 'Ornery Goblin',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452862&type=card',
  },
  {
    name: 'Overgrown Tomb',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453003&type=card',
  },
  {
    name: "Pack's Favor",
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452889&type=card',
  },
  {
    name: 'Parhelion Patrol',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452772&type=card',
  },
  {
    name: 'Passwall Adept',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452800&type=card',
  },
  {
    name: 'Pause for Reflection',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452890&type=card',
  },
  {
    name: 'Pelt Collector',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452891&type=card',
  },
  {
    name: 'Pilfering Imp',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452831&type=card',
  },
  {
    name: 'Piston-Fist Cyclops',
    colors: ['Red', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452967&type=card',
  },
  {
    name: 'Pitiless Gorgon',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452968&type=card',
  },
  {
    name: 'Plaguecrafter',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452832&type=card',
  },
  {
    name: 'Plains',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455600&type=card',
  },
  {
    name: 'Portcullis Vine',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452892&type=card',
  },
  {
    name: 'Precision Bolt',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455607&type=card',
  },
  {
    name: 'Prey Upon',
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452893&type=card',
  },
  {
    name: 'Price of Fame',
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452833&type=card',
  },
  {
    name: 'Quasiduplicate',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452801&type=card',
  },
  {
    name: 'Radical Idea',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452802&type=card',
  },
  {
    name: "Ral's Dispersal",
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455606&type=card',
  },
  {
    name: "Ral's Staticaster",
    colors: ['Red', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455608&type=card',
  },
  {
    name: 'Ral, Caller of Storms',
    colors: ['Red', 'Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455605&type=card',
  },
  {
    name: 'Ral, Izzet Viceroy',
    colors: ['Red', 'Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452945&type=card',
  },
  {
    name: 'Rampaging Monument',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452989&type=card',
  },
  {
    name: 'Resurgence',
    colors: ['White', 'Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452979&type=card',
  },
  {
    name: 'Response',
    colors: ['White', 'Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452979&type=card',
  },
  {
    name: 'Rhizome Lurcher',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452946&type=card',
  },
  {
    name: 'Righteous Blow',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452773&type=card',
  },
  {
    name: 'Risk Factor',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452863&type=card',
  },
  {
    name: 'Ritual of Soot',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452834&type=card',
  },
  {
    name: 'Roc Charger',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452774&type=card',
  },
  {
    name: 'Rosemane Centaur',
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452947&type=card',
  },
  {
    name: 'Rubblebelt Boar',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452864&type=card',
  },
  {
    name: 'Runaway Steam-Kin',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452865&type=card',
  },
  {
    name: 'Sacred Foundry',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453004&type=card',
  },
  {
    name: 'Selective Snare',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452803&type=card',
  },
  {
    name: 'Selesnya Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453005&type=card',
  },
  {
    name: 'Selesnya Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453006&type=card',
  },
  {
    name: 'Selesnya Locket',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452990&type=card',
  },
  {
    name: 'Severed Strands',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452835&type=card',
  },
  {
    name: 'Siege Wurm',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452894&type=card',
  },
  {
    name: 'Silent Dart',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452991&type=card',
  },
  {
    name: 'Sinister Sabotage',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452804&type=card',
  },
  {
    name: 'Skyknight Legionnaire',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452948&type=card',
  },
  {
    name: 'Skyline Scout',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452775&type=card',
  },
  {
    name: 'Smelt-Ward Minotaur',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452866&type=card',
  },
  {
    name: 'Sonic Assault',
    colors: ['Red', 'Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452949&type=card',
  },
  {
    name: 'Spinal Centipede',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452836&type=card',
  },
  {
    name: 'Sprouting Renewal',
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452895&type=card',
  },
  {
    name: 'Statue',
    colors: ['Black', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452980&type=card',
  },
  {
    name: 'Status',
    colors: ['Black', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452980&type=card',
  },
  {
    name: 'Steam Vents',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453007&type=card',
  },
  {
    name: 'Street Riot',
    colors: ['Red'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452867&type=card',
  },
  {
    name: 'Sumala Woodshaper',
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452950&type=card',
  },
  {
    name: 'Sunhome Stalwart',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452776&type=card',
  },
  {
    name: 'Sure Strike',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452868&type=card',
  },
  {
    name: 'Swamp',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455602&type=card',
  },
  {
    name: 'Swarm Guildmage',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452951&type=card',
  },
  {
    name: 'Swathcutter Giant',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452952&type=card',
  },
  {
    name: 'Swiftblade Vindicator',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452953&type=card',
  },
  {
    name: 'Sworn Companions',
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452777&type=card',
  },
  {
    name: "Tajic, Legion's Edge",
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452954&type=card',
  },
  {
    name: 'Take Heart',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452778&type=card',
  },
  {
    name: 'Temple Garden',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453008&type=card',
  },
  {
    name: 'Tenth District Guard',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452779&type=card',
  },
  {
    name: 'Thief of Sanity',
    colors: ['Black', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452955&type=card',
  },
  {
    name: 'Thought Erasure',
    colors: ['Black', 'Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452956&type=card',
  },
  {
    name: 'Thoughtbound Phantasm',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452805&type=card',
  },
  {
    name: 'Thousand-Year Storm',
    colors: ['Red', 'Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452957&type=card',
  },
  {
    name: 'Torch Courier',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452869&type=card',
  },
  {
    name: 'Trostani Discordant',
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452958&type=card',
  },
  {
    name: 'Truefire Captain',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452959&type=card',
  },
  {
    name: 'Undercity Necrolisk',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452837&type=card',
  },
  {
    name: 'Undercity Uprising',
    colors: ['Black', 'Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452960&type=card',
  },
  {
    name: 'Underrealm Lich',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452961&type=card',
  },
  {
    name: 'Unexplained Disappearance',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452806&type=card',
  },
  {
    name: 'Unmoored Ego',
    colors: ['Black', 'Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452962&type=card',
  },
  {
    name: 'Urban Utopia',
    colors: ['Green'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452896&type=card',
  },
  {
    name: 'Vedalken Mesmerist',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452807&type=card',
  },
  {
    name: 'Veiled Shade',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452838&type=card',
  },
  {
    name: 'Venerated Loxodon',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452780&type=card',
  },
  {
    name: 'Vernadi Shieldmate',
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452969&type=card',
  },
  {
    name: 'Vicious Rumors',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452839&type=card',
  },
  {
    name: 'Vigorspore Wurm',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452897&type=card',
  },
  {
    name: 'Vivid Revival',
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452898&type=card',
  },
  {
    name: "Vraska's Stoneglare",
    colors: ['Black', 'Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455612&type=card',
  },
  {
    name: 'Vraska, Golgari Queen',
    colors: ['Black', 'Green'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452963&type=card',
  },
  {
    name: 'Vraska, Regal Gorgon',
    colors: ['Black', 'Green'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=455609&type=card',
  },
  {
    name: 'Wall of Mist',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452808&type=card',
  },
  {
    name: 'Wand of Vertebrae',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452992&type=card',
  },
  {
    name: 'Wary Okapi',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452899&type=card',
  },
  {
    name: 'Watcher in the Mist',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452809&type=card',
  },
  {
    name: 'Watery Grave',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=453009&type=card',
  },
  {
    name: 'Wee Dragonauts',
    colors: ['Red', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452964&type=card',
  },
  {
    name: 'Whisper Agent',
    colors: ['Black', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452970&type=card',
  },
  {
    name: 'Whispering Snitch',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452840&type=card',
  },
  {
    name: 'Wild Ceratok',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452900&type=card',
  },
  {
    name: 'Wishcoin Crab',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452810&type=card',
  },
  {
    name: 'Wojek Bodyguard',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452870&type=card',
  },
  {
    name: 'Worldsoul Colossus',
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=452965&type=card',
  },
  {
    name: 'Absorb',
    colors: ['Blue', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457295&type=card',
  },
  {
    name: 'Act of Treason',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457235&type=card',
  },
  {
    name: 'Aeromunculus',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457296&type=card',
  },
  {
    name: 'Amplifire',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457236&type=card',
  },
  {
    name: 'Angel of Grace',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457145&type=card',
  },
  {
    name: 'Angelic Exaltation',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457146&type=card',
  },
  {
    name: 'Applied Biomancy',
    colors: ['Green', 'Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457297&type=card',
  },
  {
    name: 'Archway Angel',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457147&type=card',
  },
  {
    name: "Arrester's Admonition",
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457175&type=card',
  },
  {
    name: "Arrester's Zeal",
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457148&type=card',
  },
  {
    name: 'Awaken the Erstwhile',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457205&type=card',
  },
  {
    name: 'Axebane Beast',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457265&type=card',
  },
  {
    name: 'Azorius Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457387&type=card',
  },
  {
    name: 'Azorius Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457388&type=card',
  },
  {
    name: 'Azorius Knight-Arbiter',
    colors: ['Blue', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457298&type=card',
  },
  {
    name: 'Azorius Locket',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457375&type=card',
  },
  {
    name: 'Azorius Skyguard',
    colors: ['Blue', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457299&type=card',
  },
  {
    name: 'Bankrupt in Blood',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457206&type=card',
  },
  {
    name: 'Basilica Bell-Haunt',
    colors: ['Black', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457300&type=card',
  },
  {
    name: 'Bedazzle',
    colors: ['Black', 'Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457365&type=card',
  },
  {
    name: 'Bedeck',
    colors: ['Black', 'Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457365&type=card',
  },
  {
    name: 'Bedevil',
    colors: ['Black', 'Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457301&type=card',
  },
  {
    name: 'Benthic Biomancer',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457176&type=card',
  },
  {
    name: 'Biogenic Ooze',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457266&type=card',
  },
  {
    name: 'Biogenic Upgrade',
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457267&type=card',
  },
  {
    name: "Biomancer's Familiar",
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457302&type=card',
  },
  {
    name: 'Blade Juggler',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457207&type=card',
  },
  {
    name: 'Bladebrand',
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457208&type=card',
  },
  {
    name: 'Blood Crypt',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457389&type=card',
  },
  {
    name: 'Bloodmist Infiltrator',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457209&type=card',
  },
  {
    name: 'Bolrac-Clan Crusher',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457303&type=card',
  },
  {
    name: 'Breeding Pool',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457390&type=card',
  },
  {
    name: 'Bring to Trial',
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457149&type=card',
  },
  {
    name: 'Burn Bright',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457237&type=card',
  },
  {
    name: 'Burning-Tree Vandal',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457238&type=card',
  },
  {
    name: 'Captive Audience',
    colors: ['Black', 'Red'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457304&type=card',
  },
  {
    name: 'Carnage',
    colors: ['Black', 'Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457366&type=card',
  },
  {
    name: 'Carnival',
    colors: ['Black', 'Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457366&type=card',
  },
  {
    name: 'Carrion Imp',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457210&type=card',
  },
  {
    name: 'Catacomb Crocodile',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457211&type=card',
  },
  {
    name: 'Cavalcade of Calamity',
    colors: ['Red'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457239&type=card',
  },
  {
    name: 'Charging War Boar',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460005&type=card',
  },
  {
    name: 'Chillbringer',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457177&type=card',
  },
  {
    name: 'Cindervines',
    colors: ['Green', 'Red'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457305&type=card',
  },
  {
    name: 'Civic Stalwart',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457150&type=card',
  },
  {
    name: 'Clamor Shaman',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457240&type=card',
  },
  {
    name: 'Clan Guildmage',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457306&type=card',
  },
  {
    name: 'Clear the Mind',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457178&type=card',
  },
  {
    name: 'Clear the Stage',
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457212&type=card',
  },
  {
    name: 'Code of Constraint',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457179&type=card',
  },
  {
    name: 'Colossus',
    colors: ['Red', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457367&type=card',
  },
  {
    name: 'Collision',
    colors: ['Red', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457367&type=card',
  },
  {
    name: 'Combine Guildmage',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457307&type=card',
  },
  {
    name: 'Concordia Pegasus',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457151&type=card',
  },
  {
    name: 'Consume',
    colors: ['White', 'Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457368&type=card',
  },
  {
    name: 'Consecrate',
    colors: ['White', 'Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457368&type=card',
  },
  {
    name: 'Consign to the Pit',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457213&type=card',
  },
  {
    name: 'Coral Commando',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457180&type=card',
  },
  {
    name: 'Cry of the Carnarium',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457214&type=card',
  },
  {
    name: 'Cult Guildmage',
    colors: ['Black', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457308&type=card',
  },
  {
    name: 'Dagger Caster',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457241&type=card',
  },
  {
    name: 'Dead Revels',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457215&type=card',
  },
  {
    name: "Debtors' Transport",
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457216&type=card',
  },
  {
    name: 'Deface',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457242&type=card',
  },
  {
    name: 'Deploy',
    colors: ['White', 'Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457369&type=card',
  },
  {
    name: 'Depose',
    colors: ['White', 'Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457369&type=card',
  },
  {
    name: 'Deputy of Detention',
    colors: ['Blue', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457309&type=card',
  },
  {
    name: "Domri's Nodorog",
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460006&type=card',
  },
  {
    name: 'Domri, Chaos Bringer',
    colors: ['Green', 'Red'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457310&type=card',
  },
  {
    name: 'Domri, City Smasher',
    colors: ['Green', 'Red'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460003&type=card',
  },
  {
    name: "Dovin's Acuity",
    colors: ['Blue', 'White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457312&type=card',
  },
  {
    name: "Dovin's Automaton",
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460002&type=card',
  },
  {
    name: "Dovin's Dismissal",
    colors: ['Blue', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460001&type=card',
  },
  {
    name: 'Dovin, Architect of Law',
    colors: ['Blue', 'White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=459999&type=card',
  },
  {
    name: 'Dovin, Grand Arbiter',
    colors: ['Blue', 'White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457311&type=card',
  },
  {
    name: 'Drill Bit',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457217&type=card',
  },
  {
    name: 'Electrodominance',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457243&type=card',
  },
  {
    name: 'Elite Arrester',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460000&type=card',
  },
  {
    name: 'Emergency Powers',
    colors: ['Blue', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457313&type=card',
  },
  {
    name: 'End-Raze Forerunners',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457268&type=card',
  },
  {
    name: 'Enraged Ceratok',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457269&type=card',
  },
  {
    name: 'Essence Capture',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457181&type=card',
  },
  {
    name: 'Ethereal Absolution',
    colors: ['Black', 'White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457314&type=card',
  },
  {
    name: 'Expose to Daylight',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457152&type=card',
  },
  {
    name: 'Eyes Everywhere',
    colors: ['Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457182&type=card',
  },
  {
    name: 'Faerie Duelist',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457183&type=card',
  },
  {
    name: 'Feral Maaka',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457244&type=card',
  },
  {
    name: 'Final Payment',
    colors: ['Black', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457315&type=card',
  },
  {
    name: 'Fireblade Artist',
    colors: ['Black', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457316&type=card',
  },
  {
    name: 'Flames of the Raze-Boar',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457245&type=card',
  },
  {
    name: 'Font of Agonies',
    colors: ['Black'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457218&type=card',
  },
  {
    name: 'Footlight Fiend',
    colors: ['Black', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457360&type=card',
  },
  {
    name: 'Forbidding Spirit',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457153&type=card',
  },
  {
    name: 'Forest',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=459998&type=card',
  },
  {
    name: 'Frenzied Arynx',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457317&type=card',
  },
  {
    name: 'Frilled Mystic',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457318&type=card',
  },
  {
    name: 'Galloping Lizrog',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457319&type=card',
  },
  {
    name: 'Gate Colossus',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457376&type=card',
  },
  {
    name: 'Gatebreaker Ram',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457270&type=card',
  },
  {
    name: 'Gates Ablaze',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457246&type=card',
  },
  {
    name: 'Gateway Plaza',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457391&type=card',
  },
  {
    name: 'Gateway Sneak',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457184&type=card',
  },
  {
    name: 'Get the Point',
    colors: ['Black', 'Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457320&type=card',
  },
  {
    name: 'Ghor-Clan Wrecker',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457247&type=card',
  },
  {
    name: 'Gift of Strength',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457271&type=card',
  },
  {
    name: 'Glass of the Guildpact',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457377&type=card',
  },
  {
    name: 'Goblin Gathering',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457248&type=card',
  },
  {
    name: 'Godless Shrine',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457392&type=card',
  },
  {
    name: 'Grasping Thrull',
    colors: ['Black', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457321&type=card',
  },
  {
    name: 'Gravel-Hide Goblin',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457249&type=card',
  },
  {
    name: 'Grotesque Demise',
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457219&type=card',
  },
  {
    name: 'Growth Spiral',
    colors: ['Green', 'Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457322&type=card',
  },
  {
    name: 'Growth-Chamber Guardian',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457272&type=card',
  },
  {
    name: 'Gruul Beastmaster',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457273&type=card',
  },
  {
    name: 'Gruul Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457393&type=card',
  },
  {
    name: 'Gruul Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457394&type=card',
  },
  {
    name: 'Gruul Locket',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457378&type=card',
  },
  {
    name: 'Gruul Spellbreaker',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457323&type=card',
  },
  {
    name: 'Guardian Project',
    colors: ['Green'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457274&type=card',
  },
  {
    name: 'Gutterbones',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457220&type=card',
  },
  {
    name: 'Gyre Engineer',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457324&type=card',
  },
  {
    name: 'Haazda Officer',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457154&type=card',
  },
  {
    name: 'Hackrobat',
    colors: ['Black', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457325&type=card',
  },
  {
    name: 'Hallowed Fountain',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457395&type=card',
  },
  {
    name: 'Hero of Precinct One',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457155&type=card',
  },
  {
    name: 'High Alert',
    colors: ['Blue', 'White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457326&type=card',
  },
  {
    name: 'Humongulus',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457185&type=card',
  },
  {
    name: 'Hydroid Krasis',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457327&type=card',
  },
  {
    name: 'Ill-Gotten Inheritance',
    colors: ['Black'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457221&type=card',
  },
  {
    name: 'Immolation Shaman',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457250&type=card',
  },
  {
    name: 'Impassioned Orator',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457156&type=card',
  },
  {
    name: 'Imperious Oligarch',
    colors: ['Black', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457328&type=card',
  },
  {
    name: 'Incongruity',
    colors: ['Blue', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457370&type=card',
  },
  {
    name: 'Incubation',
    colors: ['Blue', 'Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457370&type=card',
  },
  {
    name: 'Incubation Druid',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457275&type=card',
  },
  {
    name: 'Island',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=459995&type=card',
  },
  {
    name: 'Judith, the Scourge Diva',
    colors: ['Black', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457329&type=card',
  },
  {
    name: 'Junktroller',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457379&type=card',
  },
  {
    name: "Justiciar's Portal",
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457157&type=card',
  },
  {
    name: "Kaya's Wrath",
    colors: ['Black', 'White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457331&type=card',
  },
  {
    name: 'Kaya, Orzhov Usurper',
    colors: ['Black', 'White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457330&type=card',
  },
  {
    name: 'Knight of Sorrows',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457158&type=card',
  },
  {
    name: 'Knight of the Last Breath',
    colors: ['Black', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457332&type=card',
  },
  {
    name: 'Lavinia, Azorius Renegade',
    colors: ['Blue', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457333&type=card',
  },
  {
    name: "Lawmage's Binding",
    colors: ['Blue', 'White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457334&type=card',
  },
  {
    name: 'Light Up the Stage',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457251&type=card',
  },
  {
    name: 'Lumbering Battlement',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457159&type=card',
  },
  {
    name: 'Macabre Mockery',
    colors: ['Black', 'Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457335&type=card',
  },
  {
    name: 'Mammoth Spider',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457276&type=card',
  },
  {
    name: 'Mass Manipulation',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457186&type=card',
  },
  {
    name: 'Mesmerizing Benthid',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457187&type=card',
  },
  {
    name: 'Ministrant of Obligation',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457160&type=card',
  },
  {
    name: 'Mirror March',
    colors: ['Red'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457252&type=card',
  },
  {
    name: 'Mortify',
    colors: ['Black', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457336&type=card',
  },
  {
    name: 'Mountain',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=459997&type=card',
  },
  {
    name: 'Nikya of the Old Ways',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457337&type=card',
  },
  {
    name: 'Noxious Groodion',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457222&type=card',
  },
  {
    name: 'Open the Gates',
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457277&type=card',
  },
  {
    name: 'Orzhov Enforcer',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457223&type=card',
  },
  {
    name: 'Orzhov Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457396&type=card',
  },
  {
    name: 'Orzhov Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457397&type=card',
  },
  {
    name: 'Orzhov Locket',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457380&type=card',
  },
  {
    name: 'Orzhov Racketeers',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457224&type=card',
  },
  {
    name: 'Persistent Petitioners',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457188&type=card',
  },
  {
    name: 'Pestilent Spirit',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457225&type=card',
  },
  {
    name: 'Pitiless Pontiff',
    colors: ['Black', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457338&type=card',
  },
  {
    name: 'Plague Wight',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457226&type=card',
  },
  {
    name: 'Plains',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=459994&type=card',
  },
  {
    name: 'Plaza of Harmony',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457398&type=card',
  },
  {
    name: 'Precognitive Perception',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457189&type=card',
  },
  {
    name: 'Priest of Forgotten Gods',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457227&type=card',
  },
  {
    name: 'Prime Speaker Vannifar',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457339&type=card',
  },
  {
    name: 'Prowling Caracal',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457161&type=card',
  },
  {
    name: 'Prying Eyes',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457190&type=card',
  },
  {
    name: 'Pteramander',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457191&type=card',
  },
  {
    name: 'Quench',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457192&type=card',
  },
  {
    name: 'Rafter Demon',
    colors: ['Black', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457340&type=card',
  },
  {
    name: 'Ragefire',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460004&type=card',
  },
  {
    name: 'Rakdos Firewheeler',
    colors: ['Black', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457341&type=card',
  },
  {
    name: 'Rakdos Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457399&type=card',
  },
  {
    name: 'Rakdos Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457400&type=card',
  },
  {
    name: 'Rakdos Locket',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457381&type=card',
  },
  {
    name: 'Rakdos Roustabout',
    colors: ['Black', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457342&type=card',
  },
  {
    name: 'Rakdos Trumpeter',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457228&type=card',
  },
  {
    name: 'Rakdos, the Showstopper',
    colors: ['Black', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457343&type=card',
  },
  {
    name: 'Rally to Battle',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457162&type=card',
  },
  {
    name: 'Rampage of the Clans',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457278&type=card',
  },
  {
    name: 'Rampaging Rendhorn',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457279&type=card',
  },
  {
    name: 'Ravager Wurm',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457344&type=card',
  },
  {
    name: 'Regenesis',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457280&type=card',
  },
  {
    name: 'Replicate',
    colors: ['Blue', 'Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457371&type=card',
  },
  {
    name: 'Repudiate',
    colors: ['Blue', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457371&type=card',
  },
  {
    name: 'Resolute Watchdog',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457163&type=card',
  },
  {
    name: 'Revenge',
    colors: ['White', 'Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457372&type=card',
  },
  {
    name: 'Revival',
    colors: ['White', 'Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457372&type=card',
  },
  {
    name: 'Rhythm of the Wild',
    colors: ['Green', 'Red'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457345&type=card',
  },
  {
    name: 'Rix Maadi Reveler',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457253&type=card',
  },
  {
    name: 'Root Snare',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457281&type=card',
  },
  {
    name: 'Rubble Reading',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457254&type=card',
  },
  {
    name: 'Rubble Slinger',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457361&type=card',
  },
  {
    name: 'Rubblebelt Recluse',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457255&type=card',
  },
  {
    name: 'Rubblebelt Runner',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457346&type=card',
  },
  {
    name: 'Rumbling Ruin',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457256&type=card',
  },
  {
    name: "Sage's Row Savant",
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457193&type=card',
  },
  {
    name: "Sagittars' Volley",
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457282&type=card',
  },
  {
    name: 'Saruli Caretaker',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457283&type=card',
  },
  {
    name: 'Sauroform Hybrid',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457284&type=card',
  },
  {
    name: 'Savage Smash',
    colors: ['Green', 'Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457347&type=card',
  },
  {
    name: 'Scorchmark',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457257&type=card',
  },
  {
    name: 'Scrabbling Claws',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457382&type=card',
  },
  {
    name: 'Screaming Shield',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457383&type=card',
  },
  {
    name: 'Scuttlegator',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457362&type=card',
  },
  {
    name: 'Senate Courier',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457194&type=card',
  },
  {
    name: 'Senate Griffin',
    colors: ['Blue', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457363&type=card',
  },
  {
    name: 'Senate Guildmage',
    colors: ['Blue', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457348&type=card',
  },
  {
    name: "Sentinel's Mark",
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457164&type=card',
  },
  {
    name: 'Seraph of the Scales',
    colors: ['Black', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457349&type=card',
  },
  {
    name: 'Sharktocrab',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457350&type=card',
  },
  {
    name: 'Shimmer of Possibility',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457195&type=card',
  },
  {
    name: 'Silhana Wayfinder',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457285&type=card',
  },
  {
    name: 'Simic Ascendancy',
    colors: ['Green', 'Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457351&type=card',
  },
  {
    name: 'Simic Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457401&type=card',
  },
  {
    name: 'Simic Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457402&type=card',
  },
  {
    name: 'Simic Locket',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457384&type=card',
  },
  {
    name: 'Skarrgan Hellkite',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457258&type=card',
  },
  {
    name: 'Skatewing Spy',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457196&type=card',
  },
  {
    name: 'Skewer the Critics',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457259&type=card',
  },
  {
    name: 'Skitter Eel',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457197&type=card',
  },
  {
    name: 'Sky Tether',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457165&type=card',
  },
  {
    name: 'Slimebind',
    colors: ['Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457198&type=card',
  },
  {
    name: 'Smelt-Ward Ignus',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457260&type=card',
  },
  {
    name: 'Smothering Tithe',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457166&type=card',
  },
  {
    name: 'Spawn of Mayhem',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457229&type=card',
  },
  {
    name: 'Spear Spewer',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457261&type=card',
  },
  {
    name: 'Sphinx of Foresight',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457199&type=card',
  },
  {
    name: 'Sphinx of New Prahv',
    colors: ['Blue', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457352&type=card',
  },
  {
    name: 'Sphinx of the Guildpact',
    colors: ['Black', 'Green', 'Red', 'Blue', 'White'],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457385&type=card',
  },
  {
    name: "Sphinx's Insight",
    colors: ['Blue', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457353&type=card',
  },
  {
    name: 'Spikewheel Acrobat',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457262&type=card',
  },
  {
    name: 'Spire Mangler',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457230&type=card',
  },
  {
    name: 'Spirit of the Spires',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457167&type=card',
  },
  {
    name: 'Steeple Creeper',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457286&type=card',
  },
  {
    name: 'Stomping Ground',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457403&type=card',
  },
  {
    name: 'Stony Strength',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457287&type=card',
  },
  {
    name: 'Storm Strike',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457263&type=card',
  },
  {
    name: 'Summary Judgment',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457168&type=card',
  },
  {
    name: 'Sunder Shaman',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457354&type=card',
  },
  {
    name: 'Swamp',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=459996&type=card',
  },
  {
    name: 'Swirling Torrent',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457200&type=card',
  },
  {
    name: 'Sylvan Brushstrider',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457288&type=card',
  },
  {
    name: 'Syndicate Guildmage',
    colors: ['Black', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457355&type=card',
  },
  {
    name: 'Syndicate Messenger',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457169&type=card',
  },
  {
    name: 'Tenth District Veteran',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457170&type=card',
  },
  {
    name: 'Territorial Boar',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457289&type=card',
  },
  {
    name: 'Teysa Karlov',
    colors: ['Black', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457356&type=card',
  },
  {
    name: 'The Haunt of Hightower',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460007&type=card',
  },
  {
    name: 'Theater of Horrors',
    colors: ['Black', 'Red'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457357&type=card',
  },
  {
    name: 'Thirsting Shade',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457231&type=card',
  },
  {
    name: 'Thought Collapse',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457201&type=card',
  },
  {
    name: 'Threat',
    colors: ['Red', 'Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457373&type=card',
  },
  {
    name: 'Thrash',
    colors: ['Red', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457373&type=card',
  },
  {
    name: 'Tin Street Dodger',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457264&type=card',
  },
  {
    name: 'Titanic Brawl',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457290&type=card',
  },
  {
    name: 'Tithe Taker',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457171&type=card',
  },
  {
    name: 'Tome of the Guildpact',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457386&type=card',
  },
  {
    name: 'Tower Defense',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457291&type=card',
  },
  {
    name: 'Trollbred Guardian',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457292&type=card',
  },
  {
    name: 'Twilight Panther',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457172&type=card',
  },
  {
    name: 'Unbreakable Formation',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457173&type=card',
  },
  {
    name: 'Undercity Scavenger',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457232&type=card',
  },
  {
    name: "Undercity's Embrace",
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457233&type=card',
  },
  {
    name: 'Verity Circle',
    colors: ['Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457202&type=card',
  },
  {
    name: 'Vindictive Vampire',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457234&type=card',
  },
  {
    name: 'Vizkopa Vampire',
    colors: ['Black', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457364&type=card',
  },
  {
    name: 'Wall of Lost Thoughts',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457203&type=card',
  },
  {
    name: 'Warden',
    colors: ['White', 'Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457374&type=card',
  },
  {
    name: 'Warrant',
    colors: ['White', 'Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457374&type=card',
  },
  {
    name: 'Watchful Giant',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457174&type=card',
  },
  {
    name: 'Wilderness Reclamation',
    colors: ['Green'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457293&type=card',
  },
  {
    name: 'Windstorm Drake',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457204&type=card',
  },
  {
    name: 'Wrecking Beast',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457294&type=card',
  },
  {
    name: 'Zegana, Utopian Speaker',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457358&type=card',
  },
  {
    name: 'Zhur-Taa Goblin',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=457359&type=card',
  },
  {
    name: 'Ahn-Crop Invader',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461040&type=card',
  },
  {
    name: 'Aid the Fallen',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461003&type=card',
  },
  {
    name: "Ajani's Pridemate",
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460931&type=card',
  },
  {
    name: 'Ajani, the Greathearted',
    colors: ['Green', 'White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461111&type=card',
  },
  {
    name: "Angrath's Rampage",
    colors: ['Black', 'Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461112&type=card',
  },
  {
    name: 'Angrath, Captain of Chaos',
    colors: ['Black', 'Red'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461154&type=card',
  },
  {
    name: 'Arboreal Grazer',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461076&type=card',
  },
  {
    name: "Arlinn's Wolf",
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461078&type=card',
  },
  {
    name: 'Arlinn, Voice of the Pack',
    colors: ['Green'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461077&type=card',
  },
  {
    name: "Ashiok's Skulker",
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460967&type=card',
  },
  {
    name: 'Ashiok, Dream Render',
    colors: ['Black', 'Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461155&type=card',
  },
  {
    name: 'Augur of Bolas',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460968&type=card',
  },
  {
    name: 'Aven Eternal',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460969&type=card',
  },
  {
    name: 'Awakening of Vitu-Ghazi',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461079&type=card',
  },
  {
    name: 'Band Together',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461080&type=card',
  },
  {
    name: 'Banehound',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461004&type=card',
  },
  {
    name: 'Battlefield Promotion',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460932&type=card',
  },
  {
    name: 'Bioessence Hydra',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461113&type=card',
  },
  {
    name: 'Blast Zone',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461171&type=card',
  },
  {
    name: 'Bleeding Edge',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461005&type=card',
  },
  {
    name: 'Blindblast',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461041&type=card',
  },
  {
    name: 'Bloom Hulk',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461081&type=card',
  },
  {
    name: "Bolas's Citadel",
    colors: ['Black'],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461006&type=card',
  },
  {
    name: 'Bolt Bend',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461042&type=card',
  },
  {
    name: 'Bond of Discipline',
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460933&type=card',
  },
  {
    name: 'Bond of Flourishing',
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461082&type=card',
  },
  {
    name: 'Bond of Insight',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460970&type=card',
  },
  {
    name: 'Bond of Passion',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461043&type=card',
  },
  {
    name: 'Bond of Revival',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461007&type=card',
  },
  {
    name: 'Bulwark Giant',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460934&type=card',
  },
  {
    name: 'Burning Prophet',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461044&type=card',
  },
  {
    name: 'Callous Dismissal',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460971&type=card',
  },
  {
    name: 'Casualties of War',
    colors: ['Black', 'Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461114&type=card',
  },
  {
    name: 'Centaur Nurturer',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461083&type=card',
  },
  {
    name: 'Chainwhip Cyclops',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461045&type=card',
  },
  {
    name: 'Challenger Troll',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461084&type=card',
  },
  {
    name: "Chandra's Pyrohelix",
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461047&type=card',
  },
  {
    name: "Chandra's Triumph",
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461048&type=card',
  },
  {
    name: 'Chandra, Fire Artisan',
    colors: ['Red'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461046&type=card',
  },
  {
    name: 'Charity Extractor',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461008&type=card',
  },
  {
    name: 'Charmed Stray',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460935&type=card',
  },
  {
    name: 'Command the Dreadhorde',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461009&type=card',
  },
  {
    name: 'Commence the Endgame',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460972&type=card',
  },
  {
    name: 'Contentious Plan',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460973&type=card',
  },
  {
    name: 'Courage in Crisis',
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461085&type=card',
  },
  {
    name: 'Cruel Celebrant',
    colors: ['Black', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461115&type=card',
  },
  {
    name: 'Crush Dissent',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460974&type=card',
  },
  {
    name: 'Cyclops Electromancer',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461049&type=card',
  },
  {
    name: "Davriel's Shadowfugue",
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461011&type=card',
  },
  {
    name: 'Davriel, Rogue Shadowmage',
    colors: ['Black'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461010&type=card',
  },
  {
    name: 'Deathsprout',
    colors: ['Black', 'Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461116&type=card',
  },
  {
    name: 'Defiant Strike',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460936&type=card',
  },
  {
    name: 'Deliver Unto Evil',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461012&type=card',
  },
  {
    name: 'Demolish',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461050&type=card',
  },
  {
    name: 'Despark',
    colors: ['Black', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461117&type=card',
  },
  {
    name: 'Desperate Lunge',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463833&type=card',
  },
  {
    name: 'Devouring Hellion',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461051&type=card',
  },
  {
    name: 'Divine Arrow',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460937&type=card',
  },
  {
    name: "Domri's Ambush",
    colors: ['Green', 'Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461119&type=card',
  },
  {
    name: 'Domri, Anarch of Bolas',
    colors: ['Green', 'Red'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461118&type=card',
  },
  {
    name: "Dovin's Veto",
    colors: ['Blue', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461120&type=card',
  },
  {
    name: 'Dovin, Hand of Control',
    colors: ['Blue', 'White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461156&type=card',
  },
  {
    name: 'Dreadhorde Arcanist',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461052&type=card',
  },
  {
    name: 'Dreadhorde Butcher',
    colors: ['Black', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461121&type=card',
  },
  {
    name: 'Dreadhorde Invasion',
    colors: ['Black'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461013&type=card',
  },
  {
    name: 'Dreadhorde Twins',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461053&type=card',
  },
  {
    name: 'Dreadmalkin',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461014&type=card',
  },
  {
    name: 'Duskmantle Operative',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461015&type=card',
  },
  {
    name: 'Elite Guardmage',
    colors: ['Blue', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461122&type=card',
  },
  {
    name: 'Emergence Zone',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461172&type=card',
  },
  {
    name: 'Enforcer Griffin',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460938&type=card',
  },
  {
    name: 'Enter the God-Eternals',
    colors: ['Black', 'Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461123&type=card',
  },
  {
    name: 'Erratic Visionary',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460975&type=card',
  },
  {
    name: 'Eternal Skylord',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460976&type=card',
  },
  {
    name: 'Eternal Taskmaster',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461017&type=card',
  },
  {
    name: 'Evolution Sage',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461086&type=card',
  },
  {
    name: 'Fblthp, the Lost',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460977&type=card',
  },
  {
    name: 'Feather, the Redeemed',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461124&type=card',
  },
  {
    name: 'Finale of Devastation',
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461087&type=card',
  },
  {
    name: 'Finale of Eternity',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461018&type=card',
  },
  {
    name: 'Finale of Glory',
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460939&type=card',
  },
  {
    name: 'Finale of Promise',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461054&type=card',
  },
  {
    name: 'Finale of Revelation',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460978&type=card',
  },
  {
    name: 'Firemind Vessel',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461164&type=card',
  },
  {
    name: 'Flux Channeler',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460979&type=card',
  },
  {
    name: 'Forced Landing',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461088&type=card',
  },
  {
    name: 'Forest',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461189&type=card',
  },
  {
    name: 'Forest',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461190&type=card',
  },
  {
    name: 'Forest',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461191&type=card',
  },
  {
    name: 'Gateway Plaza',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461173&type=card',
  },
  {
    name: 'Giant Growth',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461089&type=card',
  },
  {
    name: 'Gideon Blackblade',
    colors: ['White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460940&type=card',
  },
  {
    name: "Gideon's Battle Cry",
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463834&type=card',
  },
  {
    name: "Gideon's Company",
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463835&type=card',
  },
  {
    name: "Gideon's Sacrifice",
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460941&type=card',
  },
  {
    name: "Gideon's Triumph",
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460942&type=card',
  },
  {
    name: 'Gideon, the Oathsworn',
    colors: ['White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463832&type=card',
  },
  {
    name: 'Gleaming Overseer',
    colors: ['Black', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461125&type=card',
  },
  {
    name: 'Goblin Assailant',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461055&type=card',
  },
  {
    name: 'Goblin Assault Team',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461056&type=card',
  },
  {
    name: 'God-Eternal Bontu',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461019&type=card',
  },
  {
    name: 'God-Eternal Kefnet',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460980&type=card',
  },
  {
    name: 'God-Eternal Oketra',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460943&type=card',
  },
  {
    name: 'God-Eternal Rhonas',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461090&type=card',
  },
  {
    name: "God-Pharaoh's Statue",
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461165&type=card',
  },
  {
    name: 'Grateful Apparition',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460944&type=card',
  },
  {
    name: 'Grim Initiate',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461057&type=card',
  },
  {
    name: 'Guild Globe',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461166&type=card',
  },
  {
    name: 'Guildpact Informant',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463838&type=card',
  },
  {
    name: 'Heartfire',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461058&type=card',
  },
  {
    name: 'Heartwarming Redemption',
    colors: ['Red', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461126&type=card',
  },
  {
    name: 'Herald of the Dreadhorde',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461020&type=card',
  },
  {
    name: 'Honor the God-Pharaoh',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461059&type=card',
  },
  {
    name: "Huatli's Raptor",
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461127&type=card',
  },
  {
    name: "Huatli, the Sun's Heart",
    colors: ['Green', 'White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461157&type=card',
  },
  {
    name: 'Ignite the Beacon',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460945&type=card',
  },
  {
    name: 'Ilharg, the Raze-Boar',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461060&type=card',
  },
  {
    name: 'Interplanar Beacon',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461174&type=card',
  },
  {
    name: 'Invade the City',
    colors: ['Red', 'Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461128&type=card',
  },
  {
    name: 'Invading Manticore',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461061&type=card',
  },
  {
    name: 'Iron Bully',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461167&type=card',
  },
  {
    name: 'Ironclad Krovod',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460946&type=card',
  },
  {
    name: 'Island',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461180&type=card',
  },
  {
    name: 'Island',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461181&type=card',
  },
  {
    name: 'Island',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461182&type=card',
  },
  {
    name: "Jace's Projection",
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463839&type=card',
  },
  {
    name: "Jace's Ruse",
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463840&type=card',
  },
  {
    name: "Jace's Triumph",
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460982&type=card',
  },
  {
    name: 'Jace, Arcane Strategist',
    colors: ['Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463837&type=card',
  },
  {
    name: 'Jace, Wielder of Mysteries',
    colors: ['Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460981&type=card',
  },
  {
    name: "Jaya's Greeting",
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461063&type=card',
  },
  {
    name: 'Jaya, Venerated Firemage',
    colors: ['Red'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461062&type=card',
  },
  {
    name: 'Jiang Yanggu, Wildcrafter',
    colors: ['Green'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461091&type=card',
  },
  {
    name: "Karn's Bastion",
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461175&type=card',
  },
  {
    name: 'Karn, the Great Creator',
    colors: [],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460928&type=card',
  },
  {
    name: "Kasmina's Transmutation",
    colors: ['Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460984&type=card',
  },
  {
    name: 'Kasmina, Enigmatic Mentor',
    colors: ['Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460983&type=card',
  },
  {
    name: "Kaya's Ghostform",
    colors: ['Black'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461021&type=card',
  },
  {
    name: 'Kaya, Bane of the Dead',
    colors: ['Black', 'White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461158&type=card',
  },
  {
    name: "Kiora's Dambreaker",
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460985&type=card',
  },
  {
    name: 'Kiora, Behemoth Beckoner',
    colors: ['Green', 'Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461159&type=card',
  },
  {
    name: 'Kraul Stinger',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461092&type=card',
  },
  {
    name: 'Krenko, Tin Street Kingpin',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461064&type=card',
  },
  {
    name: 'Kronch Wrangler',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461093&type=card',
  },
  {
    name: 'Law-Rune Enforcer',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460947&type=card',
  },
  {
    name: 'Lazotep Behemoth',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461022&type=card',
  },
  {
    name: 'Lazotep Plating',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460986&type=card',
  },
  {
    name: 'Lazotep Reaver',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461023&type=card',
  },
  {
    name: 'Leyline Prowler',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461129&type=card',
  },
  {
    name: "Liliana's Triumph",
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461025&type=card',
  },
  {
    name: 'Liliana, Dreadhorde General',
    colors: ['Black'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461024&type=card',
  },
  {
    name: 'Living Twister',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461130&type=card',
  },
  {
    name: 'Loxodon Sergeant',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460948&type=card',
  },
  {
    name: 'Makeshift Battalion',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460949&type=card',
  },
  {
    name: 'Mana Geode',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461168&type=card',
  },
  {
    name: 'Martyr for the Cause',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460950&type=card',
  },
  {
    name: 'Massacre Girl',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461026&type=card',
  },
  {
    name: 'Mayhem Devil',
    colors: ['Black', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461131&type=card',
  },
  {
    name: 'Merfolk Skydiver',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461132&type=card',
  },
  {
    name: 'Mizzium Tank',
    colors: ['Red'],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461065&type=card',
  },
  {
    name: 'Mobilized District',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461176&type=card',
  },
  {
    name: 'Mountain',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461186&type=card',
  },
  {
    name: 'Mountain',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461187&type=card',
  },
  {
    name: 'Mountain',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461188&type=card',
  },
  {
    name: 'Mowu, Loyal Companion',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461094&type=card',
  },
  {
    name: 'Naga Eternal',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460987&type=card',
  },
  {
    name: "Nahiri's Stoneblades",
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461066&type=card',
  },
  {
    name: 'Nahiri, Storm of Stone',
    colors: ['Red', 'White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461160&type=card',
  },
  {
    name: "Narset's Reversal",
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460989&type=card',
  },
  {
    name: 'Narset, Parter of Veils',
    colors: ['Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460988&type=card',
  },
  {
    name: 'Neheb, Dreadhorde Champion',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461067&type=card',
  },
  {
    name: 'Neoform',
    colors: ['Green', 'Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461133&type=card',
  },
  {
    name: 'New Horizons',
    colors: ['Green'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461095&type=card',
  },
  {
    name: 'Nicol Bolas, Dragon-God',
    colors: ['Black', 'Red', 'Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461134&type=card',
  },
  {
    name: "Nissa's Triumph",
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461097&type=card',
  },
  {
    name: 'Nissa, Who Shakes the World',
    colors: ['Green'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461096&type=card',
  },
  {
    name: 'Niv-Mizzet Reborn',
    colors: ['Black', 'Green', 'Red', 'Blue', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461135&type=card',
  },
  {
    name: 'No Escape',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460990&type=card',
  },
  {
    name: 'Oath of Kaya',
    colors: ['Black', 'White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461136&type=card',
  },
  {
    name: "Ob Nixilis's Cruelty",
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461028&type=card',
  },
  {
    name: 'Ob Nixilis, the Hate-Twisted',
    colors: ['Black'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461027&type=card',
  },
  {
    name: 'Orzhov Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463836&type=card',
  },
  {
    name: 'Paradise Druid',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461098&type=card',
  },
  {
    name: 'Parhelion II',
    colors: ['White'],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460951&type=card',
  },
  {
    name: 'Plains',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461177&type=card',
  },
  {
    name: 'Plains',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461178&type=card',
  },
  {
    name: 'Plains',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461179&type=card',
  },
  {
    name: 'Planewide Celebration',
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461099&type=card',
  },
  {
    name: 'Pledge of Unity',
    colors: ['Green', 'White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461137&type=card',
  },
  {
    name: 'Pollenbright Druid',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461100&type=card',
  },
  {
    name: 'Pouncing Lynx',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460952&type=card',
  },
  {
    name: 'Price of Betrayal',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461029&type=card',
  },
  {
    name: 'Primordial Wurm',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461101&type=card',
  },
  {
    name: 'Prismite',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461169&type=card',
  },
  {
    name: 'Prison Realm',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460953&type=card',
  },
  {
    name: 'Raging Kronch',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461068&type=card',
  },
  {
    name: "Ral's Outburst",
    colors: ['Red', 'Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461139&type=card',
  },
  {
    name: 'Ral, Storm Conduit',
    colors: ['Red', 'Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461138&type=card',
  },
  {
    name: 'Rally of Wings',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460954&type=card',
  },
  {
    name: 'Ravnica at War',
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460955&type=card',
  },
  {
    name: 'Relentless Advance',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460991&type=card',
  },
  {
    name: 'Rescuer Sphinx',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460992&type=card',
  },
  {
    name: 'Return to Nature',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461102&type=card',
  },
  {
    name: 'Rising Populace',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460956&type=card',
  },
  {
    name: 'Roalesk, Apex Hybrid',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461140&type=card',
  },
  {
    name: 'Role Reversal',
    colors: ['Red', 'Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461141&type=card',
  },
  {
    name: 'Rubblebelt Rioters',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461142&type=card',
  },
  {
    name: "Saheeli's Silverwing",
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461170&type=card',
  },
  {
    name: 'Saheeli, Sublime Artificer',
    colors: ['Red', 'Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461161&type=card',
  },
  {
    name: "Samut's Sprint",
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461069&type=card',
  },
  {
    name: 'Samut, Tyrant Smasher',
    colors: ['Green', 'Red'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461162&type=card',
  },
  {
    name: 'Sarkhan the Masterless',
    colors: ['Red'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461070&type=card',
  },
  {
    name: "Sarkhan's Catharsis",
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461071&type=card',
  },
  {
    name: 'Shriekdiver',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461030&type=card',
  },
  {
    name: 'Silent Submersible',
    colors: ['Blue'],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460993&type=card',
  },
  {
    name: 'Simic Guildgate',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463841&type=card',
  },
  {
    name: 'Single Combat',
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460957&type=card',
  },
  {
    name: 'Sky Theater Strix',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460994&type=card',
  },
  {
    name: 'Snarespinner',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461103&type=card',
  },
  {
    name: 'Solar Blaze',
    colors: ['Red', 'White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461143&type=card',
  },
  {
    name: "Sorin's Thirst",
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461031&type=card',
  },
  {
    name: 'Sorin, Vengeful Bloodlord',
    colors: ['Black', 'White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461144&type=card',
  },
  {
    name: 'Soul Diviner',
    colors: ['Black', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461145&type=card',
  },
  {
    name: 'Spark Double',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460995&type=card',
  },
  {
    name: 'Spark Harvest',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461032&type=card',
  },
  {
    name: 'Spark Reaper',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461033&type=card',
  },
  {
    name: 'Spellgorger Weird',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461072&type=card',
  },
  {
    name: 'Spellkeeper Weird',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460996&type=card',
  },
  {
    name: 'Steady Aim',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461104&type=card',
  },
  {
    name: 'Stealth Mission',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460997&type=card',
  },
  {
    name: 'Storm the Citadel',
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461105&type=card',
  },
  {
    name: 'Storrev, Devkarin Lich',
    colors: ['Black', 'Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461146&type=card',
  },
  {
    name: 'Sunblade Angel',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460958&type=card',
  },
  {
    name: 'Swamp',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461183&type=card',
  },
  {
    name: 'Swamp',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461184&type=card',
  },
  {
    name: 'Swamp',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461185&type=card',
  },
  {
    name: "Tamiyo's Epiphany",
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460998&type=card',
  },
  {
    name: 'Tamiyo, Collector of Tales',
    colors: ['Green', 'Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461147&type=card',
  },
  {
    name: "Teferi's Time Twist",
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460999&type=card',
  },
  {
    name: 'Teferi, Time Raveler',
    colors: ['Blue', 'White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461148&type=card',
  },
  {
    name: 'Tenth District Legionnaire',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461149&type=card',
  },
  {
    name: "Teyo's Lightshield",
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460960&type=card',
  },
  {
    name: 'Teyo, the Shieldmage',
    colors: ['White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460959&type=card',
  },
  {
    name: 'Tezzeret, Master of the Bridge',
    colors: ['Black', 'Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463842&type=card',
  },
  {
    name: 'The Elderspell',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461016&type=card',
  },
  {
    name: 'The Wanderer',
    colors: ['White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460964&type=card',
  },
  {
    name: 'Thunder Drake',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461000&type=card',
  },
  {
    name: 'Thundering Ceratok',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461106&type=card',
  },
  {
    name: "Tibalt's Rager",
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461074&type=card',
  },
  {
    name: 'Tibalt, Rakish Instigator',
    colors: ['Red'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461073&type=card',
  },
  {
    name: 'Time Wipe',
    colors: ['Blue', 'White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461150&type=card',
  },
  {
    name: 'Tithebearer Giant',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461034&type=card',
  },
  {
    name: 'Toll of the Invasion',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461035&type=card',
  },
  {
    name: 'Tolsimir, Friend to Wolves',
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461151&type=card',
  },
  {
    name: 'Tomik, Distinguished Advokist',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460961&type=card',
  },
  {
    name: 'Topple the Statue',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460962&type=card',
  },
  {
    name: 'Totally Lost',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461001&type=card',
  },
  {
    name: 'Trusted Pegasus',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460963&type=card',
  },
  {
    name: 'Turret Ogre',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461075&type=card',
  },
  {
    name: "Tyrant's Scorn",
    colors: ['Black', 'Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461152&type=card',
  },
  {
    name: "Ugin's Conjurant",
    colors: [],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460930&type=card',
  },
  {
    name: 'Ugin, the Ineffable',
    colors: [],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460929&type=card',
  },
  {
    name: 'Unlikely Aid',
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461036&type=card',
  },
  {
    name: 'Vampire Opportunist',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461037&type=card',
  },
  {
    name: "Vivien's Arkbow",
    colors: ['Green'],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461108&type=card',
  },
  {
    name: "Vivien's Grizzly",
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461109&type=card',
  },
  {
    name: 'Act of Treason',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466878&type=card',
  },
  {
    name: 'Aerial Assault',
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466755&type=card',
  },
  {
    name: 'Aether Gust',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466796&type=card',
  },
  {
    name: 'Agent of Treachery',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466797&type=card',
  },
  {
    name: 'Aggressive Mammoth',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469890&type=card',
  },
  {
    name: 'Agonizing Syphon',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466837&type=card',
  },
  {
    name: 'Air Elemental',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466798&type=card',
  },
  {
    name: 'Ajani, Inspiring Leader',
    colors: ['White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469835&type=card',
  },
  {
    name: 'Ajani, Strength of the Pride',
    colors: ['White'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466756&type=card',
  },
  {
    name: 'Ancestral Blade',
    colors: ['White'],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466757&type=card',
  },
  {
    name: 'Angel of Vitality',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466758&type=card',
  },
  {
    name: 'Angelic Gift',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466759&type=card',
  },
  {
    name: 'Angelic Guardian',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469855&type=card',
  },
  {
    name: 'Anticipate',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466799&type=card',
  },
  {
    name: 'Anvilwrought Raptor',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466975&type=card',
  },
  {
    name: 'Apostle of Purifying Light',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466760&type=card',
  },
  {
    name: 'Atemsis, All-Seeing',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466800&type=card',
  },
  {
    name: 'Audacious Thief',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466838&type=card',
  },
  {
    name: 'Bag of Holding',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466976&type=card',
  },
  {
    name: 'Barkhide Troll',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466919&type=card',
  },
  {
    name: 'Barony Vampire',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466839&type=card',
  },
  {
    name: 'Bartizan Bats',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469872&type=card',
  },
  {
    name: 'Bastion Enforcer',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469856&type=card',
  },
  {
    name: 'Battalion Foot Soldier',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466761&type=card',
  },
  {
    name: 'Befuddle',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466801&type=card',
  },
  {
    name: 'Bishop of Wings',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466762&type=card',
  },
  {
    name: 'Bladebrand',
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466840&type=card',
  },
  {
    name: 'Blightbeetle',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466841&type=card',
  },
  {
    name: 'Blood Burglar',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466842&type=card',
  },
  {
    name: 'Blood for Bones',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466843&type=card',
  },
  {
    name: 'Bloodfell Caves',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466996&type=card',
  },
  {
    name: 'Bloodsoaked Altar',
    colors: ['Black'],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466844&type=card',
  },
  {
    name: 'Bloodthirsty Aerialist',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466845&type=card',
  },
  {
    name: 'Blossoming Sands',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466997&type=card',
  },
  {
    name: 'Bogstomper',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469873&type=card',
  },
  {
    name: 'Bone Splinters',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466846&type=card',
  },
  {
    name: 'Bone to Ash',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466802&type=card',
  },
  {
    name: 'Boneclad Necromancer',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466847&type=card',
  },
  {
    name: 'Boreal Elemental',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466803&type=card',
  },
  {
    name: 'Brightwood Tracker',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466920&type=card',
  },
  {
    name: 'Brineborn Cutthroat',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466804&type=card',
  },
  {
    name: 'Bristling Boar',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469891&type=card',
  },
  {
    name: 'Brought Back',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466763&type=card',
  },
  {
    name: 'Canopy Spider',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469892&type=card',
  },
  {
    name: 'Captivating Gyre',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466805&type=card',
  },
  {
    name: 'Cavalier of Dawn',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466764&type=card',
  },
  {
    name: 'Cavalier of Flame',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466879&type=card',
  },
  {
    name: 'Cavalier of Gales',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466806&type=card',
  },
  {
    name: 'Cavalier of Night',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466848&type=card',
  },
  {
    name: 'Cavalier of Thorns',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466921&type=card',
  },
  {
    name: 'Celestial Messenger',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469840&type=card',
  },
  {
    name: 'Centaur Courser',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466922&type=card',
  },
  {
    name: 'Cerulean Drake',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466807&type=card',
  },
  {
    name: "Chandra's Embercat",
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466883&type=card',
  },
  {
    name: "Chandra's Flame Wave",
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469848&type=card',
  },
  {
    name: "Chandra's Outrage",
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466884&type=card',
  },
  {
    name: "Chandra's Regulator",
    colors: ['Red'],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466885&type=card',
  },
  {
    name: "Chandra's Spitfire",
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466886&type=card',
  },
  {
    name: 'Chandra, Acolyte of Flame',
    colors: ['Red'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466880&type=card',
  },
  {
    name: 'Chandra, Awakened Inferno',
    colors: ['Red'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466881&type=card',
  },
  {
    name: "Chandra, Flame's Fury",
    colors: ['Red'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469847&type=card',
  },
  {
    name: 'Chandra, Novice Pyromancer',
    colors: ['Red'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466882&type=card',
  },
  {
    name: 'Cloudkin Seer',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466808&type=card',
  },
  {
    name: 'Colossus Hammer',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466977&type=card',
  },
  {
    name: 'Concordia Pegasus',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469857&type=card',
  },
  {
    name: 'Convolute',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466809&type=card',
  },
  {
    name: 'Coral Merfolk',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469868&type=card',
  },
  {
    name: 'Corpse Knight',
    colors: ['Black', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466960&type=card',
  },
  {
    name: 'Creeping Trailblazer',
    colors: ['Green', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466961&type=card',
  },
  {
    name: 'Cryptic Caves',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466998&type=card',
  },
  {
    name: 'Daggersail Aeronaut',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466887&type=card',
  },
  {
    name: 'Dark Remedy',
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469874&type=card',
  },
  {
    name: 'Dawning Angel',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466765&type=card',
  },
  {
    name: 'Daybreak Chaplain',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466766&type=card',
  },
  {
    name: 'Destructive Digger',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466888&type=card',
  },
  {
    name: 'Devout Decree',
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466767&type=card',
  },
  {
    name: 'Diamond Knight',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466978&type=card',
  },
  {
    name: 'Disenchant',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466768&type=card',
  },
  {
    name: 'Disentomb',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469875&type=card',
  },
  {
    name: 'Disfigure',
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466849&type=card',
  },
  {
    name: 'Dismal Backwater',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466999&type=card',
  },
  {
    name: "Diviner's Lockbox",
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466979&type=card',
  },
  {
    name: 'Dragon Mage',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466889&type=card',
  },
  {
    name: 'Drakuseth, Maw of Flames',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466890&type=card',
  },
  {
    name: 'Drawn from Dreams',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466810&type=card',
  },
  {
    name: 'Dread Presence',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466850&type=card',
  },
  {
    name: 'Dungeon Geists',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466811&type=card',
  },
  {
    name: 'Duress',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466851&type=card',
  },
  {
    name: 'Elvish Reclaimer',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466923&type=card',
  },
  {
    name: 'Ember Hauler',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466891&type=card',
  },
  {
    name: 'Embodiment of Agonies',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466852&type=card',
  },
  {
    name: 'Empyrean Eagle',
    colors: ['Blue', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466962&type=card',
  },
  {
    name: 'Engulfing Eruption',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469881&type=card',
  },
  {
    name: 'Epicure of Blood',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466853&type=card',
  },
  {
    name: 'Eternal Isolation',
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466769&type=card',
  },
  {
    name: 'Ethereal Elk',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469852&type=card',
  },
  {
    name: 'Evolving Wilds',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467000&type=card',
  },
  {
    name: 'Faerie Miscreant',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466812&type=card',
  },
  {
    name: 'Fathom Fleet Cutthroat',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466854&type=card',
  },
  {
    name: 'Fearless Halberdier',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469882&type=card',
  },
  {
    name: 'Fencing Ace',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466770&type=card',
  },
  {
    name: 'Feral Abomination',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466855&type=card',
  },
  {
    name: 'Feral Invocation',
    colors: ['Green'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466924&type=card',
  },
  {
    name: 'Ferocious Pup',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466925&type=card',
  },
  {
    name: 'Field of the Dead',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467001&type=card',
  },
  {
    name: 'Fire Elemental',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466892&type=card',
  },
  {
    name: 'Flame Sweep',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466893&type=card',
  },
  {
    name: 'Flood of Tears',
    colors: ['Blue'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466813&type=card',
  },
  {
    name: 'Forest',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467031&type=card',
  },
  {
    name: 'Forest',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467032&type=card',
  },
  {
    name: 'Forest',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467033&type=card',
  },
  {
    name: 'Forest',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467034&type=card',
  },
  {
    name: 'Fortress Crab',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466814&type=card',
  },
  {
    name: 'Frilled Sandwalla',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469893&type=card',
  },
  {
    name: 'Frilled Sea Serpent',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466815&type=card',
  },
  {
    name: 'Frost Lynx',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466816&type=card',
  },
  {
    name: 'Fry',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466894&type=card',
  },
  {
    name: 'Gargos, Vicious Watcher',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466926&type=card',
  },
  {
    name: 'Gauntlets of Light',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466771&type=card',
  },
  {
    name: 'Gift of Paradise',
    colors: ['Green'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466927&type=card',
  },
  {
    name: 'Glaring Aegis',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466772&type=card',
  },
  {
    name: 'Glint-Horn Buccaneer',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466895&type=card',
  },
  {
    name: 'Gnarlback Rhino',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469853&type=card',
  },
  {
    name: 'Goblin Assailant',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469883&type=card',
  },
  {
    name: 'Goblin Bird-Grabber',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466896&type=card',
  },
  {
    name: 'Goblin Ringleader',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466897&type=card',
  },
  {
    name: 'Goblin Smuggler',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466898&type=card',
  },
  {
    name: 'Gods Willing',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466773&type=card',
  },
  {
    name: 'Goldmane Griffin',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469836&type=card',
  },
  {
    name: 'Golos, Tireless Pilgrim',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466980&type=card',
  },
  {
    name: 'Gorging Vulture',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466856&type=card',
  },
  {
    name: "Grafdigger's Cage",
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466981&type=card',
  },
  {
    name: 'Gravedigger',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466857&type=card',
  },
  {
    name: 'Gravewaker',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469876&type=card',
  },
  {
    name: 'Greenwood Sentinel',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466928&type=card',
  },
  {
    name: 'Griffin Protector',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466774&type=card',
  },
  {
    name: 'Griffin Sentinel',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466775&type=card',
  },
  {
    name: 'Growth Cycle',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466929&type=card',
  },
  {
    name: 'Gruesome Scourger',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466858&type=card',
  },
  {
    name: 'Haazda Officer',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469858&type=card',
  },
  {
    name: 'Hanged Executioner',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466776&type=card',
  },
  {
    name: 'Hard Cover',
    colors: ['Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466817&type=card',
  },
  {
    name: 'Healer of the Glade',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466930&type=card',
  },
  {
    name: 'Heart-Piercer Bow',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466982&type=card',
  },
  {
    name: 'Herald of the Sun',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466777&type=card',
  },
  {
    name: 'Hostile Minotaur',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469884&type=card',
  },
  {
    name: 'Howling Giant',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466931&type=card',
  },
  {
    name: 'Icon of Ancestry',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466983&type=card',
  },
  {
    name: 'Immortal Phoenix',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469885&type=card',
  },
  {
    name: 'Impassioned Orator',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469859&type=card',
  },
  {
    name: 'Imperial Outrider',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469860&type=card',
  },
  {
    name: 'Infuriate',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466899&type=card',
  },
  {
    name: 'Inspired Charge',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466778&type=card',
  },
  {
    name: 'Inspiring Captain',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466779&type=card',
  },
  {
    name: 'Ironclad Krovod',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469861&type=card',
  },
  {
    name: 'Ironroot Warlord',
    colors: ['Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466963&type=card',
  },
  {
    name: 'Island',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467019&type=card',
  },
  {
    name: 'Island',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467020&type=card',
  },
  {
    name: 'Island',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467021&type=card',
  },
  {
    name: 'Island',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467022&type=card',
  },
  {
    name: 'Jungle Hollow',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467002&type=card',
  },
  {
    name: 'Kaalia, Zenith Seeker',
    colors: ['Black', 'Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466964&type=card',
  },
  {
    name: 'Keldon Raider',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466900&type=card',
  },
  {
    name: 'Kethis, the Hidden Hand',
    colors: ['Black', 'Green', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466965&type=card',
  },
  {
    name: 'Knight of the Ebon Legion',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466859&type=card',
  },
  {
    name: "Kykar, Wind's Fury",
    colors: ['Red', 'Blue', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466966&type=card',
  },
  {
    name: 'Lavakin Brawler',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466901&type=card',
  },
  {
    name: 'Leafkin Druid',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466932&type=card',
  },
  {
    name: "Legion's End",
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466860&type=card',
  },
  {
    name: 'Leyline of Abundance',
    colors: ['Green'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466933&type=card',
  },
  {
    name: 'Leyline of Anticipation',
    colors: ['Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466818&type=card',
  },
  {
    name: 'Leyline of Combustion',
    colors: ['Red'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466902&type=card',
  },
  {
    name: 'Leyline of Sanctity',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466780&type=card',
  },
  {
    name: 'Leyline of the Void',
    colors: ['Black'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466861&type=card',
  },
  {
    name: 'Lightning Stormkin',
    colors: ['Red', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466967&type=card',
  },
  {
    name: 'Loaming Shaman',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466934&type=card',
  },
  {
    name: 'Lotus Field',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467003&type=card',
  },
  {
    name: 'Loxodon Lifechanter',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466781&type=card',
  },
  {
    name: 'Loyal Pegasus',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466782&type=card',
  },
  {
    name: 'Mammoth Spider',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466935&type=card',
  },
  {
    name: 'Maniacal Rage',
    colors: ['Red'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466903&type=card',
  },
  {
    name: 'Manifold Key',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466984&type=card',
  },
  {
    name: "Marauder's Axe",
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466985&type=card',
  },
  {
    name: 'Marauding Raptor',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466904&type=card',
  },
  {
    name: 'Mask of Immolation',
    colors: ['Red'],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466905&type=card',
  },
  {
    name: 'Master Splicer',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466783&type=card',
  },
  {
    name: 'Masterful Replication',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466819&type=card',
  },
  {
    name: 'Meteor Golem',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466986&type=card',
  },
  {
    name: 'Metropolis Sprite',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466820&type=card',
  },
  {
    name: 'Might of the Masses',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466936&type=card',
  },
  {
    name: 'Mind Rot',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466862&type=card',
  },
  {
    name: 'Moat Piranhas',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466821&type=card',
  },
  {
    name: 'Moldervine Reclamation',
    colors: ['Black', 'Green'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466968&type=card',
  },
  {
    name: 'Moment of Heroism',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466784&type=card',
  },
  {
    name: 'Moorland Inquisitor',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466785&type=card',
  },
  {
    name: 'Mountain',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467027&type=card',
  },
  {
    name: 'Mountain',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467028&type=card',
  },
  {
    name: 'Mountain',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467029&type=card',
  },
  {
    name: 'Mountain',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467030&type=card',
  },
  {
    name: 'Mu Yanling, Celestial Wind',
    colors: ['Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469839&type=card',
  },
  {
    name: 'Mu Yanling, Sky Dancer',
    colors: ['Blue'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466822&type=card',
  },
  {
    name: 'Murder',
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466863&type=card',
  },
  {
    name: 'Mystic Forge',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466987&type=card',
  },
  {
    name: 'Natural End',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466937&type=card',
  },
  {
    name: 'Negate',
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466823&type=card',
  },
  {
    name: 'Netcaster Spider',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466938&type=card',
  },
  {
    name: 'Nightpack Ambusher',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466939&type=card',
  },
  {
    name: 'Nimble Birdsticker',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469886&type=card',
  },
  {
    name: 'Noxious Grasp',
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466864&type=card',
  },
  {
    name: 'Oakenform',
    colors: ['Green'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469894&type=card',
  },
  {
    name: 'Octoprophet',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466824&type=card',
  },
  {
    name: 'Ogre Siegebreaker',
    colors: ['Black', 'Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466969&type=card',
  },
  {
    name: 'Omnath, Locus of the Roil',
    colors: ['Green', 'Red', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466970&type=card',
  },
  {
    name: 'Overcome',
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466940&type=card',
  },
  {
    name: 'Overgrowth Elemental',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466941&type=card',
  },
  {
    name: 'Pacifism',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466786&type=card',
  },
  {
    name: 'Pack Mastiff',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466906&type=card',
  },
  {
    name: 'Pattern Matcher',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466988&type=card',
  },
  {
    name: 'Phantom Warrior',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469869&type=card',
  },
  {
    name: 'Plains',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467015&type=card',
  },
  {
    name: 'Plains',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467016&type=card',
  },
  {
    name: 'Plains',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467017&type=card',
  },
  {
    name: 'Plains',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467018&type=card',
  },
  {
    name: 'Planar Cleansing',
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466787&type=card',
  },
  {
    name: 'Plummet',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466942&type=card',
  },
  {
    name: 'Portal of Sanctuary',
    colors: ['Blue'],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466825&type=card',
  },
  {
    name: 'Prismite',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466989&type=card',
  },
  {
    name: 'Prized Unicorn',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469895&type=card',
  },
  {
    name: 'Prowling Caracal',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469862&type=card',
  },
  {
    name: 'Pulse of Murasa',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466943&type=card',
  },
  {
    name: 'Pyroclastic Elemental',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469849&type=card',
  },
  {
    name: 'Rabid Bite',
    colors: ['Green'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466944&type=card',
  },
  {
    name: 'Raise the Alarm',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466788&type=card',
  },
  {
    name: 'Rapacious Dragon',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466907&type=card',
  },
  {
    name: 'Reckless Air Strike',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466908&type=card',
  },
  {
    name: 'Reduce to Ashes',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466909&type=card',
  },
  {
    name: 'Renowned Weaponsmith',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466826&type=card',
  },
  {
    name: 'Repeated Reverberation',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466910&type=card',
  },
  {
    name: 'Retributive Wand',
    colors: [],
    types: ['Artifact'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466990&type=card',
  },
  {
    name: 'Riddlemaster Sphinx',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469870&type=card',
  },
  {
    name: 'Rienne, Angel of Rebirth',
    colors: ['Green', 'Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=470528&type=card',
  },
  {
    name: 'Ripscale Predator',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466911&type=card',
  },
  {
    name: 'Risen Reef',
    colors: ['Green', 'Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466971&type=card',
  },
  {
    name: 'Rotting Regisaur',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466865&type=card',
  },
  {
    name: 'Rubblebelt Recluse',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469887&type=card',
  },
  {
    name: 'Rugged Highlands',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467004&type=card',
  },
  {
    name: 'Rule of Law',
    colors: ['White'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466789&type=card',
  },
  {
    name: "Sage's Row Denizen",
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466827&type=card',
  },
  {
    name: 'Salvager of Ruin',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466991&type=card',
  },
  {
    name: 'Sanitarium Skeleton',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466866&type=card',
  },
  {
    name: 'Savage Gorger',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469844&type=card',
  },
  {
    name: 'Savannah Sage',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469837&type=card',
  },
  {
    name: 'Scampering Scorcher',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466912&type=card',
  },
  {
    name: 'Scheming Symmetry',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466867&type=card',
  },
  {
    name: 'Scholar of the Ages',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466828&type=card',
  },
  {
    name: 'Scorch Spitter',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466913&type=card',
  },
  {
    name: 'Scoured Barrens',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467005&type=card',
  },
  {
    name: 'Scuttlemutt',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466992&type=card',
  },
  {
    name: 'Season of Growth',
    colors: ['Green'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466945&type=card',
  },
  {
    name: 'Sedge Scorpion',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466946&type=card',
  },
  {
    name: "Sephara, Sky's Blade",
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466790&type=card',
  },
  {
    name: "Serra's Guardian",
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469863&type=card',
  },
  {
    name: 'Shared Summons',
    colors: ['Green'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466947&type=card',
  },
  {
    name: 'Shifting Ceratops',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466948&type=card',
  },
  {
    name: 'Shivan Dragon',
    colors: ['Red'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469888&type=card',
  },
  {
    name: 'Shock',
    colors: ['Red'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466914&type=card',
  },
  {
    name: 'Show of Valor',
    colors: ['White'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469864&type=card',
  },
  {
    name: 'Siege Mastodon',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469865&type=card',
  },
  {
    name: 'Silverback Shaman',
    colors: ['Green'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466949&type=card',
  },
  {
    name: 'Skeleton Archer',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469877&type=card',
  },
  {
    name: 'Skyknight Vanguard',
    colors: ['Red', 'White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466972&type=card',
  },
  {
    name: 'Sleep Paralysis',
    colors: ['Blue'],
    types: ['Enchantment'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466829&type=card',
  },
  {
    name: 'Snapping Drake',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469871&type=card',
  },
  {
    name: 'Sorcerer of the Fang',
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466868&type=card',
  },
  {
    name: "Sorin's Guide",
    colors: ['Black'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469845&type=card',
  },
  {
    name: "Sorin's Thirst",
    colors: ['Black'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469878&type=card',
  },
  {
    name: 'Sorin, Imperious Bloodlord',
    colors: ['Black'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466869&type=card',
  },
  {
    name: 'Sorin, Vampire Lord',
    colors: ['Black'],
    types: ['Planeswalker'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469843&type=card',
  },
  {
    name: 'Soul Salvage',
    colors: ['Black'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466870&type=card',
  },
  {
    name: 'Soulmender',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466791&type=card',
  },
  {
    name: 'Spectral Sailor',
    colors: ['Blue'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466830&type=card',
  },
  {
    name: 'Squad Captain',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466792&type=card',
  },
  {
    name: 'Starfield Mystic',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466793&type=card',
  },
  {
    name: 'Steadfast Sentry',
    colors: ['White'],
    types: ['Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466794&type=card',
  },
  {
    name: 'Steel Overseer',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466993&type=card',
  },
  {
    name: 'Stone Golem',
    colors: [],
    types: ['Artifact', 'Creature'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466994&type=card',
  },
  {
    name: 'Swamp',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467023&type=card',
  },
  {
    name: 'Swamp',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467024&type=card',
  },
  {
    name: 'Swamp',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467025&type=card',
  },
  {
    name: 'Swamp',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467026&type=card',
  },
  {
    name: 'Swiftwater Cliffs',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467006&type=card',
  },
  {
    name: 'Take Vengeance',
    colors: ['White'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=469866&type=card',
  },
  {
    name: "Tale's End",
    colors: ['Blue'],
    types: ['Instant'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466831&type=card',
  },
  {
    name: 'Tectonic Rift',
    colors: ['Red'],
    types: ['Sorcery'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=466915&type=card',
  },
  {
    name: 'Temple of Epiphany',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467007&type=card',
  },
  {
    name: 'Temple of Malady',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467008&type=card',
  },
  {
    name: 'Temple of Mystery',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467009&type=card',
  },
  {
    name: 'Temple of Silence',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467010&type=card',
  },
  {
    name: 'Temple of Triumph',
    colors: [],
    types: ['Land'],
    image_url:
      'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=467011&type=card',
  },
];

module.exports = CARDS_DB;
