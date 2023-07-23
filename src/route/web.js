import express from "express";
import homeController from "../controller/homeController";
import fileUpload from "../configs/fileUpload";

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

  // define the upload file route
  router.get("/upload", homeController.getUploadPage);

  // define the upload single file route
  router.post(
    "/upload-profile-pic",
    fileUpload.upload.single("profile_pic"),
    homeController.handleFileUpload
  );

  // define the upload multi files route
  // 'multiple_images' is the name of our file input field
  router.post(
    "/upload-multiple-images",
    fileUpload.upload.array("multiple_images", 10), // 10 is the limit for number of uploaded files at once
    homeController.handleMultiFilesUpload
  );

  app.use("/", router);
};

export default initWebRoute;
