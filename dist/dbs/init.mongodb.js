"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const check_connect_1 = require("@Helpers/check.connect");
const configuration_1 = __importDefault(require("@Config/configuration"));
const connectUri = configuration_1.default.mongodb.uri || "mongodb://localhost:27017/ecommerce";
class Database {
    constructor() {
        this.connect();
    }
    connect() {
        //dev
        if (1 === 1) {
            mongoose_1.default.set("debug", true);
            mongoose_1.default.set("debug", { color: true });
        }
        mongoose_1.default
            .connect(connectUri, {
            maxPoolSize: 50,
        })
            .then((_) => {
            console.log("Connected MongoDB Success");
            (0, check_connect_1.countConnect)();
        })
            .catch((err) => console.log("Connect Error:", err));
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
const initDatabase = () => {
    Database.getInstance();
};
exports.default = initDatabase;
