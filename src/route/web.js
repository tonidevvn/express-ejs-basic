import express from "express";
import homeController from "../controller/homeController";
import fileUpload from "../configs/fileUpload";
const multer = require("multer");

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
  router.post(
    "/user/update",
    (req, res, next) => {
      let upload = fileUpload.upload.single("profile_pic");

      upload(req, res, function (err) {
        if (req.fileValidationError) {
          return res.send(req.fileValidationError);
        } else if (!req.file) {
          // get default avatar // do nothing
        } else if (err instanceof multer.MulterError) {
          return res.send(`ERROR >>> ${err.message} [${err.code}]`);
        } else if (err) {
          return res.send(err);
        }
        next();
      });
    },
    homeController.updateUser
  );

  // define the upload file route
  router.get("/upload", homeController.getUploadPage);

  // define the upload single file route
  router.post(
    "/upload-profile-pic",
    (req, res, next) => {
      let upload = fileUpload.upload.single("profile_pic");

      upload(req, res, function (err) {
        if (req.fileValidationError) {
          return res.send(req.fileValidationError);
        } else if (!req.file) {
          return res.send("Please select an image to upload");
        } else if (err instanceof multer.MulterError) {
          return res.send(`ERROR >>> ${err.message} [${err.code}]`);
        } else if (err) {
          return res.send(err);
        }
        next();
      });
    },
    homeController.handleFileUpload
  );

  // define the upload multi files route
  // 'multiple_images' is the name of our file input field
  router.post(
    "/upload-multiple-images",
    (req, res, next) => {
      let multiUpload = fileUpload.upload.array("multiple_images", 3);

      multiUpload(req, res, function (err) {
        if (req.fileValidationError) {
          return res.send(req.fileValidationError);
        } else if (!req.files || !req.files.length) {
          return res.send("Please select at least one image to upload");
        } else if (err instanceof multer.MulterError) {
          return res.send(`ERROR >>> ${err.message} [${err.code}]`);
        } else if (err) {
          return res.send(err);
        }
        next();
      });
    },
    homeController.handleMultiFilesUpload
  );

  router.use(function (req, res, next) {
    if (!req.originalUrl.includes("/api/v1/")) {
      res.status(200).render("404.ejs");
    } else {
      next();
    }
  });

  app.use("/", router);
};

export default initWebRoute;
