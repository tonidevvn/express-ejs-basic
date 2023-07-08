import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  // middleware that is specific to this router
  router.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  });

  // define the home page route
  router.get("/", homeController.getHomePage);

  // define the about route
  router.get("/about", (req, res) => {
    res.send("I am Tony");
  });

  // define the hello route
  router.get("/hello", (req, res) => {
    res.send("Hello 5 Milion AE EJS UP DOWN!");
  });

  app.use("/", router);
};

export default initWebRoute;
