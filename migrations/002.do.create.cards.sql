CREATE TABLE IF NOT EXISTS cards (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name TEXT NOT NULL,
  colors TEXT[] NOT NULL,
  types TEXT[] NOT NULL,
  image_url TEXT NOT NULL
);