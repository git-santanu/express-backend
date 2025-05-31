const express = require("express");
const { AuthenicateToken } = require("../middleware/authMiddleWare");
const { UserController } = require("../controllers");
const Router = express.Router();

// dashboard
Router.get("/dashboard", AuthenicateToken, UserController.GetUserDetails);
module.exports = Router;
