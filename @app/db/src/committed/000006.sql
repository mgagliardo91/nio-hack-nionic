--! Previous: sha1:3bf7b24b391ccb005cd4b99aaeeb2559e3f241ff
--! Hash: sha1:2d230367a990876181ba40d8398f6e3b7b8d1c91

-- For now, opening permissions
grant usage on schema app_private to ":DATABASE_VISITOR";
grant usage on schema app_private to ":DATABASE_VISITOR";
GRANT EXECUTE ON FUNCTION app_private.tg__timestamps TO ":DATABASE_VISITOR";

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA app_public TO ":DATABASE_VISITOR";
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA app_private TO ":DATABASE_VISITOR";
