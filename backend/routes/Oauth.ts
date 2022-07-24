import { Router } from "express";
import passport from "passport";
import { User } from "../models/User";
import { Request, Response } from "express";
export const OauthRouter = Router();
OauthRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
OauthRouter.get("/facebook", passport.authenticate("facebook"));

OauthRouter.get(
  "/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("https://warlike-current-5989.vercel.app/");
  }
);

OauthRouter.get("/user", (req, res) => {
  res.send(req.user);
});

OauthRouter.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "https://warlike-current-5989.vercel.app/",
  })
);

OauthRouter.get("/user/logout", (req: Request, res: Response) => {
  req.logout(function (err) {
    if (err) {
      return err;
    }
    res.redirect("/");
  });
});
