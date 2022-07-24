"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const User_1 = require("../models/User");
const FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = "481350807239-52i9brkh6vlr2h1vkhuavppvug8p56fr.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const FACEBOOK_APP_ID = "820869948899400";
const FACEBOOK_APP_SECRET = "e0af7e28ea6bb7e218969de0df0f09e4";
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser((id, done) => {
    User_1.User.findById(id).then((res) => done(null, res));
});
passport_1.default.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
}, function (accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User_1.User.findOne({
        googleID: profile.id,
        name: profile.displayaName,
        email: profile._json.email
    })
        .then((res) => {
        if (res) {
            cb(null, res);
        }
        else {
            new User_1.User({ googleID: profile.id }).save()
                .then((res) => {
                cb(null, res);
            });
        }
    });
}));
passport_1.default.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}, function (accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User_1.User.findOne({
        googleID: profile.id,
        name: profile.displayaName,
        email: profile._json.email
    })
        .then((res) => {
        if (res) {
            cb(null, res);
        }
        else {
            new User_1.User({ googleID: profile.id }).save()
                .then((res) => {
                cb(null, res);
            });
        }
    });
}));
