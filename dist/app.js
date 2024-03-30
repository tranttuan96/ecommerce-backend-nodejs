"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const init_mongodb_1 = __importDefault(require("@Dbs/init.mongodb"));
const check_connect_1 = require("@Helpers/check.connect");
const app = (0, express_1.default)();
// init middlewares
app.use((0, morgan_1.default)("[:date[iso]] :remote-addr HTTP/:http-version :method :url HTTP-Code: :status Size: :res[content-length] bytes - Response-time: :response-time ms"));
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
// init db
(0, init_mongodb_1.default)();
(0, check_connect_1.checkOverload)();
// init routes
app.get("/", (req, res, next) => {
    return res.status(200).json({
        message: "Welcome!",
    });
});
// handling errors
exports.default = app;
