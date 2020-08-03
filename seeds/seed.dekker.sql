BEGIN;

TRUNCATE
  dekker_users,
  user_decks
  RESTART IDENTITY CASCADE;

INSERT INTO dekker_users (username, password, nickname)
VALUES
  ('sallyjohnson24', 'aklejremc32', 'Sally'),
  ('joebloson', '32as1df32e1a', 'Joe Blow'),
  ('manofiron', 'capisanoldlady243', 'Stark');

INSERT INTO user_decks (title, contents, deck_owner)
VALUES
  ('Zombehs!', '1,5,3,5,6,8,8,45,8,565,8,7,41,56,875,66,78,214,55,2', 2),
  ('Mana Burn', '1,5,3,5,6,8,8,45,8,565,8,7,41,56,875,66,78,214,55,2', 1),
  ('Artifacts Galore', '1,5,3,5,6,8,8,45,8,565,8,7,41,56,875,66,78,214,55,2', 3),
  ('Ninjuhs!', '1,5,3,5,6,8,8,45,8,565,8,7,41,56,875,66,78,214,55,2', 2),
  ('Power of Science', '1,5,3,5,6,8,8,45,8,565,8,7,41,56,875,66,78,214,55,2', 3),
  ('Goblin Rush', '1,5,3,5,6,8,8,45,8,565,8,7,41,56,875,66,78,214,55,2', 1),
  ('Dargons!', '1,5,3,5,6,8,8,45,8,565,8,7,41,56,875,66,78,214,55,2', 2),
  ('Myrrodin Forever', '1,5,3,5,6,8,8,45,8,565,8,7,41,56,875,66,78,214,55,2', 3),
  ('Niv-Mizzet Was Right', '1,5,3,5,6,8,8,45,8,565,8,7,41,56,875,66,78,214,55,2', 3),
  ('Vamps!', '1,5,3,5,6,8,8,45,8,565,8,7,41,56,875,66,78,214,55,2', 2),
  ('Delver', '1,5,3,5,6,8,8,45,8,565,8,7,41,56,875,66,78,214,55,2', 1);

  COMMIT;