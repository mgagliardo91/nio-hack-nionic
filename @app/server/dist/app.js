"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const postgraphile_1 = require("postgraphile");
const config_1 = require("./config");
const app = express_1.default();
app.use(cors_1.default());
app.use(postgraphile_1.postgraphile(config_1.database, config_1.schemas, config_1.options));
exports.default = app;
