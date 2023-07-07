import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import configViewEngine from "./configs/viewEngine";

const app = express();
const port = process.env.PORT || 3000;

// support parsing of application/json type post data
app.use(bodyParser.json());

// config view engine
configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/hello", (req, res) => {
  res.send("Hello 5 Milion AE EJS UP DOWN!");
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
