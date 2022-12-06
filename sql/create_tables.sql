CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS actor (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email character varying UNIQUE NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc')::timestamptz,
  updated_at timestamp with time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc')::timestamptz,
  deleted boolean NOT NULL DEFAULT false
);

INSERT INTO actor (email)
  VALUES ('ted@mail.com');