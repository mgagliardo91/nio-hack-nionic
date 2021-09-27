"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.options = exports.schemas = exports.database = void 0;
// See https://github.com/graphile/postgraphile/blob/v4/examples/servers/common.ts
const pg_simplify_inflector_1 = __importDefault(require("@graphile-contrib/pg-simplify-inflector"));
// Connection string (or pg.Pool) for PostGraphile to use
exports.database = process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/db';
// Database schemas to use
exports.schemas = ['app_public'];
// PostGraphile options; see https://www.graphile.org/postgraphile/usage-library/#api-postgraphilepgconfig-schemaname-options
exports.options = {
    pgSettings(req) {
        var _a;
        // Adding this to ensure that all servers pass through the request in a
        // good enough way that we can extract headers.
        // CREATE FUNCTION current_user_id() RETURNS text AS $$ SELECT current_setting('graphile.test.x-user-id', TRUE); $$ LANGUAGE sql STABLE;
        return {
            role: process.env.DATABASE_VISITOR,
            'graphile.test.x-user-id': req.headers['x-user-id'] ||
                (
                // `normalizedConnectionParams` comes from websocket connections, where
                // the headers often cannot be customized by the client.
                // eslint-disable-next-line  @typescript-eslint/no-explicit-any
                (_a = req.normalizedConnectionParams) === null || _a === void 0 ? void 0 : _a['x-user-id']),
        };
    },
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    subscriptions: true,
    dynamicJson: true,
    setofFunctionsContainNulls: false,
    ignoreRBAC: false,
    showErrorStack: 'json',
    extendedErrors: ['hint', 'detail', 'errcode'],
    allowExplain: true,
    legacyRelations: 'omit',
    exportGqlSchemaPath: `${__dirname}/../schema.graphql`,
    sortExport: true,
    enableQueryBatching: true,
    appendPlugins: [pg_simplify_inflector_1.default],
    // jwtSecret: 'secret',
    // jwtPgTypeIdentifier: 'app_public.jwt_token',
};
// Server port
exports.port = process.env.PORT
    ? parseInt(process.env.PORT, 10)
    : 3000;
