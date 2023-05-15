"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var express_1 = require("express");
// import bcrypt from 'bcrypt';
var client_1 = require("@prisma/client");
var authRouter = express_1.default.Router();
exports.authRouter = authRouter;
var prisma = new client_1.PrismaClient();
