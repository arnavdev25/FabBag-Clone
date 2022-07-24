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
const ProductSchema_1 = require("../models/ProductSchema");
const jwt = require("jsonwebtoken");
const objectId = require("mongodb").ObjectID;
const ProductRoute = (0, express_1.Router)();
ProductRoute.get("/:_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params._id) {
        console.log("req.params._id:", req.params._id);
        const productData = yield ProductSchema_1.Product.find({
            _id: req.params._id,
        });
        console.log("productData:", productData);
        return res.status(200).send(productData);
    }
    return res.status(404).send({ message: "Something went wrong" });
}));
ProductRoute.get("/cartproducts/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = {
        userid: req.params.id,
    };
    const SignleProduct = yield CartItemSchema_1.Cart.find(item);
    res.status(200).send(SignleProduct);
}));
ProductRoute.post("/addToCart", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const token = req.headers.authentication;
    // if (!token) {
    //   return res.send("forbiden");
    // }
    // try {
    // const decoded = jwt.verify(token, "SECRET1234");
    // console.log("Decode",decoded);
    // if (decoded) {
    console.log(req.body);
    const cart = new CartItemSchema_1.Cart(req.body);
    cart.save();
    res.status(200).send({ message: "Product Added successfully" });
    // }
    //   } catch (e: any) {
    //     console.log("err", e.message);
    //     return res.status(403).send("Forbiden");
    //   }
}));
module.exports = ProductRoute;
