"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OauthRouter = void 0;
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
exports.OauthRouter = (0, express_1.Router)();
exports.OauthRouter.get("/google", passport_1.default.authenticate("google", { scope: ["profile", "email"] }));
exports.OauthRouter.get("/facebook", passport_1.default.authenticate("facebook"));
exports.OauthRouter.get("/google/callback", passport_1.default.authenticate("google"), (req, res) => {
    res.redirect("https://warlike-current-5989.vercel.app");
});
exports.OauthRouter.get("/user", (req, res) => {
    res.send(req.user);
});
exports.OauthRouter.get("/facebook/callback", passport_1.default.authenticate("facebook", {
    successRedirect: "https://warlike-current-5989.vercel.app",
}));
exports.OauthRouter.get("/user/logout", (req, res) => {
    req.logout(function (err) {
        if (err) {
            return err;
        }
        res.redirect("/");
    });
});
