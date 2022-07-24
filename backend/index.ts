import http from "http";
const env = require("dotenv");
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import connection from "./server/db";
import cors from "cors";
import cartRoute from "./routes/Cart.routes";
const session = require("express-session");
import passport from "passport";
require("./models/User");
require("./services/passport");
import { OauthRouter } from "./routes/Oauth";
var cookieSession = require("cookie-session");
const ProductRoute = require("./routes/ProductRoute");
const {Product} = require("./models/ProductSchema");

const dataSchema = require("./models/data");

const UserRoute = require("./routes/UserRoute");

const PORT = process.env.PORT || 8080;

const app: Application = express();
const server = http.createServer(app);
app.use(require("cookie-parser")());

app.use(
  session({
    secret: "ajxbivvebxiebxi",
    resave: false,
    saveUninitialized: true,
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", OauthRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: ["https://warlike-current-5989.vercel.app","http://localhost:3000"] }));

app.use("/product", ProductRoute);
app.use("/cart", cartRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

app.use("/product", ProductRoute);
// app.use("/user",UserRoute);

//search
app.get("/search", async (req, res) => {

  const { title } = req.query;

  console.log(title)

  const pr = await Product.find({ $text: { $search: title } });

  if (pr <= 0) {
    res.status(401).send("No Result");
  }
   else {
    res.send(pr);
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

app.use("/user", UserRoute);

server.listen(PORT, () => {
  connection.then((con) => {
    console.log(`Server is running on PORT http://localhost:${PORT}`);
  });
});
