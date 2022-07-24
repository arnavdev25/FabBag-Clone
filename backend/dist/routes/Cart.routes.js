"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CartItemSchema_1 = require("../models/CartItemSchema");
const User_1 = require("../models/User");
const cartRoute = (0, express_1.Router)();
cartRoute.get("/getCartData/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id, req.params.id.length);
    if (req.params.id === null ||
        req.params.id === "" ||
        req.query.id === 'undefined') {
        return res
            .status(404)
            .send({ message: "User id not provided", error: true, data: [] });
    }
    const data = yield CartItemSchema_1.Cart.find({ userid: req.params.id });
    console.log(data);
    if (data === null) {
        return res.status(404).send({ message: "User not found", error: true, data: [] });
    }
    if (data.length === 0) {
        return res.status(200).send({ message: "Cart is empty", error: false });
    }
    return res
        .status(200)
        .send({ message: "Cart is not empty", error: false, data });
}));
cartRoute.post("/addItem", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body === "" && req.body === "undefined" && req.body === "true") {
        return res
            .status(200)
            .send({ message: "Someting went wrong", error: true });
    }
    const data = new CartItemSchema_1.Cart(req.body);
    data.save();
    res
        .status(200)
        .send({ message: "Product Added to the cart successfully.", error: false });
}));
cartRoute.delete("/deleteProduct/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params.id) {
        const data = yield CartItemSchema_1.Cart.deleteOne({ _id: req.params.id });
        return res.status(200).send({ message: "Product Deleted Succsessfully" });
    }
    return res
        .status(200)
        .send({ message: "Something went wrong!", error: false });
}));
cartRoute.patch("/updateCart", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body === "" && req.body === "undefined" && req.body === "true") {
        return res
            .status(200)
            .send({ message: "Someting went wrong", error: true });
    }
    const data = yield CartItemSchema_1.Cart.updateOne({ $and: [{ _id: req.body.product_id, userid: req.body.userid }] }, { $set: { quantity: req.body.quantity } });
    const cartData = yield CartItemSchema_1.Cart.find({ userid: req.body.userid });
    return res.status(200).send({
        message: "Cart data updated successfully",
        error: false,
        data: cartData,
    });
}));
cartRoute.post("/addUserAdress", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body === "undefined" || req.body === undefined || req.body === {}) {
        return res
            .status(200)
            .send({ message: "Something went wrong!", error: false });
    }
    const userData = User_1.User.updateOne({ email: req.body.email }, { $set: req.body });
    return res.status(200).send({
        message: "User data updated successfully",
        error: false,
    });
}));
exports.default = cartRoute;
