import passport from "passport";
import { User } from "../models/User";
const FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID="481350807239-52i9brkh6vlr2h1vkhuavppvug8p56fr.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="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"
const FACEBOOK_APP_ID="820869948899400"
const  FACEBOOK_APP_SECRET="e0af7e28ea6bb7e218969de0df0f09e4"
passport.serializeUser((user:any,done)=>{
    done(null,user.id)
})
passport.deserializeUser((id,done)=>{
    User.findById(id).then((res)=>done(null,res))
})

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken:string, refreshToken:string, profile:any, cb:any) {
    console.log(profile)
    User.findOne({
          googleID:profile.id,
         name:profile.displayaName,
         email:profile._json.email

        })
    .then((res)=>{
        if(res){
            cb(null,res)
        }
        else{
            new User({googleID:profile.id}).save()
            .then((res)=>{
                cb(null,res)
            })
        }
    })
  }
));
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken:string, refreshToken:string, profile:any, cb:any) {
    console.log(profile)
    User.findOne({
          googleID:profile.id,
         name:profile.displayaName,
         email:profile._json.email
        })
    .then((res)=>{
        if(res){
            cb(null,res)
        }
        else{
            new User({googleID:profile.id}).save()
            .then((res)=>{
                cb(null,res)
            })
        }
    })
  }
  ));