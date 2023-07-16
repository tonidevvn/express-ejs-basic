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

  // define the user details route
  router.get("/user/details/:userId", homeController.getUserDetails);

  // define the user create route
  router.post("/user/create", homeController.createNewUser);

  // define the user delete route
  router.post("/user/delete", homeController.deleteUser);

  // define the user edit route
  router.post("/user/edit/:userId", homeController.editUserDetails);

  // define the user update route
  router.post("/user/update", homeController.updateUser);

  app.use("/", router);
};

export default initWebRoute;
