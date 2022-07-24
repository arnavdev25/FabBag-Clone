import express from "express";
import { Router } from "express";
import { User } from "../models/User";
const crypto = require("node:crypto");
const jwt = require("jsonwebtoken");

const UserRoute = Router();

UserRoute.post(
  "/signup",
  async (req: express.Request, res: express.Response) => {
    const { first_name, last_name, email, password } = req.body;
    console.log(req.body);
    const hash = crypto
      .pbkdf2Sync(password, "SECRETSALT", 60, 64, "sha256")
      .toString("hex");
    const user = new User({ first_name, last_name, email, hash });

    user.save().then(() => {
      res.send({ message: "User created successfully" });
    });
  }
);

UserRoute.post(
  "/signin",
  async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const hash = crypto
      .pbkdf2Sync(password, "SECRETSALT", 60, 64, "sha256")
      .toString("hex");
    if (hash !== user?.hash) {
      return res.send({ message: "invalid cresentials" });
    }
    const accessToken = jwt.sign(
      { first_name: user?.first_name, email: user?.email, id: user?._id },
      "SECRET1234",
      { expiresIn: "15min" }
    );
    const refreshToken = jwt.sign(
      { first_name: user?.first_name, email: user?.email, id: user?._id },
      "SECRET1234",
      { expiresIn: "7d" }
    );

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
  }
);

UserRoute.get(
  "/profile/:id",
  async (req: express.Request, res: express.Response) => {
    const token = req.headers.authentication;
    const Signleuser = await User.find(req.params);
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
    } catch (e: any) {
      console.log("err", e.message);
      return res.status(403).send("Forbiden");
    }
  }
);

UserRoute.post(
  "/newtoken",
  async (req: express.Request, res: express.Response) => {
    // console.log("hi");
    const token = req.headers.authentication;
    // console.log(token);
    const user = await User.findOne(req.params);
    if (!token) {
      return res.send("forbiden");
      if (!token) {
        return res.send("forbiden");
      }

      try {
        const decoded = jwt.verify(token, "SECRET1234");
        // console.log("Decode",decoded);
        if (decoded) {
          const accessToken = jwt.sign(
            {
              first_name: user?.first_name,
              last_name: user?.last_name,
              id: user?._id,
            },
            "SECRET1234",
            { expiresIn: "15min" }
          );
          res.send({ message: "new token generated", accessToken });
        }
        return res.status(403).send("Forbiden");
      } catch (e: any) {
        console.log("err", e.message);
        return res.status(403).send("Forbiden");
      }
    }
  }
);

module.exports = UserRoute;
