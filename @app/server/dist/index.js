"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const server = app_1.default.listen(config_1.port, () => {
    const address = server.address();
    if (typeof address !== 'string') {
        const href = `http://localhost:${address === null || address === void 0 ? void 0 : address.port}${config_1.options.graphiqlRoute || '/graphiql'}`;
        console.log(`PostGraphiQL available at ${href} 🚀`);
    }
    else {
        console.log(`PostGraphile listening on ${address} 🚀`);
    }
});
