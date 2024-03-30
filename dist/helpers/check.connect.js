"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOverload = exports.countConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const os_1 = __importDefault(require("os"));
const process_1 = __importDefault(require("process"));
const OVERLOAD_CHECK_INTERVAL_SECONDS = 60000;
const countConnect = () => {
    const numConnection = mongoose_1.default.connections.length;
    console.log("Number of database connection:", numConnection);
};
exports.countConnect = countConnect;
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose_1.default.connections.length;
        const numCores = os_1.default.cpus().length;
        const memoryUsage = process_1.default.memoryUsage().rss;
        console.log("Active connection:", numConnection);
        console.log(`Memory Usage: ${memoryUsage / 1024 / 1024} MB`);
        const maxConnections = numCores * 5;
        if (numConnection > maxConnections) {
            console.log("Connection overload detected!");
        }
    }, OVERLOAD_CHECK_INTERVAL_SECONDS);
};
exports.checkOverload = checkOverload;
