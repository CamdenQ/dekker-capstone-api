ALTER TABLE dekker_users 
  ADD COLUMN date_created TIMESTAMPTZ NOT NULL DEFAULT now();