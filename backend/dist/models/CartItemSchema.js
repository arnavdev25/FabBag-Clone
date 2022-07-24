"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const CartSchema = new mongoose_1.default.Schema({
    category: String,
    discount: Boolean,
    fullDisc: String,
    image: String,
    mrp: Number,
    price: String,
    quantity: Number,
    shortDisc: String,
    title: String,
    userid: mongoose_1.default.Schema.Types.ObjectId,
    product_id: mongoose_1.default.Schema.Types.ObjectId,
});
exports.Cart = mongoose_1.default.model("fabbag_cartItem", CartSchema);
