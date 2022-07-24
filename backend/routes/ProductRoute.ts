import express from "express";
import { Router } from "express";
import mongoose from "mongoose";
import { Cart } from "../models/CartItemSchema";
import { Product } from "../models/ProductSchema";
const jwt = require("jsonwebtoken");
const objectId = require("mongodb").ObjectID;

const ProductRoute = Router();

ProductRoute.get(
  "/:_id",
  async (req: express.Request, res: express.Response) => {
    if (req.params._id) {
      console.log("req.params._id:", req.params._id);

      const productData = await Product.find({
        _id: req.params._id,
      });

      console.log("productData:", productData);

      return res.status(200).send(productData);
    }

    return res.status(404).send({ message: "Something went wrong" });
  }
);

ProductRoute.get(
  "/cartproducts/:id",
  async (req: express.Request, res: express.Response) => {
    const item = {
      userid: req.params.id,
    };
    const SignleProduct = await Cart.find(item);
    res.status(200).send(SignleProduct);
  }
);

ProductRoute.post(
  "/addToCart",
  async (req: express.Request, res: express.Response) => {
    // const token = req.headers.authentication;
    // if (!token) {
    //   return res.send("forbiden");
    // }
    // try {
      // const decoded = jwt.verify(token, "SECRET1234");
      // console.log("Decode",decoded);
      // if (decoded) {
        console.log(req.body)
        const cart = new Cart(req.body);
        cart.save();
        res.status(200).send({ message: "Product Added successfully" });
      // }
  //   } catch (e: any) {
  //     console.log("err", e.message);
  //     return res.status(403).send("Forbiden");
  //   }
  }
);

module.exports = ProductRoute;
