import express from "express";
import APIController from "../controller/apiController";

let router = express.Router();

const initAPIRoute = (app) => {
  // middleware that is specific to this router
  router.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
  });

  // define the home page route
  // C - CREATE DATA - POST METHOD
  router.post("/create-user", APIController.createNewUser);

  // R - READ DATA - GET METHOD
  router.get("/users", APIController.getAllUsers);

  // R - READ DATA - GET METHOD
  router.get("/users/:uid", APIController.getUserInfo);

  // U - UPDATE DATA - PUT METHOD
  router.put("/update-user", APIController.updateUser);

  // D - DELETE DATA - DELETE METHOD
  router.delete("/delete-user/:uid", APIController.deleteUser);

  app.use("/api/v1/", router);
};

export default initAPIRoute;
