"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const mongoose_1 = require("mongoose");
const url = config_1.default.get("db.url");
const connection = (0, mongoose_1.connect)(url);
exports.default = connection;
