import {
  makeExtendSchemaPlugin,
  makePluginByCombiningPlugins,
  gql,
} from 'graphile-utils';
import { parse, DefinitionNode, ObjectTypeDefinitionNode } from 'graphql';

import { Plugin, SchemaBuilder } from 'graphile-build';
import EventEmitter from 'events';
import { Pool } from 'pg';
import { Extension } from './types';
import { processSchemas } from './load';

export const database: string | Pool =
  process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/db'

const pool = new Pool({
  connectionString: database
});
const eventEmitter = new EventEmitter();
const nioDefinitions : {
  definitions: DefinitionNode[]
  lookupMap: { [name: string]: DefinitionNode }
} = { definitions: [], lookupMap: {}}

export const loadDynamic = async () => {
  try {
    const extensions: Extension[] = (await pool.query<Extension>('SELECT * FROM app_public.extensions')).rows;
    nioDefinitions.definitions = extensions.length ? [ ...parse(extensions.map(({ schema }) => schema).join('\n')).definitions ] : []
    nioDefinitions.lookupMap = { }
    nioDefinitions.definitions.forEach((d) => {
      if ((<ObjectTypeDefinitionNode>d).name) {
        nioDefinitions.lookupMap[(<ObjectTypeDefinitionNode>d).name.value] = d 
      }
    })
    
    eventEmitter.emit('change')
  } catch (e) {
    console.error(e);
  }
}

setTimeout(() => {
  eventEmitter.emit('change')
}, 5000);

export const TestPlugin: Plugin = (builder: SchemaBuilder) => {
  builder.registerWatcher((triggerRebuild) => {
    eventEmitter.on('change', triggerRebuild)
  },
  triggerRebuild => {
    eventEmitter.removeListener('change', triggerRebuild);
  });
  builder.hook('build', build => {
    return build.extend(build, {
      nioDefinitions,
    });
  });

  builder.hook('GraphQLObjectType:fields', (fields, builder, context) => {
    const { Self } = context;
    const { nioDefinitions } = builder;

    if (Self.name === 'MyTest') {
      console.log('yes')
    }

    const found = nioDefinitions.lookupMap[Self.name]
    if (found) {
      console.log(found);
    }

    return fields;
  });

  builder.hook('GraphQLObjectType:fields:field', (...args) => {
    const [ fields, builder, context ] = args;
    const { Self } = context;
    const { nioDefinitions } = builder;

    if (Self.name === 'MyTest') {
      console.log('yes')
    }

    const found = nioDefinitions.lookupMap[Self.name]
    if (found) {
      console.log(found);
    }

    return fields;
  });

  builder.hook('GraphQLObjectType:fields:field:args', (args, builder, context) => {
    const { Self } = context;
    const { nioDefinitions } = builder;

    if (Self.name === 'MyTest') {
      console.log('yes')
    }

    const found = nioDefinitions.lookupMap[Self.name]
    if (found) {
      console.log(found);
    }

    return args;
  });

  builder.hook('GraphQLObjectType', (type, builder, context) => {
    const { Self } = context;
    const { nioDefinitions } = builder;

    if (type.name === 'MyTest') {
      console.log('yes')
    }

    if (!nioDefinitions) {
      return type;
    }

    const found = nioDefinitions.lookupMap[type.name]
    if (found) {
      console.log(found);
    }

    return type;
  })

  builder.hook('finalize', (schema, ...args) => {
    console.log(args)
    return schema;
  });
}