"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("@Src/app"));
const configuration_1 = __importDefault(require("@Config/configuration"));
const port = configuration_1.default.app.port || 4000;
const server = app_1.default.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
process.on("SIGINT", () => {
    server.close(() => console.log("Close Server"));
});
