'use strict';

function isValidDeck(deck) {
  const { title, contents } = deck;
  const hasTitle = typeof title === 'string' && title.length > 0;
  const hasContents = Array.isArray(contents);
  return hasTitle && hasContents;
}

module.exports = { isValidDeck };
