# DEKKER API for DEKKER: an MTG Deck Builder

## API url

[PLACEHOLDER]

## END POINTS

### /api/cards

- GET request returns 20 cards in database.
  - Optional "page" query returns subsequent sets of 20 cards.

### /api/decks

- GET request eturns all decks in database.

- POST request adds a deck to the database.
  - Requires a body with a value named "title".
    - "title" must be a string.
  - Body may contain a optional value named "contents".
    - "contents" must be an array of integers corresponding to card IDs.

### /api/decks/:id

- GET request returns a specific deck by id as specified in the endpoint.

- PATCH request updates a specific deck by id as specified in the endpoint.

  - Requires body with "title" and "contents" values.
    - "title" must be a string.
    - "contents" must be an array of integers corresponding to card IDs.

- DELETE request deletes a specific deck by id as specified in the endpoint.
