const express = require("express");
const { AuthenicateToken } = require("../middleware/authMiddleWare");
const { UserController } = require("../controllers");
const upload = require("../helper/upload");
const Router = express.Router();

// dashboard
Router.get("/dashboard", AuthenicateToken, UserController.GetUserDetails);
Router.post("/upload", AuthenicateToken, upload.array('images', 10), UserController.UploadFiles);
Router.get("/user-files-fetch", AuthenicateToken, UserController.getUserFiles);

module.exports = Router;
