const express = require("express");
const {
  userRegister,
  userLogin,
  userProfile,
  userUpdate,
  logout,
  changePassword,
} = require("../controllers/userControllers");
const jwt = require("jsonwebtoken");
const { isLogin } = require("../middleware/auth");

const userRoute = express.Router();

userRoute.post("/register", userRegister);
userRoute.post("/login", userLogin);
userRoute.get(
  "/profile",
  isLogin,

  userProfile
);
userRoute.patch("/update", userUpdate);
userRoute.patch("/change-password", isLogin, changePassword);
userRoute.get("/logout", isLogin, logout);

module.exports = userRoute;
