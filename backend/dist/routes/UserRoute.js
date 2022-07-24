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
const User_1 = require("../models/User");
const crypto = require("node:crypto");
const jwt = require("jsonwebtoken");
const UserRoute = (0, express_1.Router)();
UserRoute.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, email, password } = req.body;
    console.log(req.body);
    const hash = crypto
        .pbkdf2Sync(password, "SECRETSALT", 60, 64, "sha256")
        .toString("hex");
    const user = new User_1.User({ first_name, last_name, email, hash });
    user.save().then(() => {
        res.send({ message: "User created successfully" });
    });
}));
UserRoute.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.User.findOne({ email });
    const hash = crypto
        .pbkdf2Sync(password, "SECRETSALT", 60, 64, "sha256")
        .toString("hex");
    if (hash !== (user === null || user === void 0 ? void 0 : user.hash)) {
        return res.send({ message: "invalid cresentials" });
    }
    const accessToken = jwt.sign({ first_name: user === null || user === void 0 ? void 0 : user.first_name, email: user === null || user === void 0 ? void 0 : user.email, id: user === null || user === void 0 ? void 0 : user._id }, "SECRET1234", { expiresIn: "15min" });
    const refreshToken = jwt.sign({ first_name: user === null || user === void 0 ? void 0 : user.first_name, email: user === null || user === void 0 ? void 0 : user.email, id: user === null || user === void 0 ? void 0 : user._id }, "SECRET1234", { expiresIn: "7d" });
    // res.cookie("auth_token",accessToken,{httpOnly: true, secure:false}).send({message: 'Cookie set',token,user});
    // res.cookie(
    //     "auth_token",
    //     { refreshToken,  user._id },
    //     {
    //       HttpOnly: true,
    //       secure: false,
    //       sameSite: "lax",
    //     }
    //   );
    // try
    // {
    //     // res.cookie("authtoken",{accessToken},{httpOnly:true,secure:false});
    //     res.send({message: 'Cookie set',user});
    // }catch(e)
    // {
    //     console.log(e);
    // }
    res.send({ message: "Logged in", accessToken, refreshToken, user });
}));
UserRoute.get("/profile/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authentication;
    const Signleuser = yield User_1.User.find(req.params);
    if (!token) {
        return res.send("forbiden");
    }
    try {
        const decoded = jwt.verify(token, "SECRET1234");
        // console.log("Decode",decoded);
        if (decoded) {
            return res.send(Signleuser);
        }
        return res.status(403).send("Forbiden");
    }
    catch (e) {
        console.log("err", e.message);
        return res.status(403).send("Forbiden");
    }
}));
UserRoute.post("/newtoken", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("hi");
    const token = req.headers.authentication;
    // console.log(token);
    const user = yield User_1.User.findOne(req.params);
    if (!token) {
        return res.send("forbiden");
        if (!token) {
            return res.send("forbiden");
        }
        try {
            const decoded = jwt.verify(token, "SECRET1234");
            // console.log("Decode",decoded);
            if (decoded) {
                const accessToken = jwt.sign({
                    first_name: user === null || user === void 0 ? void 0 : user.first_name,
                    last_name: user === null || user === void 0 ? void 0 : user.last_name,
                    id: user === null || user === void 0 ? void 0 : user._id,
                }, "SECRET1234", { expiresIn: "15min" });
                res.send({ message: "new token generated", accessToken });
            }
            return res.status(403).send("Forbiden");
        }
        catch (e) {
            console.log("err", e.message);
            return res.status(403).send("Forbiden");
        }
    }
}));
module.exports = UserRoute;
