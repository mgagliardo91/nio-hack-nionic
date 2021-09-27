import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { GraphQLClient, gql } from 'graphql-request'
import { join, resolve } from 'path';
import { readFileSync } from 'fs';

const { name, file } = yargs(hideBin(process.argv))
  .option('name', {
    alias: 'n',
    demandOption: true,
    description: 'Name of the extension'
  })
  .option('file', {
    alias: 'f',
    demandOption: true,
    default: join(__dirname, './schema.graphql'),
    description: 'Path to the schema file'
  })
  .argv


const query = gql`
  mutation($name: String!, $schema:String!) {
    createExtension(input:{
      extension: {
        name:$name,
        schema:$schema
      }
    }) {
      extension {
        name
        id
        schema
      }
    }
  }
`;

const client = new GraphQLClient('http://localhost:3000/graphql')
const schema = readFileSync(resolve(file), { encoding: 'utf-8'});
try {
  const data = await client.request(query, { name, schema });
  console.log(data)
} catch (e) {
  console.error(e);
}
