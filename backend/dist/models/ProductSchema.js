"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    category: String,
    title: String,
    mrp: Number,
    discount: Boolean,
    price: Number,
    shortDisc: String,
    outofstock: Boolean,
    image: String,
    fullDisc: String
});
exports.Product = mongoose_1.default.model("fabbag_product", ProductSchema);
