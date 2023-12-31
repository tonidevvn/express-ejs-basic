import express from "express";
import "dotenv/config";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";
var morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

// log all request in the Apache combined format to STDOUT
app.use(morgan("tiny"));

// support parsing of application/json type post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// config view engine
configViewEngine(app);

// config route
initWebRoute(app);

// config API route
initAPIRoute(app);

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
