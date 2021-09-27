--! Previous: sha1:6065c54f7a8225db88c604072593b7426abfc823
--! Hash: sha1:4e31f29ff30d377471e837add73a88a388e29b6e

--- extensions ---
drop table if exists app_public.extensions cascade;
create table app_public.extensions (
    id serial primary key,
    name varchar(24) not null unique check(name ~* '^[a-z_]{3,24}$'),
    schema text not null,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);
create trigger _extensions_set_updated_at
  before update on app_public.extensions
  for each row execute procedure app_private.tg__timestamps();

grant insert, select, update, delete on app_public.extensions to ":DATABASE_VISITOR";

comment on table app_public.extensions is 'A schema extension.';
comment on column app_public.extensions.id is 'The primary unique identifier for the extension.';
comment on column app_public.extensions.name is '@test newNameHere\nThe extension’s name.';
comment on column app_public.extensions.schema is 'The extension’s schema.';
comment on column app_public.extensions.created_at is 'The time this extension was created.';
comment on column app_public.extensions.updated_at is 'The time this extension was updated.';
