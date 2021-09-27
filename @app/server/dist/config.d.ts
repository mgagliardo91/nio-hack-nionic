import type { Pool } from 'pg';
import { PostGraphileOptions } from 'postgraphile';
export declare const database: string | Pool;
export declare const schemas: string | string[];
export declare const options: PostGraphileOptions;
export declare const port: number;
