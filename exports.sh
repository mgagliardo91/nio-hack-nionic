#!/bin/sh

export DATABASE_OWNER=owner
export SHADOW_DATABASE_URL=postgres://user:pass@localhost:5432/db_shadow
export DATABASE_VISITOR=visitor
export DATABASE_AUTHENTICATOR=authenticator
export DATABASE_URL=postgres://user:pass@localhost:5432/db
export ROOT_DATABASE_URL=postgres://user:pass@localhost:5432/template1