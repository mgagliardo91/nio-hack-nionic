# nio-hack-nionic

![nionic](./nionic.png)

## Setup

```sh
nvm use
npm install
npm start
```

By default, the following services will be available:

- React App at <http://localhost:3005/>
- GraphQL server at <http://localhost:3000/graphiql>
- Postgres at <postgres://user:pass@localhost:5432/db>

## Entity Creation

```graphql
type Test @entity(auditable: false) {
  stringField: String
  nonNullStringField: String!
  intField: Int
  nonNullIntField: Int!
  floatField: Float
  nonNullFloadField: Float!
  booleanField: Boolean
  nonNullBooleanField: Boolean!
  dateTimeField: Datetime
  nonNullDateTimeField: Datetime!
  facility: Facility # relational one-one
  facilities: [Facility] # relational many-many
}
```