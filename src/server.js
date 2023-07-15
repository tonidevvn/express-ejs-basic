import express from "express";
import "dotenv/config";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";

const app = express();
const port = process.env.PORT || 3000;

// support parsing of application/json type post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// config view engine
configViewEngine(app);

// config route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
