"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usecase_1 = require("application/usecases/usecase");
const express_1 = __importDefault(require("express"));
const mysql_1 = require("infrastructure/adapters/mysql/mysql");
const server_1 = require("infrastructure/adapters/http/server");
const repo = new mysql_1.PrismaRepository();
const usecase = new usecase_1.Usecase(repo);
const r = (0, server_1.setupServer)(usecase);
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(r);
app.listen(port, () => {
    console.log('server running on http://localhost:${port})');
});
